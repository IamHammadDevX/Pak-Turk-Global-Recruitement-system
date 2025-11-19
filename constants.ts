import { Phone, Mail, MapPin } from 'lucide-react';

export const COMPANY_INFO = {
  name: "PAK TURK GLOBAL",
  email: "business@pakturkglobal.com",
  phoneTurkey: "+90 538 342 29 22",
  phonePakistan: "+92-331-6272691",
  whatsappRaw: "905383422922", // For API link
  address: "Main Boulevard, Commercial Zone 2 South, DHA, Gujranwala, Pakistan",
  addressTurkey: "Istanbul, Turkey (Liaison Office)",
};

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Worker Categories", path: "/categories" },
  { name: "Contact", path: "/contact" },
];

export const SERVICES_LIST = [
  {
    category: "Skilled Workers",
    items: ["Electricians", "Plumbers", "Welders", "Carpenters", "Mechanics", "Technicians"]
  },
  {
    category: "Unskilled Workers",
    items: ["Helpers", "Laborers", "Cleaners", "Packers", "Warehouse Workers"]
  },
  {
    category: "Professional Staff",
    items: ["Engineers", "Drivers", "Accountants", "Hospitality Staff", "Security Guards"]
  }
];