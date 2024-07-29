import React from "react";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  console.log(params);
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for Feature "{params.slug[0]}" and Concept "
        {params.slug[1]}"
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs for Feature {params.slug[0]}</h1>;
  }
  return <h1>Docs Home page</h1>;
};

export default Docs;
