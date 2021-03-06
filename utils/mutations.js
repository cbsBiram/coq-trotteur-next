import { gql } from "@apollo/client";

import { productFields } from "./fields";


export const CREATE_PRODUCT = gql`
mutation($title: String!, $price: Int!, $image: String!) {
  createProduct(data: { title: $title, price: $price, image: $image }) {
      ${productFields}
    }
  }
`

export const UPDATE_PRODUCT = gql`
mutation($id: String!, $title: String!, $price: Int!, $image: String!) {
  updateProduct(id: $id, data: { title: $title, price: $price, image: $image }) {
      ${productFields}
    }
  }
`

export const DELETE_PRODUCT = gql`
mutation($id: String!, $title: String!, $price: Int!, $image: String!) {
  deleteProduct(id: $id) {
      ${productFields}
    }
  }
`