import { gql } from '@apollo/client';

import { productFields } from './fields';

export const GET_SINGLE_PRODUCT = gql`
    query ($id: String!) {
        returnSingleProduct(id: $id) {
            ${productFields}
        }
    }
`;

export const GET_ALL_PRODUCTS = gql`
    query {
        returnAllProduct {
            ${productFields}
        }
    }
`;