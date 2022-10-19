import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, compaony, img, info, price, title, inCart } =
            value.detailProducts;
        }}
      </ProductConsumer>
    );
  }
}
