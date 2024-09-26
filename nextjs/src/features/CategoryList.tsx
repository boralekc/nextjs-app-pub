import React from "react";
import Link from "next/link";
import { ICategory } from "@/interfaces/ICategory";
import HomeCategoryOne from "@/entities/homePage/HomeCategoryOne";
import HomeCategoryTwo from "@/entities/homePage/HomeCategoryTwo";
import Image from "next/image";
import { IArticles } from "@/interfaces/IArticle";
import HeaderPlate from "@/widgets/HeaderPlate";

interface CategoryProps {
  categories: ICategory[];
  articles: IArticles[];
}

const CategoryList: React.FC<CategoryProps> = ({ articles, categories }) => {
  const sortedArticles = [...articles].sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
    );
  });

  const evenCategories = categories.filter(
    (category: ICategory) => category.id % 2 === 0
  );
  const unevenCategories = categories.filter(
    (category: ICategory) => category.id % 2 !== 0
  );

  const combinedCategories = [];

  const maxLength = Math.max(evenCategories.length, unevenCategories.length);

  for (let i = 0; i < maxLength; i++) {
    if (
      i < evenCategories.length &&
      evenCategories[i].attributes.articles.data.length > 0
    ) {
      combinedCategories.push({
        component: HomeCategoryOne,
        category: evenCategories[i],
        bgColor: "bg-gray-200",
      });
    }

    if (
      i < unevenCategories.length &&
      unevenCategories[i].attributes.articles.data.length > 0
    ) {
      combinedCategories.push({
        component: HomeCategoryTwo,
        category: unevenCategories[i],
        bgColor: "bg-white",
      });
    }
  }

  return (
    <>
      <div className="bg-amber-400 font-montserrat">
        <div className="flex justify-center bg-white lg:rounded-t-3xl w-full">
          <HeaderPlate categories={categories} />
          <div className="grid font-montserrat text-md lg:mt-28 mt-10 w-11/12 h-full">
            <div className="lg:flex justify-center h-full lg:space-x-4">
              {sortedArticles.slice(0, 3).map((article) => (
                <Link
                  key={article.id}
                  href={`/${article.attributes.categories.data[0].attributes.slug}/${article.attributes.slug}`}
                  className="flex flex-col bg-white rounded-lg shadow-md lg:w-1/3 mb-4"
                >
                  <div className="w-full lg:h-48 overflow-hidden">
                    {article.attributes.img.data && (
                      <Image
                        className="w-full h-full object-cover rounded-t-lg"
                        src={
                          article.attributes.img.data.attributes.formats.large
                            .url
                        }
                        alt={article.attributes.title}
                        width={
                          article.attributes.img.data.attributes.formats.large
                            .width
                        }
                        height={
                          article.attributes.img.data.attributes.formats.large
                            .height
                        }
                      />
                    )}
                  </div>
                  <div className="flex flex-col p-5">
                    <div className="font-montserrat font-semibold text-sm text-emerald-700 mb-2">
                      {article.attributes.categories.data[0].attributes.name}
                    </div>
                    <div className="font-montserrat font-semibold text-xl">
                      {article.attributes.title}
                    </div>
                    <div className="font-montserrat line-clamp-3 mt-2 text-md">
                      {article.attributes.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex mt-6">
              <div className="grid justify-center w-full">
                {sortedArticles.slice(4, 9).map((article) => (
                  <Link
                    key={article.id}
                    href={`/${article.attributes.categories.data[0].attributes.slug}/${article.attributes.slug}`}
                    className="flex flex-col flex-grow-0 justify-start bg-white rounded-lg my-6"
                  >
                    <div className="flex justify-center items-center bg-white">
                      <div className="hidden sm:block rounded-lg lg:mr-4 lg:w-56 h-full">
                        {article.attributes.img.data && (
                          <div className="w-full h-full">
                            <Image
                              className="w-full h-full object-cover rounded-lg"
                              src={
                                article.attributes.img.data.attributes.formats
                                  .large.url
                              }
                              alt={article.attributes.title}
                              width={
                                article.attributes.img.data.attributes.formats
                                  .large.width
                              }
                              height={
                                article.attributes.img.data.attributes.formats
                                  .large.height
                              }
                            />
                          </div>
                        )}
                      </div>
                      <div className="grid h-full lg:mr-4 w-full">
                        <div className="font-montserrat font-semibold text-sm text-emerald-700">
                          {
                            article.attributes.categories.data[0].attributes
                              .name
                          }
                        </div>
                        <div className="font-montserrat font-semibold text-xl">
                          {article.attributes.title}
                        </div>
                        <div className="font-montserrat line-clamp-3 mt-2 text-md">
                          {article.attributes.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="hidden lg:block lg:w-4/12 border rounded-lg mt-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="articles" className="flex justify-center bg-white py-20">
        <div className="grid w-full">
          {combinedCategories.map((item, index) => (
            <div key={index} className={`flex justify-center ${item.bgColor}`}>
              <div className="w-11/12 items-center py-20">
                <item.component
                  articles={item.category.attributes.articles}
                  categorySlug={item.category.attributes.slug}
                  categoryName={item.category.attributes.name}
                />
                <div className="hover:text-emerald-700 font-montserrat font-semibold lg:mt-4">
                  <Link href={`/${item.category.attributes.slug}`}>
                    Читать ещё... 
                    {/* в категории {item.category.attributes.name} */}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
