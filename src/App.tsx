import ImageCard from "./components/pages/Homepage/ImageCard/ImageCard";
import { imageData } from "./contents/imageData";

function App() {
  return (
    <div className="max-w-4xl mx-auto rounded-lg shadow-md mt-10 bg-slate-50 border-slate-700">
      <div className=" px-8">
        <div className="flex items-center justify-between border-b  py-3">
          <p className="text-xl font-bold  mb-0">Simple Gallery</p>
          <button className="text-red-600 text-lg font-bold hover:text-red-700">
            Delete files
          </button>
        </div>
        <div className="grid grid-cols-5 gap-5 p-8  border">
          {imageData?.map((image, index) => (
            <ImageCard
              key={image.id}
              imageInfo={image}
              // this class wil make the first image size 1x4
              className={index === 0 ? "col-span-2 row-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
