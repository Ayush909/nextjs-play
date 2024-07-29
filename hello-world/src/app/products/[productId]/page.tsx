import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <div>Product Details Page {params.productId}</div>;
};

export default ProductDetails;
