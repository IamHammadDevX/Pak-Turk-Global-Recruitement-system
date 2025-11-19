import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-1.5 rounded text-pakGreen">
                <Globe size={24} />
              </div>
              <span className="text-white font-bold text-xl">PAK TURK GLOBAL</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              We bridge the gap between Pakistan's skilled workforce and Turkey's growing industries. 
              Trusted, reliable, and efficient manpower solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-pakGreen transition-colors flex items-center">
                    <span className="mr-2">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-turkRed transition-colors">Construction Labor</Link></li>
              <li><Link to="/services" className="hover:text-turkRed transition-colors">Factory Workers</Link></li>
              <li><Link to="/services" className="hover:text-turkRed transition-colors">Engineering Staff</Link></li>
              <li><Link to="/services" className="hover:text-turkRed transition-colors">Hospitality & Security</Link></li>
              <li><Link to="/services" className="hover:text-turkRed transition-colors">Heavy Machinery Operators</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0 text-pakGreen" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-pakGreen" />
                <span>{COMPANY_INFO.phoneTurkey} (TR)</span>
              </li>
               <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-pakGreen" />
                <span>{COMPANY_INFO.phonePakistan} (PK)</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-turkRed" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} PAK TURK GLOBAL. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;