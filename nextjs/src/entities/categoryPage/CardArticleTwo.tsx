import Link from "next/link";
import Image from "next/image"; // Импортируем компонент Image
import { FC } from "react";
import { IArticle } from "@/interfaces/IArticle";

interface ArticleListProps {
  categorySlug: string;
  articles: IArticle;
}

const CardArticleTwo: FC<ArticleListProps> = ({ articles, categorySlug }) => {
  const sortedArticles = [...articles.data].sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
    );
  });

  return (
    <div className="lg:flex justify-center lg:space-x-4 w-full">
      {sortedArticles.slice(2, 6).map((article) => (
        <Link
          key={article.id}
          href={`/${categorySlug}/${article.attributes.slug}`}
          className="flex flex-col bg-white rounded-lg shadow-md lg:w-1/4 mb-4"
        >
          {article.attributes.content.map((item, index) => (
            <div key={index}>
              {item.image && (
                <div className="w-full h-48 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover rounded-t-lg"
                    src={item.image.formats.large.url}
                    alt={article.attributes.title}
                    width={item.image.formats.large.width}
                    height={item.image.formats.large.height}
                  />
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col w-full p-5 justify-end">
            <h2 className="font-montserrat font-semibold text-xl">
              {article.attributes.title}
            </h2>
            <p className="font-montserrat line-clamp-3 mt-2 text-md">
              {article.attributes.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardArticleTwo;
