import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { ShieldCheck, Target, Eye, Award, Clock, Users, TrendingUp, Globe } from 'lucide-react';

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
        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <SectionTitle title="Who We Are" />
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Leading the bridge between Pakistan's skilled workforce and Turkey's thriving industries.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              PAK TURK GLOBAL is a premier manpower recruitment and outsourcing agency specializing in connecting Pakistani skilled and unskilled workers with Turkish companies. With years of experience in international recruitment, we have established ourselves as a trusted partner for businesses seeking reliable, professional, and hardworking employees.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our commitment to excellence, legal compliance, and client satisfaction has made us the preferred choice for Turkish companies looking to enhance their operational capabilities with qualified Pakistani professionals.
            </p>
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

        {/* Mission, Vision & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Our Mission */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-turkRed/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-turkRed" size={32} />
            </div>
            <h3 className="font-bold text-xl mb-4 text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide world-class manpower solutions that empower Turkish businesses while creating meaningful employment opportunities for Pakistani workers through ethical, professional, and legally compliant recruitment practices.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-pakGreen/10 rounded-lg flex items-center justify-center mb-6">
              <Eye className="text-pakGreen" size={32} />
            </div>
            <h3 className="font-bold text-xl mb-4 text-slate-900">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To become the most trusted international manpower agency connecting Pakistan and Turkey, recognized for our integrity, quality service, and contribution to strengthening bilateral economic relationships.
            </p>
          </div>

          {/* Our Values */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck className="text-slate-700" size={32} />
            </div>
            <h3 className="font-bold text-xl mb-4 text-slate-900">Our Values</h3>
            <p className="text-slate-600 leading-relaxed">
              Integrity, professionalism, quality, transparency, and commitment to excellence in every aspect of our recruitment and placement services. We prioritize worker welfare and client satisfaction equally.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <SectionTitle 
            title="Why Choose Us" 
            subtitle="Experience the difference with Pakistan's leading international recruitment agency"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { 
                title: "Years of Experience", 
                desc: "Extensive experience in international recruitment with deep understanding of both Pakistani and Turkish markets",
                icon: Clock
              },
              { 
                title: "Legal & Verified", 
                desc: "Licensed recruitment agency ensuring complete legal compliance and proper documentation",
                icon: ShieldCheck
              },
              { 
                title: "Trusted by Many", 
                desc: "Partnered with numerous Turkish companies across construction, hospitality, manufacturing, and service sectors",
                icon: Award
              },
              { 
                title: "Quality Assurance", 
                desc: "Rigorous screening and training process ensuring only qualified candidates are presented to clients",
                icon: Users
              },
              { 
                title: "Fast Deployment", 
                desc: "Quick recruitment and deployment process to meet your urgent manpower requirements",
                icon: TrendingUp
              },
              { 
                title: "Cultural Bridge", 
                desc: "Deep understanding of both Pakistani and Turkish cultures for seamless integration",
                icon: Globe
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-slate-100 group">
                <div className="inline-block p-4 rounded-full bg-slate-50 mb-6 group-hover:bg-pakGreen/10 transition-colors">
                  <item.icon className="text-slate-700 group-hover:text-pakGreen transition-colors" size={40} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;