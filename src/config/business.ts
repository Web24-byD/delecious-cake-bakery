/**
 * ---------------------------------------------------------------
 * EDIT ME — single source of truth for all business information.
 * ---------------------------------------------------------------
 */

export const BUSINESS_NAME = "Your Bakery Name";
export const BUSINESS_SUB = "Cake & Bakery";
export const BUSINESS_BY = "";
export const TAGLINE = "Made for Moments Worth Celebrating.";

export const ADDRESS_LINES = [
  "Your Address Line 1",
  "Your City, State, PIN",
];
export const ADDRESS = ADDRESS_LINES.join(" ");

/** Leave empty for demo/template */
export const WHATSAPP_NUMBER = "";

/** Leave empty for demo/template */
export const PHONE_NUMBER = "";

/** Leave empty for demo/template */
export const INSTAGRAM_URL = "";

/** Leave empty for demo/template */
export const GOOGLE_MAPS_URL = "";

export const DEFAULT_ENQUIRY = `Hello ${BUSINESS_NAME}, I would like to enquire about a cake.`;

export const hasWhatsApp = WHATSAPP_NUMBER.length > 0;
export const hasPhone = PHONE_NUMBER.length > 0;
export const hasInstagram = INSTAGRAM_URL.length > 0;

/** Builds a WhatsApp deep link with a prefilled message. */
export function whatsappLink(message: string = DEFAULT_ENQUIRY) {
  const text = encodeURIComponent(message);
  return hasWhatsApp
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : "";
}

export function productEnquiry(productName: string) {
  return `Hello, I am interested in the ${productName}. Please share the details and price.`;
}