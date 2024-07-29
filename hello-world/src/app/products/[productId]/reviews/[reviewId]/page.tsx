import React from "react";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      Review {params.reviewId} of Product {params.productId}
    </div>
  );
};

export default ReviewDetail;
