import React from 'react';
import { Search, Calendar, MapPin, Car, Users, Luggage } from 'lucide-react';

export default function Drives() {
  const vehicles = [
    {
      id: 1,
      type: "سيارة VIP",
      capacity: "4",
      luggage: "3",
      price: "150",
      image: "../../src/assets/viip.jpg"
    },
    {
      id: 2,
      type: "ميني فان",
      capacity: "7",
      luggage: "5",
      price: "200",
      image: "../../src/assets/minnivan.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Form */}
      <div className="bg-white/70 rounded-lg p-6 mb-8 shadow-lg">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">موقع الاستلام</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="مطار دبي الدولي"
                className="border p-3 pl-10 rounded-lg text-right bg-white w-full"
              />
              <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">موقع التوصيل</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="فندق برج العرب"
                className="border p-3 pl-10 rounded-lg text-right bg-white w-full"
              />
              <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">تاريخ ووقت الوصول</label>
            <div className="border p-3 rounded-lg flex items-center justify-between">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span>25 مارس - 14:30</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">عدد المسافرين</label>
            <div className="border p-3 rounded-lg flex items-center justify-between">
              <Users className="h-5 w-5 text-gray-400" />
              <span>4 مسافرين</span>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">عدد الحقائب</label>
            <div className="border p-3 rounded-lg flex items-center justify-between">
              <Luggage className="h-5 w-5 text-gray-400" />
              <span>3 حقائب</span>
            </div>
          </div>

          <button className="bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 self-end">
            <Search className="h-5 w-5" />
            البحث عن مركبة
          </button>
        </div>
      </div>

      {/* Vehicle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src={vehicle.image} 
              alt={vehicle.type}
              className="w-full h-fit object-contain"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold">{vehicle.type}</h3>
                <span className="text-2xl font-bold text-purple-700">${vehicle.price}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{vehicle.capacity} مقاعد</span>
                </div>
                <div className="flex items-center gap-1">
                  <Luggage className="h-4 w-4" />
                  <span>{vehicle.luggage} حقائب</span>
                </div>
              </div>
              <button className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition-colors">
                حجز الآن
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}