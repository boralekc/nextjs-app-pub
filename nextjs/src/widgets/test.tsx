'use client'
import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";

const SmartphoneSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    setIsFormVisible(true); // Устанавливаем флаг видимости формы в true
    console.log('Кнопка была нажата!'); };

    return (
      <>
      <button className="sm:hidden flex justify-end items-center h-full w-full text-xl" onClick={handleClick}><TfiAlignJustify /></button>
    {isFormVisible && (
        <div className="fixed bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 shadow-md w-screen h-screen">
            Разделы
            <h2 className="text-xl font-bold mb-4">Smartphone Form</h2>
            <button onClick={() => setIsFormVisible(false)} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Close Form
            </button>
          </div>
        </div>
      )}
    </>
    )
}

export default SmartphoneSection