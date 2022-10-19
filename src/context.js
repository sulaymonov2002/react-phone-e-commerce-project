import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContact = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  };
  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = () => {
    console.log("hello from add to cart");
  };

  tester = () => {
    console.log("State products : ", this.state.products[0].inCart);
    console.log("Date products : ", storeProducts[0].inCart);

    const tempProducts = [...this.state.products];
    tempProducts[0].inCart = true;
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  render() {
    return (
      <ProductContact.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContact.Provider>
    );
  }
}

const ProductConsumer = ProductContact.Consumer;

export { ProductProvider, ProductConsumer };
