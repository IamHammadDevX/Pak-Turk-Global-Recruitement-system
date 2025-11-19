import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { 
  Wrench, 
  Hammer, 
  Truck, 
  Users, 
  HardHat, 
  Zap, 
  Briefcase, 
  Shield, 
  UserCog,
  Settings,
  Package,
  Building,
  Calculator,
  Coffee,
  UserCheck,
  FileText,
  Car,
  Bus
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const skilledServices = [
    { title: "Electricians", desc: "Licensed electricians with experience in residential, commercial, and industrial electrical installations and maintenance.", Icon: Zap },
    { title: "Plumbers", desc: "Skilled plumbers proficient in pipeline installation, repair, and maintenance for all types of buildings.", Icon: Wrench },
    { title: "Welders", desc: "Certified welders experienced in various welding techniques for construction, manufacturing, and industrial projects.", Icon: Hammer },
    { title: "Carpenters", desc: "Expert carpenters for furniture making, interior work, formwork, and all types of woodworking projects.", Icon: Settings },
    { title: "Mechanics", desc: "Skilled mechanics for vehicle maintenance, machinery repair, and industrial equipment servicing.", Icon: UserCog },
    { title: "Technicians", desc: "Qualified technicians for HVAC, maintenance, electronics, and various technical support roles.", Icon: Settings }
  ];

  const unskilledServices = [
    { title: "General Helpers", desc: "Reliable helpers for construction sites, warehouses, factories, and general support work.", Icon: HardHat },
    { title: "Construction Laborers", desc: "Strong and experienced laborers for all types of construction and building projects.", Icon: Hammer },
    { title: "Cleaners", desc: "Professional cleaning staff for offices, hotels, hospitals, and industrial facilities.", Icon: Users },
    { title: "Packers", desc: "Efficient packers for manufacturing, logistics, and distribution operations.", Icon: Package },
    { title: "Warehouse Workers", desc: "Experienced workers for inventory management, loading, unloading, and warehouse operations.", Icon: Building },
    { title: "Factory Workers", desc: "Dedicated workers for production lines, assembly, and various factory operations.", Icon: Settings }
  ];

  const professionalServices = [
    { title: "Engineers", desc: "Civil, mechanical, electrical, and industrial engineers for technical and management positions.", Icon: UserCheck },
    { title: "Drivers", desc: "Licensed drivers for heavy vehicles, delivery trucks, and personal transportation.", Icon: Truck },
    { title: "Accountants", desc: "Qualified accountants and bookkeepers for financial management and reporting.", Icon: Calculator },
    { title: "Hospitality Staff", desc: "Trained staff for hotels, restaurants, cafes, and hospitality services.", Icon: Coffee },
    { title: "Security Guards", desc: "Professional security personnel for residential, commercial, and industrial facilities.", Icon: Shield },
    { title: "Office Staff", desc: "Administrative assistants, receptionists, and general office support staff.", Icon: FileText }
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
        
        {/* Skilled Workers Section */}
        <div className="mb-16">
          <SectionTitle 
            title="Skilled Workers" 
            subtitle="Trained professionals with expertise in various technical fields" 
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skilledServices.map((s, i) => <ServiceCard key={i} title={s.title} description={s.desc} Icon={s.Icon} />)}
          </div>
        </div>

        {/* Unskilled Workers Section */}
        <div className="mb-16">
          <SectionTitle 
            title="Unskilled Workers" 
            subtitle="Hardworking laborers ready to support your operations" 
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unskilledServices.map((s, i) => <ServiceCard key={i} title={s.title} description={s.desc} Icon={s.Icon} />)}
          </div>
        </div>

        {/* Professional Staff Section */}
        <div>
          <SectionTitle 
            title="Professional Staff" 
            subtitle="Qualified professionals for specialized roles" 
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalServices.map((s, i) => <ServiceCard key={i} title={s.title} description={s.desc} Icon={s.Icon} />)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;