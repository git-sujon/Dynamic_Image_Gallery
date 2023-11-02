import React from "react";
import imageIcon from "../../assets/icons/picture-svgrepo-com.svg";
// Define the props that the ImageFileUploader component expects
interface ImageFileUploaderProps {
  onUpload: (file: File | Blob | null) => void;
}
// Define the ImageFileUploader component
const ImageFileUploader: React.FC<ImageFileUploaderProps> = ({ onUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get the selected file from the input
    const file = e.target.files?.[0] || null;
    onUpload(file);
  };

  return (
    <div className="relative h-full p-6 hover:bg-gray-50 border-2 border-dashed rounded cursor-pointer">
      {/* image input file */}
      <input
        type="file"
        multiple
        name="image"
        id="image"
        className="absolute h-full w-full opacity-0 cursor-pointer"
        onChange={handleFileChange}
      />
      {/* image input file place holders */}
      <div className="flex flex-col text-gray-700 text-sm font-medium justify-center items-center gap-y-4">
        <img src={imageIcon} alt="Image icon" className="w-7 h-7" />
        <p className="font-semibold cursor-pointer">Add Images</p>
      </div>
    </div>
  );
};

export default ImageFileUploader;
