/** @format */
"use client";
import axiosInstance from "@/util/axiosInstance";
type Cat = {
  name: string;
  icon: string;
};

export const getProductByCategory = async ({
  shopName,
  category,
}: {
  shopName: string;
  category: string;
}) => {
  const response = await axiosInstance.post(
    `/products/getProductByCategory?shopName=${shopName}`,
    {
      category: category,
    }
  );
  if (response.status === 200) {
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
