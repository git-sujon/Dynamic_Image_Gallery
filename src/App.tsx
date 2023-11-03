import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { isMobile } from "react-device-detect";
import ImageCard from "./components/pages/Homepage/ImageCard/ImageCard";
import { useState } from "react";
import ImageFileUploader from "./components/ui/ImageFileUploader";
import { imageData } from "./contents/imageData";

interface ImageInfo {
  id: string;
  img: string;
  selected: boolean; // Added 'selected' property
}
console.log(isMobile)
const backend = isMobile ? TouchBackend : HTML5Backend;

function App() {
  const [images, setImages] = useState<ImageInfo[]>(imageData); // Specify the type for 'images'

  const moveImage = (dragIndex: number, hoverIndex: number) => {
    const draggedImage = images[dragIndex];
    const updatedImages = [...images];
    updatedImages.splice(dragIndex, 1);
    updatedImages.splice(hoverIndex, 0, draggedImage);
    setImages(updatedImages);
  };

  const handleImageSelection = (id: string) => {
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        return { ...image, selected: !image.selected };
      }
      return image;
    });
    setImages(updatedImages);
  };

  const countSelectedImages = () => {
    return images.filter((image) => image.selected).length;
  };

  const deleteSelectedImages = () => {
    const updatedImages = images.filter((image) => !image.selected);
    setImages(updatedImages);
  };

  const handleUpload = (uploadedImage: File | Blob | null) => {
    setImages((prevImages) => [
      ...prevImages,
      {
        id: Date.now().toString(),
        img: URL.createObjectURL(uploadedImage!),
        selected: false,
      },
    ]);
  };

  const handleCountCheckbox = () => {
    // Check if any images are selected
    const anySelected = images.some((image) => image.selected);

    // If any images are selected, unselect them all
    if (anySelected) {
      const updatedImages = images.map((image) => {
        return { ...image, selected: false };
      });
      setImages(updatedImages);
    }
  };

  return (
    <DndProvider backend={backend}>
      <div className="max-w-4xl mx-auto rounded-lg shadow-md mt-10 bg-slate-50 border-slate-700">
        <div className="px-8">
          <div className="flex items-center justify-between border-b py-3">
            {countSelectedImages() ? (
              <p className="text-xl font-bold mb-0">
                <input
                  onChange={handleCountCheckbox}
                  type="checkbox"
                  className="w-4 h-4"
                  checked={countSelectedImages() > 0}
                />{" "}
                {countSelectedImages()} Files Selected
              </p>
            ) : (
              <p className="text-xl font-bold mb-0">Image Gallery</p>
            )}
            <button
              onClick={deleteSelectedImages}
              className="text-red-600 text-lg font-bold hover:text-red-700"
            >
              Delete files
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-8 border">
            {images.map((image, index) => (
              <ImageCard
                key={image.id}
                index={index}
                id={image.id}
                src={image.img}
                selected={image.selected}
                onImageSelect={handleImageSelection}
                moveImage={moveImage}
                className={index === 0 ? "col-span-2 row-span-2" : ""}
              />
            ))}

            <div className="">
              <ImageFileUploader onUpload={handleUpload} />
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
