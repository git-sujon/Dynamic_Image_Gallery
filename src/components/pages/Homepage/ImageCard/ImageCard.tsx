import { IImageInfo } from "../../../../types/common";

const ImageCard = ({
  imageInfo,
  className,
}: {
  imageInfo: IImageInfo;
  className: string;
}) => {
  return (
    <div className={`flex justify-center border ${className}`}>
      <div className=" relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <div>
          <img className="rounded-t-lg" src={imageInfo.img} alt="" />
        </div>
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black overly-bg bg-opacity-50 opacity-0 hover:opacity-100  font-black">
          <input
            type="checkbox"
            id={imageInfo.id}
            name={imageInfo.title}
            className="w-5   h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
