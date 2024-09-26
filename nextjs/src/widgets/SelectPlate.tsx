"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiAngleUp } from "react-icons/tfi";
import { ICategory, ICategoryData } from "@/interfaces/ICategory";

interface HeaderProps {
  sectionName: string;
  categories: ICategoryData;
}

const SelectPlate: React.FC<HeaderProps> = ({ sectionName, categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const name = categories.data.map((item) => item.attributes.name);
  const categorySlug = categories.data.map((item) => item.attributes.slug);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-end h-full w-full font-montserrat">
      <div
        className="flex relative items-center hover:border py-2 px-2 rounded-t-xl h-full font-montserrat hover:bg-violet-500"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        {sectionName}
        {isOpen && (
          <div className="absolute top-full right-0">
            <div
              className="absolute top-full  bg-transparent transform -translate-x-1/3 shadow-md p-10 rounded-xl bg-violet-500"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <div className="">
                <Link
                  href={`/${categorySlug}`}
                  className="block px-4 py-2 text-base border w-auto whitespace-nowrap"
                >
                  {name}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectPlate;
