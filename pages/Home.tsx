import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, HardHat, Globe, Clock, Shield, Award, TrendingUp } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import { COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1031/1920/1080" 
            alt="Construction Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-turkRed/20 border border-turkRed/50 rounded-full mb-6 animate-pulse">
              <span className="text-turkRed font-bold text-sm uppercase tracking-wider">Leader in Manpower Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Hire Skilled <span className="text-pakGreen">Pakistani</span> Workers for Your <span className="text-turkRed">Turkish</span> Business
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We specialize in recruiting and outsourcing reliable, hard-working, and compliant manpower from Pakistan to Turkey. From construction to hospitality, we supply the workforce you need to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-pakGreen hover:bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center"
              >
                Contact Us Now <ArrowRight className="ml-2" size={20} />
              </Link>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Why Choose Pakistani Workers?" 
            subtitle="Experienced, hardworking, and dedicated professionals ready to contribute to your business success"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Verified & Skilled", desc: "All workers are professionally trained, certified, and background-verified for quality assurance", icon: HardHat },
              { title: "Cost-Effective", desc: "Competitive rates without compromising on quality, helping you optimize operational costs", icon: Users },
              { title: "Quick Deployment", desc: "Fast recruitment and deployment process to meet your urgent manpower requirements", icon: Globe },
              { title: "Legal Compliance", desc: "Complete documentation, work permits, and legal compliance handled professionally", icon: CheckCircle },
              { title: "Cultural Adaptability", desc: "Workers experienced in international environments, ready to adapt to Turkish workplace culture", icon: Globe },
              { title: "24/7 Support", desc: "Continuous support and assistance throughout the entire recruitment and employment period", icon: Users },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pakGreen/10 text-pakGreen mb-6">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="https://picsum.photos/id/1050/800/600" 
                alt="Team of workers" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                Our Expertise in <span className="text-turkRed">Manpower Recruitment</span>
              </h2>
              <p className="text-slate-600 mb-6 text-lg">
                At PAK TURK GLOBAL, we handle the entire recruitment lifecycle. From sourcing candidates in Pakistan to visa processing and deployment in Turkey, we ensure a seamless experience for employers.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Strict Background Checks & Verification",
                  "Technical Skills Testing Centers",
                  "Visa & Immigration Documentation Support",
                  "Pre-departure Orientation & Training"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-800 font-medium">
                    <CheckCircle className="text-pakGreen mr-3" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-pakGreen font-bold hover:text-green-800 flex items-center">
                Learn More About Us <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Track Record */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Track Record" 
            subtitle="Numbers that speak for our excellence and reliability"
            center
            className="text-white"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { number: "500+", label: "Workers Deployed", icon: Users },
              { number: "50+", label: "Turkish Companies Served", icon: Award },
              { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
              { number: "5+", label: "Years Experience", icon: Clock },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-turkRed/20 text-turkRed mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="What Our Workers Say" 
            subtitle="Hear from Pakistani and Turkish workers who found opportunities through PAK TURK GLOBAL"
            center
          />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Workforce?</h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements. We have a database of thousands of ready-to-deploy workers.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-turkRed hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-colors shadow-lg hover:shadow-red-600/30"
          >
            Get a Quote Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;