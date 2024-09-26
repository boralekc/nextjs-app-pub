import { ICategory } from "@/interfaces/ICategory";
import { categoryAPI } from "@/shared/api/CategoryService";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default async function Category() {
  const categories: ICategory[] = await categoryAPI.getCategories();
  
  return (
    <div className="flex justify-center py-14">
      <section className="flex items-start bg-gradient-to-b w-11/12">
        <div className="flex justify-start flex-wrap w-full">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/${category.attributes.slug}`}
              className="flex w-1/2 p-2 rounded-lg overflow-hidden"
              style={{ position: "relative" }}
            >
              <div className="flex flex-col h-72 relative w-full rounded-lg overflow-hidden">
                {category.attributes.image.data && category.attributes.image.data.map((item, index) => (
                  item && (
                    <Image
                      key={index}
                      className="w-full h-full object-cover rounded-t-lg"
                      src={item.attributes.formats.large.url}
                      alt={category.attributes.name}
                      width={item.attributes.formats.large.width}
                      height={item.attributes.formats.large.height}
                    />
                  )
                ))}
                <div className="absolute inset-0 border bg-black bg-opacity-50 flex flex-col justify-center items-center px-5 py-5 text-white rounded-lg">
                  <h2 className="text-3xl font-semibold mb-2 font-montserrat">
                    {category.attributes.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
