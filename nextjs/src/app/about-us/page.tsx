import { aboutusAPI } from "@/shared/api/AboutusService";
import { categoryAPI } from "@/shared/api/CategoryService";
import HeaderPlate from "@/widgets/HeaderPlate";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";

export default async function AboutUs() {
  const categories = await categoryAPI.getCategories();
  const aboutus = await aboutusAPI.getAboutus();

  return (
    <>
      <div className="bg-amber-400 font-montserrat">
        <div className="flex justify-center items-start bg-white rounded-t-3xl w-full">
          <HeaderPlate categories={categories} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="font-montserrat items-center w-11/12">
          <BlocksRenderer content={aboutus.attributes.content} />
        </div>
      </div>
    </>
  );
}
