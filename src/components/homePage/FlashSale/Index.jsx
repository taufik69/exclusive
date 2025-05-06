import React, { useEffect } from "react";
import ProductCommonLayout from "../../CommonCoponents/ProductCommonLayout";
import ProductCard from "../../CommonCoponents/ProductCard";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";

const FlashSale = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
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
  return (
    <div className="container">
      <div className="flex  flex-row items-start border-b-[1px] border-b-black_363738 mb-10">
        <ProductCommonLayout
          ProductCard={ProductCard}
          timeStamp={true}
          timeofOffer={1}
          isArrowsTrue={true}
          heading="Today's"
          description="Flash Sales"
          partialItemShow={3}
          componentData={data?.products}
          isLoading={isLoading}
        />

        <div className="pb-20 hidden md:block">
          <button className="px-[48px] py-4 bg-redDB4444 rounded text-md font-popins font-medium text-white_FFFFFF hover:opacity-75 cursor-pointer ">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
