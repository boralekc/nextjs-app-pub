'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  sectionName: string;
  categories: {
    data: {
      attributes: {
        name: string;
        slug: string;
      }
    }[]
  };
}

const SmartphoneSectionItem: React.FC<HeaderProps> = ({ sectionName, categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const name = categories?.data?.map(item => item.attributes.name) || [];
  const categorySlug = categories?.data?.map(item => item.attributes.slug) || [];

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center h-full font-bold px-8 hover:bg-gray-100"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        {sectionName}
      </div>
      {isOpen && categories?.data && ( // Проверяем наличие данных categories.data перед отображением выпадающего списка
        <div className="absolute top-full left-0 bg-white border-gray-200 shadow-lg rounded-b-md w-48 border-t z-10">
          {categories.data.map((category, index) => (
            <Link key={category.attributes.slug} href={`/${category.attributes.slug}`}>
              <div className={`block px-4 py-2 ${index > 0 ? 'mt-1' : ''} bg-gray-100`} onClick={closeDropdown}>
                {category.attributes.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmartphoneSectionItem;



