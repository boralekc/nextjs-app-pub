import ItemArticle from "@/entities/ItemArticle";
import { articleAPI } from "@/shared/api/ArticleService";
import { tagAPI } from "@/shared/api/TagService";
import { IOneArticle } from "@/interfaces/IArticle";
import ArticlePanel from "@/widgets/ArticlePanel";
import TagsList from "@/features/TagsList";
import { notFound } from 'next/navigation';

interface ItemArticleProps {
  params: {
    articleSlug: string;
  };
}

export default async function ArticlePage({
  params: { articleSlug },
}: ItemArticleProps) {
  const article = await articleAPI.getOneArticle(articleSlug);
  const tags = await tagAPI.getTags();

  if (!article) {
    notFound()
  }

  return (
    <>
      <div className="flex items-start bg-white pb-10">
        {article &&
          article.map((oneArticle: IOneArticle) => (
            <ItemArticle
              key={oneArticle.id}
              content={oneArticle.attributes.content}
            />
          ))}
        <div className="hidden lg:block py-10 bg-white w-1/3">
          {article && <ArticlePanel article={article} />}
        </div>
      </div>
      <TagsList tags={tags} article={article} articleSlug={articleSlug} />
    </>
  );
}
