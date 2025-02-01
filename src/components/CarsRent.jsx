import React from 'react';
import { Search, Calendar, MapPin, Car, Filter } from 'lucide-react';

export default function CarsRent() {
  const cars = [
    {
      id: 1,
      name: "تويوتا كامري",
      type: "سيدان",
      price: "200",
      seats: "5",
      transmission: "أوتوماتيك",
      image: "../../src/assets/toyota.png"
    },
    {
      id: 2,
      name: "هوندا CR-V",
      type: "SUV",
      price: "250",
      seats: "7",
      transmission: "أوتوماتيك",
      image: "../../src/assets/crv.jpg"
    },

  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Form */}
      <div className="bg-white/30 rounded-lg p-6 mb-8 shadow-lg">
        <div className="grid grid-cols-4 gap-4">
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
            <label className="text-black mb-2 text-end">تاريخ الاستلام</label>
            <div className="border p-3 rounded-lg flex items-center justify-between">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span>25 مارس</span>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">تاريخ التسليم</label>
            <div className="border p-3 rounded-lg flex items-center justify-between">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span>27 مارس</span>
            </div>
          </div>

          <button className="bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 self-end">
            <Search className="h-5 w-5" />
            البحث عن السيارات
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <select className="border rounded-lg p-2 bg-white text-black">
            <option>جميع السيارات</option>
            <option>سيدان</option>
            <option>SUV</option>
          </select>
          <select className="border rounded-lg p-2 bg-white text-black">
            <option>السعر: من الأقل إلى الأعلى</option>
            <option>السعر: من الأعلى إلى الأقل</option>
          </select>
        </div>
      </div>

      {/* Car Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src={car.image} 
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">{car.name}</h3>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">{car.type}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Car className="h-4 w-4" />
                  <span>{car.transmission}</span>
                </div>
                <span>{car.seats} مقاعد</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-700">${car.price}</span>
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
