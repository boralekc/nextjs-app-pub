import ArticleList from "@/features/ArticleList";
import { ICategory } from "@/interfaces/ICategory";
import { categoryAPI } from "@/shared/api/CategoryService";
import { notFound } from 'next/navigation';

interface ItemCategoryProps {
  params: {
    categorySlug: string;
  };
}

export default async function CategoryPage({
  params: { categorySlug },
}: ItemCategoryProps) {
  const category = await categoryAPI.getOneCategory(categorySlug);

  if (!category) {
    notFound()
  }

  return (
    <>
      <div>
        {category &&
          category.map((oneCategory: ICategory) => (
            <ArticleList
              key={oneCategory.id}
              articles={oneCategory.attributes.articles}
              categorySlug={oneCategory.attributes.slug}
              categoryName={oneCategory.attributes.name}
            />
          ))}
      </div>
    </>
  );
}
