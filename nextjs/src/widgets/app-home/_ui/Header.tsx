import React from "react";
import { categoryAPI } from "@/shared/api/CategoryService";
import Link from "next/link";
import Breadcrumbs from "@/widgets/breadcrumbs/Breadcrumbs";
import SmartphoneSection from "@/widgets/SmartphoneSection";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { Poiret_One } from "next/font/google";

const poetsenOne = Poiret_One({ subsets: ["latin"], weight: ["400"] });

export default async function Header() {
  const categories = await categoryAPI.getCategories();

  return (
    <>
      <header className="flex justify-center bg-amber-400 text-stone-800 h-36">
        <div className="flex w-11/12">
          <div className="grid lg:h-1/2">
            <Link
              href="/"
              className="flex justify-start items-center text-gray-700"
            >
              <div className={(poetsenOne.className = "text-3xl")}>
                Deutschhub
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex justify-end items-start w-full">
            <div className="grid h-1/2 w-full"></div>
            <div className="grid h-1/2">
              <div className="flex items-center text-gray-800">
                <Link
                  href="/about-us"
                  className="text-xl w-14 mr-4 hover:text-emerald-600"
                >
                  О нас
                </Link>
                <div className="flex text-3xl">
                  <FaWhatsapp className="mr-2" />
                  <PiTelegramLogoLight />
                </div>
              </div>
            </div>
          </div>
          <SmartphoneSection categories={categories} />
        </div>
      </header>
      <Breadcrumbs categories={categories} />
    </>
  );
}
