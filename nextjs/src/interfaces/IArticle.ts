import { BlocksContent } from "@strapi/blocks-react-renderer";

interface ArticleContent {
  type: string;
  children?: { text: string; type: string }[];
  image?: {
    url: string;
    ext: string;
    mime: string;
    name: string;
    size: number;
    width: number;
    height: number;
    caption: string | null;
    formats: { large: { url: string; width: number; height: number } };
  };
}

export interface IArticle {
  data: {
    id: number;
    attributes: {
      title: string;
      content: ArticleContent[];
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      slug: string;
      description: string;
    };
  }[];
}

export interface IArticles {
    id: number;
    attributes: {
      categories: {
        data: {
          attributes: {
            slug: string;
            name: string;
          };
        }[];
      };
      img: {
        data: {
          attributes: {
            formats: { large: { url: string; width: number; height: number } };
          };
        };
      };
      title: string;
      content: ArticleContent[];
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      slug: string;
      description: string;
    };
}

export interface IOneArticle {
  id: number;
  attributes: {
    title: string;
    content: BlocksContent;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    description: string;
    tags: {
      data: [];
    };
    categories: {
      data: {
        attributes: {
          title: string;
          name: string;
          slug: string;
        };
      }[];
    };
  };
}
