import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="font-bold ">Developed by  Mohammad Mustafa</h2>
            <h2 className="text-sm mt-2 ">mohammad.mustafa@bahcesehir.edu.tr</h2>
            <h2 className="text-sm mt-2 ">+90 (531) 4686196</h2>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;