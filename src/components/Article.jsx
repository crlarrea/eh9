import React from "react";
import { useParams } from "react-router-dom";

export const Article = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <section>
      <p>article id: {id} </p>
    </section>
  );
};
