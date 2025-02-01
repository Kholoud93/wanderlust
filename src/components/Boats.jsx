import React from 'react';
import { Search, Calendar, Anchor, Users, Waves } from 'lucide-react';

export default function Boats() {
  const boats = [
    {
      id: 1,
      name: "يخت فاخر",
      type: "يخت خاص",
      capacity: "12",
      price: "1500",
      length: "40",
      image: "../../src/assets/yachtvip.jpg"
    },
    {
      id: 2,
      name: "قارب رحلات",
      type: "قارب سياحي",
      capacity: "20",
      price: "800",
      length: "35",
      image: "../../src/assets/yacht.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Form */}
      <div className="bg-white/70 rounded-lg p-6 mb-8 shadow-lg">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">نوع القارب</label>
            <select className="border p-3 rounded-lg text-right bg-white/30">
              <option>يخت خاص</option>
              <option>قارب سياحي</option>
              <option>قارب صيد</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">تاريخ الرحلة</label>
            <div className="border p-3 rounded-lg flex items-center justify-between">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span>25 مارس</span>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">عدد الضيوف</label>
            <div className="border p-3 rounded-lg flex items-center justify-between">
              <Users className="h-5 w-5 text-gray-400" />
              <span>8 أشخاص</span>
            </div>
          </div>

          <button className="bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 self-end">
            <Search className="h-5 w-5" />
            البحث عن القوارب
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <select className="border rounded-lg p-2 bg-white/30 text-black" >
            <option>السعر: من الأقل إلى الأعلى</option>
            <option>السعر: من الأعلى إلى الأقل</option>
          </select>
          <select className="border rounded-lg p-2 bg-white/30 text-black">
            <option>السعة: من الأقل إلى الأعلى</option>
            <option>السعة: من الأعلى إلى الأقل</option>
          </select>
        </div>
      </div>

      {/* Boat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boats.map((boat) => (
          <div key={boat.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src={boat.image} 
              alt={boat.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">{boat.name}</h3>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {boat.type}
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{boat.capacity} شخص</span>
                </div>
                <div className="flex items-center gap-1">
                  <Waves className="h-4 w-4" />
                  <span>{boat.length} قدم</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-700">${boat.price}</span>
                <span className="text-gray-500">في اليوم</span>
              </div>
              <button className="w-full mt-4 bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition-colors">
                حجز الآن
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}