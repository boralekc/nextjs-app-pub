"use client";
import React, { useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import { ICategory } from "@/interfaces/ICategory";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { Poiret_One } from "next/font/google";

const poetsenOne = Poiret_One({ subsets: ["latin"], weight: ["400"] });

interface HeaderProps {
  categories: ICategory[];
}

const SmartphoneSection: React.FC<HeaderProps> = ({ categories }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <button
        className="lg:hidden flex justify-end items-center h-full w-screen text-3xl"
        onClick={handleMenuToggle}
      >
        <TfiAlignJustify />
      </button>

      {isFormVisible && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-full h-screen flex justify-center items-start bg-gray-800 z-50"
        >
          <div className="p-8 mt-6 w-full max-w-lg font-montserrat text-gray-300">
            <div className="flex justify-between items-center mb-4">
              <Link href='/' onClick={handleFormClose} className={(poetsenOne.className="text-3xl")}>Deutschhub</Link>
              <button
                onClick={handleFormClose}
                className="text-gray-300 px-2 py-2 rounded-full text-2xl"
              >
                <TfiClose />
              </button>
            </div>
            <div className="grid justify-start items-center h-full mt-14">
              {categories &&
                categories.map((category) => (
                  <Link href={`/${category.attributes.slug}`}>
                    <div
                      onClick={handleFormClose}
                      className="text-2xl my-4 font-semibold"
                    >
                      {category.attributes.name}
                    </div>
                  </Link>
                ))}
            </div>
            <div className="border mt-14"></div>
            <div className="grid justfy-end h-1/2 mt-4">
              <div className="flex items-center justify-end text-gray-300">
                <Link href="/about-us" className="text-xl mr-6">
                  <div onClick={handleFormClose}>О нас</div>
                </Link>
                <div className="flex text-3xl">
                  <FaWhatsapp className="mr-4" />
                  <PiTelegramLogoLight />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SmartphoneSection;
