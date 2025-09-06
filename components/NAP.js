// NAP (Name, Address, Phone) Component for consistent business information
export const NAP_DATA = {
  businessName: "The Balance Diet",
  address: {
    full: "Delhi, India",
    streetAddress: "123 Health Street",
    city: "Delhi", 
    state: "Delhi",
    zipCode: "110001",
    country: "India"
  },
  phone: "+91-9149081034",
  email: "rishabhkec17@gmail.com",
  website: "https://thebalancediet.com"
};

export function NAP({ 
  showName = true, 
  showAddress = true, 
  showPhone = true, 
  showEmail = false,
  layout = "vertical", // "vertical" | "horizontal" | "inline"
  className = ""
}) {
  const { businessName, address, phone, email } = NAP_DATA;

  const containerClass = layout === "horizontal" 
    ? "flex flex-wrap items-center gap-4" 
    : layout === "inline"
    ? "inline-flex items-center gap-2 text-sm"
    : "space-y-1";

  const itemClass = layout === "inline" ? "text-sm" : "";

  return (
    <div className={`${containerClass} ${className}`}>
      {showName && (
        <div className={`font-semibold ${itemClass}`}>
          {businessName}
        </div>
      )}
      
      {showAddress && (
        <div className={`${itemClass}`}>
          <span className="sr-only">Address: </span>
          {address.full}
        </div>
      )}
      
      {showPhone && (
        <div className={`${itemClass}`}>
          <span className="sr-only">Phone: </span>
          <a 
            href={`tel:${phone}`}
            className="hover:text-primary-600 transition-colors"
            itemProp="telephone"
          >
            {phone}
          </a>
        </div>
      )}
      
      {showEmail && (
        <div className={`${itemClass}`}>
          <span className="sr-only">Email: </span>
          <a 
            href={`mailto:${email}`}
            className="hover:text-primary-600 transition-colors"
            itemProp="email"
          >
            {email}
          </a>
        </div>
      )}
    </div>
  );
}

// Microdata NAP component for enhanced SEO
export function MicrodataNAP() {
  const { businessName, address, phone, email, website } = NAP_DATA;
  
  return (
    <div itemScope itemType="https://schema.org/LocalBusiness" className="sr-only">
      <span itemProp="name">{businessName}</span>
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">{address.streetAddress}</span>
        <span itemProp="addressLocality">{address.city}</span>
        <span itemProp="addressRegion">{address.state}</span>
        <span itemProp="postalCode">{address.zipCode}</span>
        <span itemProp="addressCountry">{address.country}</span>
      </div>
      <span itemProp="telephone">{phone}</span>
      <span itemProp="email">{email}</span>
      <span itemProp="url">{website}</span>
    </div>
  );
}