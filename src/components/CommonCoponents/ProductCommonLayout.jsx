import React, { useRef } from "react";
import Heading from "../CommonCoponents/Heading.jsx";
import Timer from "../CommonCoponents/Timer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import ProductSkeleton from "../../helpers/ProductSeleton.jsx";
const ProductCommonLayout = ({
  ProductCard = () => <ProductSkeleton />,
  timeStamp = false,
  timeofOffer = 0,
  isArrowsTrue = false,
  heading = "today's",
  description = "flash sale",
  partialItemShow = 4,
  componentData = [],
  isLoading = false,
  viewButton = false,
  rows = 0 || 1,
}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: partialItemShow - 1,
    rows: rows,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickPrev();
  };

  const prev = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="mt-[140px] mb-[60px] ">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex flex-col sm:flex-row   gap-y-3 sm:items-end  sm:gap-x-[87px]">
            <Heading title={heading} description={description} />
            {timeStamp && <Timer timeofOffer={timeofOffer} />}
          </div>
          <div className="">
            {isArrowsTrue && (
              <div className="flex items-center gap-x-4">
                <h1
                  onClick={next}
                  className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-black_363738 hover:text-white_FFFFFF transition"
                >
                  <span className="text-xl">
                    <IoMdArrowBack />
                  </span>
                </h1>
                <h1
                  onClick={prev}
                  className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-black_363738 hover:text-white_FFFFFF transition"
                >
                  <span className="text-xl">
                    <IoArrowForward />
                  </span>
                </h1>
              </div>
            )}
          </div>

          {viewButton && (
            <div className="bg-redDB4444  text-md font-popins font-medium text-white_FFFFFF px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
              View All
            </div>
          )}
        </div>
        <div className="slider-container">
          {/* <Slider ref={sliderRef} {...settings}>
            {isLoading
              ? [...new Array(6)]?.map((_, index) => (
                  <div
                    className={partialItemShow > 4 ? "pr-8" : "pr-6"}
                    key={index}
                  >
                    <ProductSkeleton />
                  </div>
                ))
              : [...new Array(6)]?.map((item, index) => (
                  <div
                    className={partialItemShow > 4 ? "pr-8" : "pr-6"}
                    key={index}
                  >
                    <ProductCard itemData={item ? item : {}} />
                  </div>
                ))}
          </Slider> */}

          <div className="slider-container px-[-8px]">
            <Slider {...settings}>
              {componentData.length
                ? componentData.map((item, i) => (
                    <div key={i} className="px-2">
                      <ProductCard itemData={item} />
                    </div>
                  ))
                : [1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="px-2">
                      <ProductSkeleton />
                    </div>
                  ))}
            </Slider>
          </div>
          {/* <Slider {...settings}>
            <div className="px-2">
              <div className="h-[300px] bg-red-500 w-full">…</div>
            </div>

            <div className="px-2">
              <div className="h-[300px] bg-red-500 w-full">…</div>
            </div>

            <div className="px-2">
              <div className="h-[300px] bg-red-500 w-full">…</div>
            </div>

            <div className="px-2">
              <div className="h-[300px] bg-red-500 w-full">…</div>
            </div>
          </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
