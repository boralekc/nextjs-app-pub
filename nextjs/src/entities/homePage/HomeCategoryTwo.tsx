import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { IArticle, IArticles } from "@/interfaces/IArticle";

interface ArticleListProps {
    categoryName: string;
    categorySlug: string;
    articles: IArticle;
}

const HomeCategoryTwo: FC<ArticleListProps> = ({ categorySlug, articles, categoryName }) => {

    const sortedArticles = [...articles.data].sort((a, b) => {
        return (
          new Date(b.attributes.publishedAt).getTime() -
          new Date(a.attributes.publishedAt).getTime()
        );
      });

    const attributes = sortedArticles && sortedArticles.slice(0, 3).map((article) => article.attributes);

    return (
        <div className="lg:flex justify-center h-full lg:space-x-4 font-montserrat">
            {attributes.map((article) => (
                <Link key={article.slug} href={`/${categorySlug}/${article.slug}`} className="flex flex-col justify-start border bg-white rounded-lg lg:w-1/3 mb-4" style={{ position: "relative", overflow: "hidden" }}>
                    <div className="grid justify-center shadow-md bg-white rounded-lg h-96">
                        {article.content.map((item, index) => (
                            <div key={index}>
                                {item.image && (
                                    <Image src={item.image.url} alt={article.title} layout="fill" objectFit="cover"/>
                                )}
                            </div>
                        ))}
                        <div className="absolute items-start bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-50 h-full top-0 left-0 flex flex-col justify-end px-5 py-5 text-white"> 
                            <div className="font-montserrat font-semibold text-sm text-emerald-300">{categoryName}</div>
                            <div className="items-end font-montserrat font-semibold text-xl">{article.title}</div>
                            <div className="items-end font-montserrat line-clamp-3 mt-2 text-md">{article.description}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default HomeCategoryTwo;
