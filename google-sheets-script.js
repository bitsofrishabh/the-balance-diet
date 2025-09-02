// Google Apps Script code to handle form submissions
// This code should be deployed as a Google Apps Script Web App

function doPost(e) {
  try {
    // Get the active spreadsheet (make sure to replace with your spreadsheet ID)
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Get or create the "Leads" sheet
    let sheet = spreadsheet.getSheetByName('Leads');
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Leads');
      // Add headers if this is a new sheet
      sheet.getRange(1, 1, 1, 10).setValues([[
        'Timestamp', 'Name', 'Age', 'City', 'Height (cm)', 
        'Weight (kg)', 'Goal Weight (kg)', 'Profession', 'Mobile', 'Health Goals', 'Source'
      ]]);
    }
    
    // Parse the form data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      new Date(data.timestamp),
      data.name,
      data.age,
      data.city,
      data.height,
      data.weight,
      data.goalWeight,
      data.profession,
      data.mobile,
      data.healthGoals,
      data.source
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Log the received data for debugging
    console.log('Received form data:', data);
    console.log('Mobile number received:', data.mobile);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Health Assessment Form Handler is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Optional: Function to set up the spreadsheet headers manually
function setupSpreadsheet() {
  const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  
  let sheet = spreadsheet.getSheetByName('Leads');
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Leads');
  }
  
  // Set up headers
  const headers = [
    'Timestamp', 'Name', 'Age', 'City', 'Height (cm)', 
    'Weight (kg)', 'Goal Weight (kg)', 'Profession', 'Mobile', 'Health Goals', 'Source'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format the header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  headerRange.setFontWeight('bold');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  Logger.log('Spreadsheet setup complete!');
}