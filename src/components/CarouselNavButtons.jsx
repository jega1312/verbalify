import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";
import CarouselPaginationDots from "../components/CarouselPaginationDots";

const CarouselNavButtons = ({total, activeIndex}) => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-between w-full gap-2 md:justify-around lg:justify-end">
      <button
        onClick={() => swiper.slidePrev()}
        className="flex items-center justify-center text-white transition duration-300 ease-in-out bg-green-500 rounded-full hover:bg-green-500/85 hover:text-black size-10 md:size-12 hover:cursor-pointer"
      >
        <FaChevronLeft size={20} />
      </button>
      <CarouselPaginationDots activeIndex={activeIndex} total={total} />
      <button
        onClick={() => swiper.slideNext()}
        className="flex items-center justify-center text-white transition duration-300 ease-in-out bg-green-500 rounded-full hover:bg-green-500/85 hover:text-black size-10 md:size-12 hover:cursor-pointer"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default CarouselNavButtons;
