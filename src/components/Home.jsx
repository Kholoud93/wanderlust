import React, { useState } from 'react';
import OneWay from './TripType/OneWay';
import RoundTrip from './TripType/RoundTrip';
import MultiDest from './TripType/MultiDest';
import Buttons from './Buttons';

export default function Home() {
  const [activeButton, setActiveButton] = useState('ذهاب فقط');
  
  const buttons = [
    { text: 'ذهاب فقط', component: <OneWay /> },
    { text: 'رحلة ذهاب و عودة', component: <RoundTrip /> },
    { text: 'وجهات متعددة', component: <MultiDest /> }
  ];

  const renderActiveComponent = () => {
    const active = buttons.find(btn => btn.text === activeButton);
    return active ? active.component : <OneWay />;
  };

  return (
    <div dir="rtl" className="min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-white mb-8">
          <h1 className="text-4xl font-bold mb-4">إقتنص أرخص التذاكر قبل نفاذها!!</h1>
          <p className="text-xl">اختر من بين أكثر من 2.6 مليون فندق حول العالم و 450 شركة طيران</p>
        </div>

    <div className="bg-white rounded-lg p-8 mt-32">
        
          <Buttons 
            buttonOptions={buttons.map(btn => btn.text)}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
}
