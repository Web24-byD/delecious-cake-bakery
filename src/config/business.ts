/**
 * ---------------------------------------------------------------
 * EDIT ME — single source of truth for all business information.
 * Replace the placeholder values below with the real details.
 * ---------------------------------------------------------------
 */

export const BUSINESS_NAME = "DELICIOUS Cake & Bakery";
export const BUSINESS_SUB = "Cake & Bakery";
export const BUSINESS_BY = "BY TANVI";
export const TAGLINE = "Made for Moments Worth Celebrating.";

export const ADDRESS_LINES = [
  "140, Sardar Rd, Shyampark Society,",
  "Krishnanagar, Ahmedabad, Gujarat 382345",
];
export const ADDRESS = ADDRESS_LINES.join(" ");

/** Digits only, with country code, e.g. "919876543210". Leave "" if unknown. */
export const WHATSAPP_NUMBER = "919913154636";
/** Display / tel: number, e.g. "+91 98765 43210". Leave "" if unknown. */
export const PHONE_NUMBER = "+919913154636";
/** Full Instagram profile URL. Leave "" if unknown. */
export const INSTAGRAM_URL = "https://www.instagram.com/delicious_cake_n_bakery/?utm_source=chatgpt.com";
/** Google Maps link or embed URL for the shop. Leave "" to use an address search. */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

export const DEFAULT_ENQUIRY = `Hello ${BUSINESS_NAME} ${BUSINESS_BY}, I would like to enquire about a cake.`;

export const hasWhatsApp = WHATSAPP_NUMBER.length > 0;
export const hasPhone = PHONE_NUMBER.length > 0;
export const hasInstagram = INSTAGRAM_URL.length > 0;

/** Builds a WhatsApp deep link with a prefilled message. */
export function whatsappLink(message: string = DEFAULT_ENQUIRY) {
  const text = encodeURIComponent(message);
  return hasWhatsApp
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export function productEnquiry(productName: string) {
  return `Hello, I am interested in the ${productName}. Please share the details and price.`;
}
