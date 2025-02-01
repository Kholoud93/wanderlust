import React from 'react';
import { Calendar, Search, Users , PlaneTakeoff , PlaneLanding } from 'lucide-react';

const SearchForm = ({

  
  // Label props
  departureLabel = "محطة المغادرة",
  arrivalLabel = "محطة الوصول",
  dateLabel = "تاريخ الرحلة",
  passengersLabel = "المسافرين",
  
  // Placeholder props
  departurePlaceholder = "اسطنبول (تركيا)",
  arrivalPlaceholder = "الرياض (المملكة السعودية)",
  
  // Button text props
  searchButtonText = "إقتنص أرخص التذاكر",
  checkBookingText = "تحقق من الحجز"
}) => {
  return (

    <>
      <div className="flex gap-4 items-end">
  <div className="grid grid-cols-4 gap-4 flex-1">
    <div className="flex flex-col">
      <label className="text-black mb-2">{departureLabel}</label>
      <div className="relative">
        <input 
          type="text" 
          placeholder={departurePlaceholder}
          className="border p-3 pl-10 rounded-lg text-right bg-white w-full"
        />
        <PlaneTakeoff className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
    
    <div className="flex flex-col">
      <label className="text-black mb-2">{arrivalLabel}</label>
      <div className="relative">
        <input 
          type="text" 
          placeholder={arrivalPlaceholder}
          className="border p-3 pl-10 rounded-lg text-right bg-white w-full"
        />
        <PlaneLanding className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
    
    <div className="flex flex-col">
      <label className="text-black mb-2">{dateLabel}</label>
      <div className="border p-3 rounded-lg flex items-center justify-between gap-2">
        <span>السبت, <span className='font-bold text-orange-500'>25</span> مارس</span>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>
    </div>
    
    <div className="flex flex-col">
      <label className="text-black mb-2">{passengersLabel}</label>
      <div className="border p-3 rounded-lg flex items-center gap-2 justify-between">
        <span>2 مسافر, سياحة</span>
        <Users className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  </div>

  <button className="bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 h-[52px]">
    <Search className="h-5 w-5" />
    {searchButtonText}
  </button>


     </div>
    
     <div>

<button className="text-purple-700 mt-4 border rounded-md py-2 px-4 border-purple-700">
{checkBookingText} ← 
</button>
</div>
    </>
 
  );
};

export default SearchForm;