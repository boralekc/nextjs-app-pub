import { categoryAPI } from "@/shared/api/CategoryService";
import { cookieAPI } from "@/shared/api/CookieService";
import HeaderPlate from "@/widgets/HeaderPlate";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";

export default async function Cookie() {
  const categories = await categoryAPI.getCategories();
  const cookie = await cookieAPI.getCookie();

  return (
    <>
      <div className="bg-amber-400 font-montserrat">
        <div className="flex justify-center items-start bg-white rounded-t-3xl w-full">
          <HeaderPlate categories={categories} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="font-montserrat items-center w-11/12">
          <BlocksRenderer content={cookie.attributes.content} />
        </div>
      </div>
    </>
  );
}
