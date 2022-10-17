import React, { Component } from "react";
import Title from "./Title";
import { storeProducts } from "../data";
import Product from "./Product";

export default class ProductList extends Component {
  state = {
    product: storeProducts,
  };
  render() {
    console.log(this.state.product)
    
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />

            <div className="row"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
