import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-4 bg-slate-50 border rounded-xl outline-none transition-all duration-300
    ${focusedField === fieldName ? 'border-pakGreen ring-2 ring-pakGreen/20 bg-white' : 'border-slate-200 hover:border-slate-300'}
  `;

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-2">Send a Message</h3>
        <p className="text-slate-500">Have a specific inquiry? Let us know how we can help.</p>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
            <input 
              type="text" 
              required 
              placeholder="John Doe"
              className={inputClasses('name')}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+90..."
              className={inputClasses('phone')}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
          <input 
            type="email" 
            required 
            placeholder="john@company.com"
            className={inputClasses('email')}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
          <div className="relative">
            <select 
              className={`${inputClasses('subject')} appearance-none`}
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
            >
               <option>I want to hire workers</option>
               <option>I am a worker looking for a job</option>
               <option>Business Partnership</option>
               <option>General Inquiry</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
          <textarea 
            rows={4} 
            required 
            placeholder="Tell us about your requirements..."
            className={inputClasses('message')}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status !== 'idle'}
          className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all transform active:scale-[0.98] flex items-center justify-center shadow-lg ${
            status === 'success' 
              ? 'bg-green-500 shadow-green-500/30' 
              : 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/30'
          }`}
        >
          {status === 'idle' && (
            <>Send Message <Send size={18} className="ml-2" /></>
          )}
          {status === 'submitting' && (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          )}
          {status === 'success' && 'Message Sent Successfully!'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;