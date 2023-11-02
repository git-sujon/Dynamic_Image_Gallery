import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { imageData } from "./contents/imageData";
import ImageCard from "./components/pages/Homepage/ImageCard/ImageCard";
import { useState } from "react";
import ImageFileUploader from "./components/ui/ImageFileUploader";

function App() {
  // State to store the list of images in the gallery
  const [images, setImages] = useState(imageData);
  // Function to handle the drag-and-drop functionality for images
  const moveImage = (dragIndex: number, hoverIndex: number) => {
    const draggedImage = images[dragIndex];
    const updatedImages = [...images];
    updatedImages.splice(dragIndex, 1);
    updatedImages.splice(hoverIndex, 0, draggedImage);
    setImages(updatedImages);
  };
  // Function to handle the image upload
  const handleUpload = (uploadedImage: File | Blob | null) => {
    // Add the uploaded image to the gallery
    setImages((prevImages: Array<{ id: string; img: string }>) => [
      ...prevImages,
      { id: Date.now().toString(), img: URL.createObjectURL(uploadedImage!) },
    ]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {/* 
    DndProvider is a higher-order component from the 'react-dnd' library
    that provides drag-and-drop functionality to child components.
    It requires a 'backend' to handle the actual drag-and-drop behavior.
    In this case, we're using the 'HTML5Backend' as the backend, which
    is suitable for web applications.
  */}
      <div className="max-w-4xl mx-auto rounded-lg shadow-md mt-10 bg-slate-50 border-slate-700">
        <div className="px-8">
          <div className="flex items-center justify-between border-b py-3">
            <p className="text-xl font-bold mb-0">Image Gallery</p>
            <button className="text-red-600 text-lg font-bold hover:text-red-700">
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
