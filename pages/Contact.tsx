import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Modern Header Section */}
      <div className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-turkRed font-bold tracking-widest uppercase text-sm mb-2 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We are ready to assist you with your manpower requirements. Reach out to our teams in Pakistan or Turkey.
          </p>
        </div>
      </div>

      {/* Main Content Overlapping Header */}
      <div className="container mx-auto px-4 md:px-6 -mt-16 pb-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Info (Dark Theme) */}
          <div className="lg:w-2/5 bg-slate-900 text-white p-10 md:p-12 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-pakGreen rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-turkRed rounded-full opacity-20 blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
            <p className="text-slate-400 mb-10 relative z-10">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pakGreen transition-colors">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Phone (Turkey)</p>
                  <p className="font-medium">{COMPANY_INFO.phoneTurkey}</p>
                </div>
              </div>

               <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pakGreen transition-colors">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Phone (Pakistan)</p>
                  <p className="font-medium">{COMPANY_INFO.phonePakistan}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-turkRed transition-colors">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <p className="font-medium break-all">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-slate-900 transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Head Office</p>
                  <p className="font-medium text-sm leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form (Light Theme) */}
          <div className="lg:w-3/5 p-10 md:p-12 bg-white">
             <ContactForm />
          </div>
        </div>

        {/* Map Section - Full Width below card */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-lg h-96 border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.6349056783225!2d74.1636!3d32.1445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2983d52922c3%3A0x681036747d232085!2sDHA%20Gujranwala!5e0!3m2!1sen!2s!4v1698925000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;