import React from "react";
import { categoryAPI } from "@/shared/api/CategoryService";
import CategoryList from "@/features/CategoryList";
import { articleAPI } from "@/shared/api/ArticleService";

export default async function HomePage() {
  const categories = await categoryAPI.getCategories();
  const articles = await articleAPI.getArticles();

  return (
    <>
      <div>
        <CategoryList categories={categories} articles={articles} />
      </div>
    </>
  );
}
