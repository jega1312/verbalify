import { useSwiper } from "swiper/react";

const CarouselPaginationDots = ( {total, activeIndex} ) => {
  const swiper = useSwiper();
  

  const slideNumber = (index) => {
    swiper.slideTo(index);
  };

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => slideNumber(index)}
          className={`size-3 rounded-full transition duration-300 ease-in-out cursor-pointer ${
            activeIndex === index ? "bg-green-500" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>
  );
};

export default CarouselPaginationDots;