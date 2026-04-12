import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";
import CarouselPaginationDots from "../components/CarouselPaginationDots";

const CarouselNavButtons = ({total, activeIndex}) => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between md:justify-around lg:justify-end w-full items-center gap-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-green-500 hover:bg-green-500/80 size-10 md:size-12 flex justify-center items-center text-white rounded-full transition duration-300 ease-in-out hover:cursor-pointer"
      >
        <FaChevronLeft size={20} />
      </button>
      <CarouselPaginationDots activeIndex={activeIndex} total={total} />
      <button
        onClick={() => swiper.slideNext()}
        className="bg-green-500 hover:bg-green-500/80 size-10 md:size-12 flex justify-center items-center text-white rounded-full transition duration-300 ease-in-out hover:cursor-pointer"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default CarouselNavButtons;
