'use client'
import { usePathname } from "next/navigation"
import BreadcrumbsCategory from "./BreadcrumbsCategory";
import BreadcrumbsArticle from "./BreadcrumbsArticle";
import { ICategory } from "@/interfaces/ICategory";

interface HeaderProps {
    categories: ICategory[];
  }
  
  const Breadcrumbs: React.FC<HeaderProps> = ({ categories }) => {
    const pathname = usePathname();
    const pathParts = pathname.split('/');

    if (pathParts.length === 2) {
      return <BreadcrumbsCategory pathname={pathname} categories={categories} />;

    } else if (pathParts.length === 3) {
      return (<BreadcrumbsArticle categories={categories} />);

    } else {
      return null;
    }
  };

export default Breadcrumbs