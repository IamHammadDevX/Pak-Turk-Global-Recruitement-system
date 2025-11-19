import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Wrench, Hammer, Truck, Users, HardHat, Zap, Briefcase, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const skilledServices = [
    { title: "Electricians", desc: "Industrial and residential wiring experts.", Icon: Zap },
    { title: "Plumbers", desc: "Pipe fitting, maintenance, and installation.", Icon: Wrench },
    { title: "Welders", desc: "TIG, MIG, and Arc welding specialists.", Icon: Hammer },
    { title: "Carpenters", desc: "Furniture, shuttering, and structural woodwork.", Icon: Hammer }, // Using Hammer as fallback for tools
    { title: "Mechanics", desc: "Diesel and petrol engine maintenance.", Icon: Wrench },
  ];

  const unskilledServices = [
    { title: "General Labor", desc: "Construction site helpers and manual handling.", Icon: HardHat },
    { title: "Warehouse Staff", desc: "Loading, unloading, and inventory management.", Icon: Briefcase },
    { title: "Cleaners", desc: "Industrial and commercial cleaning staff.", Icon: Users },
  ];

  const professionalServices = [
    { title: "Drivers", desc: "LTV and HTV licensed drivers.", Icon: Truck },
    { title: "Security Guards", desc: "Trained personnel for asset protection.", Icon: Shield },
    { title: "Engineers", desc: "Civil, Mechanical, and Electrical engineers.", Icon: Briefcase },
  ];

  return (
    <div className="bg-white pb-20">
       <div className="bg-slate-900 py-20 text-center text-white mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto px-4">
          Comprehensive manpower solutions tailored to your industry needs.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Skilled Section */}
        <div className="mb-16">
          <SectionTitle title="Skilled Manpower" subtitle="Technically trained professionals ready for deployment." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skilledServices.map((s, i) => <ServiceCard key={i} title={s.title} description={s.desc} Icon={s.Icon} />)}
          </div>
        </div>

        {/* Unskilled Section */}
        <div className="mb-16">
          <SectionTitle title="Unskilled & Semi-Skilled" subtitle="Hardworking labor for construction, factories, and logistics." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unskilledServices.map((s, i) => <ServiceCard key={i} title={s.title} description={s.desc} Icon={s.Icon} />)}
          </div>
        </div>

        {/* Professional Section */}
        <div>
          <SectionTitle title="Professional Staff" subtitle="Qualified experts for specialized roles." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalServices.map((s, i) => <ServiceCard key={i} title={s.title} description={s.desc} Icon={s.Icon} />)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;