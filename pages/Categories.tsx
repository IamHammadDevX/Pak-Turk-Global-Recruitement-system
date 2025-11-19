import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Categories: React.FC = () => {
  const categories = [
    { id: 1, title: "Construction Workers", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", desc: "Skilled masons, laborers, and builders for all construction needs" },
    { id: 2, title: "Factory Workers", img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop", desc: "Production line workers and manufacturing staff" },
    { id: 3, title: "Hospitality Workers", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop", desc: "Hotel staff, restaurant workers, and service professionals" },
    { id: 4, title: "Security Personnel", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop", desc: "Trained security guards for all types of facilities" },
    { id: 5, title: "Professional Drivers", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop", desc: "Licensed drivers for heavy and light vehicles" },
    { id: 6, title: "Office Staff", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop", desc: "Administrative and support staff for offices" },
    { id: 7, title: "Heavy Machinery Operators", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", desc: "Certified operators for construction equipment" },
    { id: 8, title: "Agriculture Workers", img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2070&auto=format&fit=crop", desc: "Farm workers and agricultural specialists" },
  ];

  return (
    <div className="bg-white pb-20">
      <div className="bg-slate-900 py-20 text-center text-white mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Worker Categories</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto px-4">
          From construction to hospitality, we provide workers for all major industries.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 h-64">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {cat.desc}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;