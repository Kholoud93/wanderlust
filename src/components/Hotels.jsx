import React from 'react';
import { Search, MapPin, Star, Calendar, Users } from 'lucide-react';


export default function Hotels() {
  const hotels = [
    {
      id: 1,
      name: "فندق الريتز كارلتون",
      location: "دبي, الإمارات",
      price: "1,200",
      rating: 4.8,
      image: "../../src/assets/hotel1.jpg"
    },
    {
      id: 2,
      name: "فندق برج العرب",
      location: "دبي, الإمارات",
      price: "2,500",
      rating: 5.0,
      image: "../../src/assets/hotel1.jpg"
    },
 
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Form */}
      <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label className="text-black mb-2 tetx-end">الوجهة</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="دبي, الإمارات"
                className="border p-3 pl-10 rounded-lg text-right bg-white w-full"
              />
              <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">تاريخ الوصول</label>
            <div className="relative">
              <div className="border p-3 rounded-lg flex items-center justify-between">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span>25 مارس</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">تاريخ المغادرة</label>
            <div className="relative">
              <div className="border p-3 rounded-lg flex items-center justify-between">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span>27 مارس</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-black mb-2 text-end">الضيوف والغرف</label>
            <div className="border p-3 rounded-lg flex items-center justify-between">
              <Users className="h-5 w-5 text-gray-400" />
              <span>2 بالغين, 1 غرفة</span>
            </div>
          </div>
        </div>

        <button className="bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 mt-4">
          <Search className="h-5 w-5" />
          البحث عن الفنادق
        </button>
      </div>

      {/* Hotel Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src={hotel.image} 
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">{hotel.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{hotel.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="h-4 w-4" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-700">${hotel.price}</span>
                <span className="text-gray-500">في الليلة</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
