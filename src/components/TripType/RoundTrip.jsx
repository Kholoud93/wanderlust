import React from 'react';
import { Calendar, Search, Users, PlaneTakeoff, PlaneLanding } from 'lucide-react';

export default function RoundTrip() {
  return (
    <>
    <div className="flex gap-4 items-end">
      <div className="grid grid-cols-5 gap-4 flex-1">
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
          <label className="text-black mb-2">تاريخ المغادرة</label>
          <div className="border p-3 rounded-lg flex items-center justify-between gap-2">
            <span>السبت, <span className='font-bold text-orange-500'>25</span> مارس</span>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-black mb-2">تاريخ العودة</label>
          <div className="border p-3 rounded-lg flex items-center justify-between gap-2">
            <span>الأحد, <span className='font-bold text-orange-500'>26</span> مارس</span>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="text-black mb-2">المسافرين</label>
          <div className="border p-3 rounded-lg flex items-center gap-2 justify-between">
            <span>2 مسافر, سياحة</span>
            <Users className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
      <div>

<button className="text-purple-700 mt-4 border rounded-md py-2 px-4 border-purple-700">
تحقق من الحجز ← 
</button>
</div>
</>
  );
}