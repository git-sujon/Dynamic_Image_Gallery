import { IImageInfo } from "../../../../types/common";

const ImageCard = ({ imageInfo }: { imageInfo: IImageInfo }) => {
  return (
    <div className="w-64 h-64 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 border">
      <img
        src={imageInfo?.img}
        alt={imageInfo?.title}
        className="w-full h-48 object-cover rounded-lg mb-2"
      />
    </div>
  );
};

export default ImageCard;
