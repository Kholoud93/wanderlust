import React from 'react';
import { useLocation } from 'react-router-dom';

const Buttons = ({ buttonOptions, activeButton, setActiveButton }) => {
  const location = useLocation();
  
  // Map routes to button texts
  const routeToButton = {
    '/boats': 'يخوت',
    '/cars-rent': 'إيجار السيارات',
    '/trips': 'رحلات سياحية',
    '/drives': 'توصيلات المطار',
    '/hotels': 'الإقامات',
    '/flights': 'رحلات الطيران'
  };

  // Set initial active button based on current route
  React.useEffect(() => {
    const currentButtonText = routeToButton[location.pathname];
    if (currentButtonText) {
      setActiveButton(currentButtonText);
    }
  }, [location.pathname]);

  return (
    <div className="flex gap-4 mb-6">
      {buttonOptions?.map((button) => (
        <button
          key={button}
          className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
            activeButton === button 
              ? 'bg-purple-700 text-white' 
              : 'bg-gray-100 text-black'
          }`}
          onClick={() => setActiveButton(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
