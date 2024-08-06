"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("ordering product");
    router.push("/");
  };
  return (
    <>
      <button onClick={handleClick}>Order Product</button>
    </>
  );
};

export default OrderProduct;
