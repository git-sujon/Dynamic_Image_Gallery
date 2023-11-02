import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { imageData } from "./contents/imageData";
import ImageCard from "./components/pages/Homepage/ImageCard/ImageCard";
import { useState } from "react";


function App() {
  const [images, setImages] = useState(imageData);

  const moveImage = (dragIndex: number, hoverIndex: number)  => {
    const draggedImage = images[dragIndex];
    const updatedImages = [...images];
    updatedImages.splice(dragIndex, 1);
    updatedImages.splice(hoverIndex, 0, draggedImage);
    setImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="max-w-4xl mx-auto rounded-lg shadow-md mt-10 bg-slate-50 border-slate-700">
        <div className="px-8">
          <div className="flex items-center justify-between border-b py-3">
            <p className="text-xl font-bold mb-0">Image Gallery</p>
            <button className="text-red-600 text-lg font-bold hover:text-red-700">
              Delete files
            </button>
          </div>
          <div className="grid grid-cols-5 gap-5 p-8 border">
            {images.map((image, index) => (
              <ImageCard
                key={image.id}
                index={index}
                id={image.id}
                src={image.img}
                moveImage={moveImage}
                className={index === 0 ? "col-span-2 row-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
