import { useState } from "react";
import { Building, Car, Bus, Plane } from 'lucide-react';
import { Link } from "react-router-dom";

export default function ServiceIcons() {
  const [activeButton, setActiveButton] = useState(5);

  const buttons = [
    { icon: Building, text: "يخوت", path: "/boats" },
    { icon: Car, text: "إيجار السيارات", path: "/cars-rent" },
    { icon: Bus, text: "رحلات سياحية", path: "/trips" },
    { icon: Plane, text: "توصيلات المطار", path: "/drives" },
    { icon: Building, text: "الإقامات", path: "/hotels" },
    { icon: Plane, text: "رحلات الطيران", path: "/flights" }
  ];

  return (
    <div className="flex justify-center items-center mb-8 px-6 rounded-lg">
      {buttons.map((button, index) => {
        const Icon = button.icon;
        return (
          <Link
            to={button.path}
            key={index}
            className={`
              ${activeButton === index ? 'bg-orange-500 rounded-lg' : 'bg-white/30'}
              ${index === 0 ? 'rounded-l-lg' : ''}
              ${index === buttons.length - 1 ? 'rounded-r-lg' : ''}
              text-white px-6 py-6 flex items-center gap-2 transition-colors duration-200
            `}
            onClick={() => setActiveButton(index)}
          >
            <Icon className="h-5 w-5" />
            <span>{button.text}</span>
          </Link>
        );
      })}
    </div>
  );
}

