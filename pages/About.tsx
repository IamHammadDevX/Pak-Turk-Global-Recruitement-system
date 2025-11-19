import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { ShieldCheck, Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">About Us</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto px-4 relative z-10">
          Connecting Pakistan’s workforce with Turkey’s industries through trust, legality, and professionalism.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24">
        {/* Mission Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <SectionTitle title="Who We Are" />
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              PAK TURK GLOBAL is a premier government-licensed overseas employment promoter. We are dedicated to bridging the gap between the skilled talent pool in Pakistan and the growing industrial demands of Turkey.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With years of experience in the recruitment sector, we understand the nuances of international labor laws, visa processing, and cultural integration. Our goal is to provide Turkish companies with a workforce that is not only skilled but also reliable and disciplined.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-turkRed/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-turkRed" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">To empower Turkish businesses by supplying top-tier Pakistani talent while creating life-changing opportunities.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-pakGreen/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="text-pakGreen" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">To become the most trusted corridor for human capital exchange between Pakistan and Turkey.</p>
              </div>
            </div>
          </div>
          
          {/* Handshake Image Composition with Flags Behind */}
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            
            {/* Background Flags Layer */}
            <div className="absolute inset-0 flex">
              {/* Pakistan Flag Half */}
              <div className="w-1/2 h-full relative bg-pakGreen overflow-hidden">
                <img 
                  src="https://flagcdn.com/w320/pk.png" 
                  alt="Pakistan Flag" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay scale-150"
                />
                 <div className="absolute inset-0 bg-pakGreen/40"></div>
              </div>
              {/* Turkey Flag Half */}
              <div className="w-1/2 h-full relative bg-turkRed overflow-hidden">
                 <img 
                  src="https://flagcdn.com/w320/tr.png" 
                  alt="Turkey Flag" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay scale-150"
                />
                <div className="absolute inset-0 bg-turkRed/40"></div>
              </div>
            </div>

            {/* Center Connecting Line/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>

            {/* Main Handshake Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-4/5 z-20 flex items-end justify-center">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Business Handshake" 
                className="h-full object-contain drop-shadow-2xl"
                style={{ maskImage: 'linear-gradient(to top, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)' }}
              />
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-8 left-0 w-full text-center z-30">
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full shadow-lg">
                <h3 className="text-white font-bold text-xl md:text-2xl tracking-wide">
                  <span className="text-green-400">PAKISTAN</span> 
                  <span className="mx-3 text-slate-300">&</span> 
                  <span className="text-red-400">TURKEY</span>
                </h3>
                <p className="text-slate-300 text-xs uppercase tracking-widest mt-1">Strategic Manpower Partnership</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-slate-50 rounded-3xl p-12 md:p-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1.5 bg-pakGreen mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We operate with complete transparency in our recruitment and billing processes." },
              { title: "Compliance", desc: "Fully compliant with Pakistani Emigration laws and Turkish Labor regulations." },
              { title: "Quality", desc: "We verify every candidate's skills through rigorous practical testing." }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-slate-100 group">
                <div className="inline-block p-4 rounded-full bg-slate-50 mb-6 group-hover:bg-pakGreen/10 transition-colors">
                  <ShieldCheck className="text-slate-700 group-hover:text-pakGreen transition-colors" size={40} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;