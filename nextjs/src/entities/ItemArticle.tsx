import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface ItemArticleProps {
  content: BlocksContent;
}

const ItemArticle: React.FC<ItemArticleProps> = ({ content }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-11/12 lg:ml-7">
        <main className="font-montserrat max-w-6xl prose lg:prose-lg text-neutral-900 py-10">
          <BlocksRenderer content={content} />
        </main>
      </div>
    </div>
  );
};

export default ItemArticle;
