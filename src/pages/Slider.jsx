import { useState } from 'react';

const sections = ['Start', '1', '2', '3'];

function Slider ({ scrollToSection }) {
  const [activeSection, setActiveSection] = useState('Start');

  const handleClick = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  return (
    <div className="fixed right-[3%] top-1/2 transform -translate-y-1/2 flex ">
      <div className="relative flex flex-col items-center">
        {sections.map((section) => (
          <button
            key={section}
            className={`relative w-8 h-8 flex items-center justify-center text-white mb-4 bg-transparent border-none cursor-pointer`}
            onClick={() => handleClick(section)}
          >
            <span
              className={`absolute w-[3px] bg-white ${
                activeSection === section ? 'w-[3px]' : 'w-[3px]'
              } transition-all`}
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            />
            {section}
          </button>
        ))}
      </div>
       {/* vertical line */}
       <div className="relative w-[3px] bg-[#A9A9A9]  h-[240px] left-1/2 transform -translate-x-1/2">
          {/* active indicator*/}
          <div
            className={`absolute transition-all duration-300 ${
              activeSection ? 'bg-white' : 'bg-transparent'
            }`}
            style={{
              height: '60px',
              top: sections.indexOf(activeSection) * 60 + 'px',
              width: '3px',
              borderRadius: '5px'
            }}/>
        </div>
    </div>
  );
};

export default Slider;
