'use client';
import { ICategory } from '@/interfaces/ICategory';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillCaretRight } from 'react-icons/ai';

interface BreadcrumbsProps {
  categories: ICategory[];
}

const BreadcrumbsArticle: React.FC<BreadcrumbsProps> = ({ categories }) => {
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const categorySlug = pathParts[1];
  const articleSlug = pathParts[2];

  const activeCategory = categories?.find((category) => category.attributes.slug === categorySlug);
  const activeCategoryName = activeCategory?.attributes.name || '';

  let foundArticleTitle = '';
  if (categories) {
    categories.forEach((category) => {
      const foundArticle = category.attributes.articles.data.find((item) => item.attributes.slug === articleSlug);
      if (foundArticle) {
        foundArticleTitle = foundArticle.attributes.title;
      }
    });
  }

  return (
    <div className="flex justify-center bg-white h-10 border">
      <div className="flex items-center justify-start w-11/12 h-full font-montserrat text-sm font-semibold">
        <div>
          <Link href="/">
            <div className="hover:text-emerald-700 mr-4">Главная</div>
          </Link>
        </div>
        <AiFillCaretRight className="mr-4" />
        <div className="flex items-center hover:text-emerald-700">
          <Link href={`/${categorySlug}`}>
            <div className="mr-4">{activeCategoryName}</div>
          </Link>
        </div>
        <AiFillCaretRight className="mr-4" />
        <div className="text-emerald-700 truncate max-w-xs">{foundArticleTitle}</div>
      </div>
    </div>
  );
};

export default BreadcrumbsArticle;
