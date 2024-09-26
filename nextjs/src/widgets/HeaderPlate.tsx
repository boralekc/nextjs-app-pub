import { ICategory } from "@/interfaces/ICategory";
import Link from "next/link";

interface HeaderProps {
  categories: ICategory[];
}

const HeaderPlate: React.FC<HeaderProps> = ({ categories }) => {
  return (
    <div className="hidden lg:block absolute top-28 h-16 bg-gray-800 w-11/12 rounded-2xl">
      <div className="flex justify-center items-center w-full h-full text-xl">
        {categories.map((category) => (
          <Link key={category.id} href={`/${category.attributes.slug}`}>
            <div className="flex justify-start w-full mx-8 font-montserrat text-gray-300 hover:text-emerald-600">
              {category.attributes.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderPlate;
