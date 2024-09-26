import React from 'react';
import { TiChevronLeftOutline } from 'react-icons/ti';

const ChevronLeft = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 ml-3 bg-gray-300 bg-opacity-70 rounded-full hover:bg-green-400">
      <TiChevronLeftOutline className="text-3xl text-gray-600" />
    </div>
  );
};

export default ChevronLeft;
