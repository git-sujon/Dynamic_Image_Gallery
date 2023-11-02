import { useDrag, useDrop } from "react-dnd";

// Define the props that this ImageCard component expects
interface ImageCardProps {
  id: string;
  index: number; // Index of the image in the gallery
  src: string;
  moveImage: (dragIndex: number, hoverIndex: number) => void; // Function to move images
  className?: string;
}

// Define the type for the dragged item
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
  // Use the useDrag hook to enable dragging for this component
  const [, ref] = useDrag({
    type: "IMAGE", // Set the type of the item being dragged
    item: { id, index }, // Provide the ID and index of the image
  });

  // Use the useDrop hook to enable dropping images and rearranging them
  const [, drop] = useDrop({
    accept: "IMAGE", // accepted drop type
    hover: (draggedItem: DraggedItem) => {
      // When a dragged item hovers over this component
      if (draggedItem.index !== index) {
        // If it's not hovering over itself
        moveImage(draggedItem.index, index); // Move the image to the new position
        draggedItem.index = index; // Update the index of the dragged item
      }
    },
  });

  // Render the ImageCard component with drag and drop functionality
  return (
    <div
      ref={(node) => drop(ref(node))} // Apply drop behavior to this component
      className={`flex justify-center border ${className}`}
    >
      <div
        ref={(node) => ref(node)} // Apply drag behavior to this component
        className={`relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl`}
      >
        <div>
          <img src={src} alt={`Image ${id}`} /> {/* Display the image */}
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
