import React, { Component } from "react";
import data from "./data";

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    let initialProducts = [];
    initialProducts = data.carouselData.map(product => {
      return product;
    });
    this.setState({
      products: initialProducts
    });
  }

  render() {
    let products = this.state.products;
    return (
      <div className="container">
        <h2>Related Products</h2>
        {products.length === 0 ? (
          <h1>No Products</h1>
        ) : (
          products.map(product => (
            <div key={product.name}>
              <a href={product.url}>
                <img
                  src={product.productImageUrl}
                  alt={product.productImageAltText}
                />
              </a>
              <a href={product.url}>
                <h3>{product.name}</h3>
              </a>
              <span>({product.salesUnit})</span>
              <p>
                {product.price.currency} {product.price.formattedValue}
              </p>
              <a href="#">
                <button>+ Add to cart</button>
              </a>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Carousel;
