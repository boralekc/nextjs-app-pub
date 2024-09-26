import Link from "next/link";
import Image from "next/image"; // Импортируем компонент Image
import { FC } from "react";
import { IArticle } from "@/interfaces/IArticle";

interface ArticleListProps {
  categorySlug: string;
  articles: IArticle;
}

const CardArticle: FC<ArticleListProps> = ({ articles, categorySlug }) => {

  const sortedArticlesOne = [...articles.data].sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
    );
  });

  return (
    <div className="lg:flex justify-center lg:space-x-4 w-full">
      {sortedArticlesOne.slice(0, 2).map((article) => (
        <Link
          key={article.id}
          href={`/${categorySlug}/${article.attributes.slug}`}
          className="flex lg:w-1/2 border p-5 shadow-lg rounded-lg mb-4"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="flex flex-col h-96 ">
            {article.attributes.content.map((item, index) => (
              <div key={index}>
                {item.image && (
                  <Image
                    src={item.image.url}
                    alt={article.attributes.title}
                    layout="fill" objectFit="cover"
                  />
                )}
              </div>
            ))}
            <div className="absolute items-start inset-0 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-50 h-full top-0 left-0 flex flex-col justify-end px-5 py-5 text-white">
              <h2 className="text-3xl font-semibold mb-2">{article.attributes.title}</h2>
              <p className="text-2xl text-gray-100 line-clamp-3">{article.attributes.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardArticle;
