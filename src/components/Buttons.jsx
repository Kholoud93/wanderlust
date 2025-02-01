import React from 'react';

const Buttons = ({ buttonOptions, activeButton, setActiveButton }) => {
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
