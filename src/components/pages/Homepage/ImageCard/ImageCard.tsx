import { useDrag, useDrop } from "react-dnd";

interface ImageCardProps {
  id: string;
  index: number;
  src: string;
  moveImage: (dragIndex: number, hoverIndex: number) => void;
  className?: string;
}

type DraggedItem = {
  id: number;
  index: number;
};

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  index,
  src,
  moveImage,
  className,
}) => {
  const [, ref] = useDrag({
    type: "IMAGE",
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: (draggedItem: DraggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drop(ref(node))}
      className={`flex justify-center border ${className}`}
    >
      <div
        ref={(node) => ref(node)}
        className={`relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl`}
      >
        <div>
          <img src={src} alt={`Image ${id}`} />
        </div>
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black overly-bg bg-opacity-50 opacity-0 hover:opacity-100 font-black">
          <input
            type="checkbox"
            id={id}
            name={`Image ${id}`}
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
