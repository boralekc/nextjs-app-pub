import Link from "next/link";

interface ArticleContent {
    type: string;
    children?: { text: string; type: string }[]; // Добавляем опциональное свойство для параграфов
    image?: { url: string; ext: string; mime: string; name: string; size: number; width: number; height: number; caption: string | null; formats: { large: { url: string } } }; // Добавляем опциональное свойство для изображений
}

interface ArticleListProps {
    title: string;
    // content: ArticleContent[];
    categorySlug: string;
    articleSlug: string;
    description: string;
}


const HomeBigCard: React.FC<ArticleListProps> = ({ title, description, categorySlug, articleSlug }) => {
    return (
        <Link href={`/${categorySlug}/${articleSlug}`} className="my-4 mx-4">
            <div className="line-clamp-6 font-bold mb-2">{title}</div>
            <div className="line-clamp-6">{description}</div>
        </Link>
    )
}

export default HomeBigCard