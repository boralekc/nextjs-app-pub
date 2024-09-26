import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { IArticle, IArticles } from "@/interfaces/IArticle";

interface ArticleListProps {
  categoryName: string;
  categorySlug: string;
  articles: IArticle;
}

const HomeCategoryOne: FC<ArticleListProps> = ({
  categorySlug,
  articles,
  categoryName,
}) => {
  const sortedArticles = [...articles.data].sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
    );
  });

  const attributes =
    sortedArticles &&
    sortedArticles.slice(0, 4).map((article) => article.attributes);

  return (
    <div className="lg:flex justify-center h-full lg:space-x-4">
      {attributes.map((article) => (
        <Link
          key={article.slug}
          href={`/${categorySlug}/${article.slug}`}
          className="flex flex-col bg-white rounded-lg lg:w-1/3 mb-4"
        >
          {article.content.map((item, index) => (
            <div key={index}>
              {item.image && (
                <div className="w-full h-60 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover rounded-t-lg"
                    src={item.image.formats.large.url}
                    alt={article.title}
                    width={item.image.formats.large.width}
                    height={item.image.formats.large.height}
                  />
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col w-full p-5">
            <div className="font-montserrat font-semibold text-sm text-emerald-700 mb-2">
              {categoryName}
            </div>
            <div className="font-montserrat font-semibold text-xl">
              {article.title}
            </div>
            <div className="font-montserrat line-clamp-3 mt-2 text-md">
              {article.description}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeCategoryOne;
