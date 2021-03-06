import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_PRODUCTS } from "../../utils/queries";
import SingleItem from "./SingleItem";

const ListItems = () => {
  const { data, error, loading } = useQuery(GET_ALL_PRODUCTS);
  let { returnAllProduct: products } = data ? data : {};
  console.log(products);

  return (
    <>
      {products && products.map((product) => <SingleItem product={product} />)}
    </>
  );
};

export default ListItems;
