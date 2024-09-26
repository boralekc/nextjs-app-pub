import { ICategory } from "@/interfaces/ICategory";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

interface BreadcrumbsProps {
  categories: ICategory[];
  pathname: string;
}

const BreadcrumbsCategory: React.FC<BreadcrumbsProps> = ({
  pathname,
  categories,
}) => {
  const activeCategory = categories?.find(
    (category) => `/${category.attributes.slug}` === pathname
  );

  if (!activeCategory) {
    return null; // If no active category matches, return null
  }

  return (
    <div className="flex items-center justify-center bg-white h-10 border font-semibold">
      <div className="flex items-center justify-start w-11/12 h-full font-montserrat text-sm">
        <div>
          <Link href="/">
            <div className="hover:text-emerald-700 mr-4">Главная</div>
          </Link>
        </div>
        <AiFillCaretRight className="mr-4" />
        <div
          className={`flex justify-center items-center text-center h-full text-emerald-700`}
        >
          {activeCategory.attributes.name}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbsCategory;
