'use client'
import Link from 'next/link';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import ChevronLeft from '@/shared/chevron/ChevronLeft';
import ChevronRight from '@/shared/chevron/ChevronRight';

interface ItemArticleProps {
  tags: { 
    id: number; 
    attributes: { 
      description: string; 
      name: string; 
      createdAt: string; 
      updatedAt: string; 
      publishedAt: string; 
      articles: { 
        data: { 
          id: number; 
          attributes: { 
            title: string;
            description: string; 
            slug: string; 
          } 
        }[]; 
      }; 
    } 
  }[];
  articleSlug: string;
  article: {
    attributes: {
      content: {
        image: {
          url: string;
        }
      }
      tegs: {
        data: []
      };
      categories: {
        data: {
          attributes: {
            slug: string;
          }
        }[]
      }
    };
  }[];
}

interface Tag {
  id: number;
  attributes: {
    description: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    articles: {
      data: {
        id: number;
        attributes: {
          id: number; // Добавлено свойство id
          title: string;
          description: string;
          slug: string;
          attributes: string; // Может быть, вам нужно убрать это свойство, если оно не используется
        };
      }[];
    };
  };
}

interface Article {
  attributes: {
    title: string;
    description: string;
    slug: string;
    content?: {
      type: string;
      image?: {
        url: string;
      };
    }[];
  };
}

const TagsList: React.FC<ItemArticleProps> = ({ tags, articleSlug, article }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    
  if (!article || article.length === 0) {
    return <div>No article found</div>;
  }

  const categorySlug = article.map((item) => item.attributes.categories).map((category) => category.data)[0].map((item: { attributes: { slug: string } }) => item.attributes.slug);
  const articleTags = article[0].attributes.tegs;
  const articleTagNames = articleTags && articleTags.data.map((tag: Tag) => tag.attributes.name);

  // Фильтруем теги, чтобы оставить только соответствующие тегам статьи
  const matchingTags = tags && tags.filter(tag => articleTagNames && articleTagNames.includes(tag.attributes.name));

  // Создаем массив со всеми статьями для всех тегов
  let allArticles: Article['attributes'][] = [];
  matchingTags.forEach(tag => {
    tag.attributes.articles.data.forEach(article => {
      if (article.attributes.slug !== articleSlug) {
        allArticles.push(article.attributes);
      }
    });
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      {allArticles.length > 0 && (
        <>
          <div className='pt-6 pl-6 font-bold text-lg bg-gray-100'>Похожие статьи</div> 
          <div className="overflow-hidden relative bg-gray-100" ref={emblaRef}> 
            <div className="flex">
              {allArticles.map((article, index) => (
                <Link key={index} href={`/${categorySlug[0]}/${article.slug}`} className='flex flex-col rounded-md shadow-md hover:shadow-none border mx-2 my-4 h-72 bg-white'>
                  <div className="line-clamp-4 rounded-t-md">
                {article.content && article.content.map((contentItem, index) => {
                  if (contentItem.type === 'image' && contentItem.image) {
                    return (
                      <img
                        key={index}
                        src={contentItem.image.url}
                        alt={`Image ${index}`}
                        className="w-full h-auto"
                      />
                    );
                  }
                  return null;
                })}
              </div>
                  <div className="flex justify-center font-bold py-2 px-4 w-56">{article.title}</div>
                  <div className="py-2 px-4 line-clamp-4 w-56">{article.description}</div>
                </Link>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={scrollNext}>
              <ChevronRight />
            </button>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={scrollPrev}>
              <ChevronLeft />
            </button>
          </div>
        </>
      )}
    </>
  ); 
}

export default TagsList;
