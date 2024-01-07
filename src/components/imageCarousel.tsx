import { useState } from "react";
import { Image } from "../utils/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images }: { images: Image[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center mt-1">
      <div className="w-full h-[100px] md:h-[200px] relative">
        <img
          src={images[currentImage].url}
          className="w-full h-full object-cover rounded-md"
        />
        {images.length > 1 && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
            <button onClick={handlePrev} className="p-1">
              <ChevronLeft size={30} color="black" />
            </button>
            <button onClick={handleNext} className="p-1">
              <ChevronRight size={30} color="black" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
