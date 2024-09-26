import Link from "next/link";
import Image from "next/image"; // Импортируем компонент Image
import { FC } from "react";
import { IArticle } from "@/interfaces/IArticle";

interface ArticleListProps {
  categorySlug: string;
  articles: IArticle;
}

const CardArticleFour: FC<ArticleListProps> = ({ articles, categorySlug }) => {
  const sortedArticles = [...articles.data].sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
    );
  });

  return (
    <div className="lg:flex justify-center flex-wrap w-full">
      {sortedArticles.slice(9).map((article) => (
        <Link
          key={article.id}
          href={`/${categorySlug}/${article.attributes.slug}`}
          className="flex lg:w-1/2 p-2 rounded-lg overflow-hidden"
          style={{ position: "relative" }}
        >
          <div className="flex flex-col h-72 relative w-full rounded-lg overflow-hidden">
            {article.attributes.content.map((item, index) => (
              <div key={index}>
                {item.image && (
                  <Image
                    src={item.image.url}
                    alt={article.attributes.title}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
            ))}
            <div className="absolute inset-0 border bg-black bg-opacity-50 flex flex-col justify-end px-5 py-5 text-white rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">
                {article.attributes.title}
              </h2>
              <p className="text-xl text-gray-100 line-clamp-3">
                {article.attributes.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardArticleFour;
