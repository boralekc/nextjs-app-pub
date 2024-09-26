import { IOneArticle } from "@/interfaces/IArticle";
import { ICategory } from "@/interfaces/ICategory";
import { categoryAPI } from "@/shared/api/CategoryService";
import Link from "next/link";

interface ArticlePanelProps {
  article: IOneArticle[];
}

const ArticlePanel: React.FC<ArticlePanelProps> = async ({ article }) => {
  const categorySlug = article && article
    .map((item) => item.attributes.categories.data)[0]
    ?.map((item) => item.attributes.slug)[0];
  const categories = await categoryAPI.getOneCategory(categorySlug);
  const articleData = categories?.map(
    (item: ICategory) => item.attributes.articles.data
  )[0];

  return (
    <>
      <div className="grid bg-stone-100 px-4 py-4 mr-12 font-montserrat rounded-xl">
        <div className="pb-2 font-bold">Читайте также</div>
        <ul className="border-t-2 border-gray-800">
          {articleData &&
            articleData.map(
              (
                {
                  attributes: { title, slug },
                }: { attributes: { title: string; slug: string } },
                index: number
              ) => (
                <li
                  key={index}
                  className="flex items-center py-2 text-base border-b"
                >
                  <Link
                    href={`/${categorySlug}/${slug}`}
                    className="hover:text-emerald-700"
                  >
                    {title}
                  </Link>
                </li>
              )
            )}
        </ul>
      </div>
    </>
  );
};

export default ArticlePanel;
