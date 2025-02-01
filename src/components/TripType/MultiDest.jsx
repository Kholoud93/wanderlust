import React from 'react';
import { Calendar, Search, Users, PlaneTakeoff, PlaneLanding } from 'lucide-react';

export default function MultiDest() {
  return (
    <div className="flex gap-4 flex-col">
      {/* First Destination */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="text-black mb-2">محطة المغادرة</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="اسطنبول (تركيا)"
              className="border p-3 pl-10 rounded-lg text-right bg-white w-full"
            />
            <PlaneTakeoff className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="text-black mb-2">محطة الوصول</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="الرياض (المملكة السعودية)"
              className="border p-3 pl-10 rounded-lg text-right bg-white w-full"
            />
            <PlaneLanding className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="text-black mb-2">تاريخ الرحلة</label>
          <div className="border p-3 rounded-lg flex items-center justify-between gap-2">
            <span>السبت, <span className='font-bold text-orange-500'>25</span> مارس</span>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Second Destination */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="text-black mb-2">محطة المغادرة</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="الرياض (المملكة السعودية)"
              className="border p-3 pl-10 rounded-lg text-right bg-white w-full"
            />
            <PlaneTakeoff className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="text-black mb-2">محطة الوصول</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="دبي (الإمارات)"
              className="border p-3 pl-10 rounded-lg text-right bg-white w-full"
            />
            <PlaneLanding className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="text-black mb-2">تاريخ الرحلة</label>
          <div className="border p-3 rounded-lg flex items-center justify-between gap-2">
            <span>الأحد, <span className='font-bold text-orange-500'>26</span> مارس</span>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Passenger Selection */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-1/3">
          <label className="text-black mb-2">المسافرين</label>
          <div className="border p-3 rounded-lg flex items-center gap-2 justify-between">
            <span>2 مسافر, سياحة</span>
            <Users className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <button className="bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 h-[52px]">
          <Search className="h-5 w-5" />
          إضافة رحلة
        </button>
      </div>
    </div>
  );
}
