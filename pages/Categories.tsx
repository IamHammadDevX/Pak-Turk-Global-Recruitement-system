import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Categories: React.FC = () => {
  const categories = [
    { id: 1, title: "Construction", img: "https://picsum.photos/id/1076/600/400", desc: "Masons, Steel Fixers, Labor" },
    { id: 2, title: "Factory Workers", img: "https://picsum.photos/id/1081/600/400", desc: "Assembly line, Packaging, Machine Ops" },
    { id: 3, title: "Hospitality", img: "https://picsum.photos/id/435/600/400", desc: "Chefs, Waiters, Room Attendants" },
    { id: 4, title: "Transport", img: "https://picsum.photos/id/1071/600/400", desc: "Truck Drivers, Taxi Drivers, Heavy Machinery" },
    { id: 5, title: "Agriculture", img: "https://picsum.photos/id/292/600/400", desc: "Farm hands, Harvesters, Gardeners" },
    { id: 6, title: "Office Staff", img: "https://picsum.photos/id/6/600/400", desc: "Accountants, Clerks, Receptionists" },
  ];

  return (
    <div className="bg-white pb-20">
      <div className="bg-slate-900 py-20 text-center text-white mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Worker Categories</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto px-4">
          Browse the diverse industries we serve.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="aspect-w-16 aspect-h-9 h-64">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{cat.title}</h3>
                <p className="text-slate-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;