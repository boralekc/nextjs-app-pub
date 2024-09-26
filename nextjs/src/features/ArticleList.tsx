import CardArticle from "@/entities/categoryPage/CardArticle";
import CardArticleFour from "@/entities/categoryPage/CardArticleFour";
import CardArticleThree from "@/entities/categoryPage/CardArticleThree";
import CardArticleTwo from "@/entities/categoryPage/CardArticleTwo";
import { IArticle, IArticles } from "@/interfaces/IArticle";
import React from "react";

interface ArticleListProps {
  categorySlug: string;
  categoryName: string;
  articles: IArticle;
}

const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  categorySlug,
  categoryName,
}) => {
  if (!articles || !articles.data || articles.data.length === 0) {
    return <div>No articles found</div>;
  }

  const sortedArticles = [...articles.data].sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
    );
  });

  return (
    <>
      <div className="flex justify-center lg:py-20 py-10 bg-white">
        <section className="flex justify-center items-center bg-gradient-to-b w-11/12">
          <CardArticle categorySlug={categorySlug} articles={articles} />
        </section>
      </div>
      <div className="flex justify-center py-20 bg-gray-200">
        <section className="flex justify-center items-center bg-gradient-to-b w-11/12">
          <CardArticleTwo categorySlug={categorySlug} articles={articles} />
        </section>
      </div>
      <div className="flex justify-center py-20 bg-white">
        <section className="flex justify-center items-center bg-gradient-to-b w-11/12">
          <CardArticleThree categorySlug={categorySlug} articles={articles} />
        </section>
      </div>
      <div className="flex justify-center py-20 bg-gray-200">
        <section className="flex justify-center items-center bg-gradient-to-b w-11/12">
          <CardArticleFour categorySlug={categorySlug} articles={articles} />
        </section>
      </div>
    </>
  );
};

export default ArticleList;
