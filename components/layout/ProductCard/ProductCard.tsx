/** @format */

import Image from "next/image";
import React from "react";
import Modal from "../Modal/Modal";

interface productCardProps {
  lightColor: string;
  data: any;
  darkColor: any;
}

function ProductCard({ lightColor, darkColor, data }: productCardProps) {
  console.log(data);

  return (
    <>
      <Modal CloseModal={() => console.log("close")} State={false}>
        Hi
      </Modal>
      <div
        style={{ backgroundColor: lightColor }}
        className=" w-full min-h-36 flex p-2 rounded-lg border  border-gray-300"
      >
        <div className=" relative h-full bg-white rounded-lg w-full min-w-[120px] max-w-[120px]">
          <Image
            alt="product-image"
            fill
            unoptimized
            className=" object-cover rounded-lg"
            src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}/${data?.imageURL}`}
          />
        </div>
        <div className=" w-full flex flex-col h-full px-4">
          <div className="  h-full w-full flex flex-col  ">
            <p
              style={{ color: darkColor }}
              className=" text-white text-xl font-semibold"
            >
              {data?.title}
            </p>
            <p style={{ color: darkColor }} className=" text-white text-xs">
              {data?.description}
            </p>
          </div>

          <div className=" flex items-center gap-2">
            <p style={{ color: darkColor }} className=" font-semibold text-xl">
              {data?.price}
            </p>
            <div className=" text-[4px]">
              <p style={{ color: darkColor }} className=" text-[10px]">
                هزار{" "}
              </p>
              <p style={{ color: darkColor }} className=" text-[12px]">
                تومان
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
