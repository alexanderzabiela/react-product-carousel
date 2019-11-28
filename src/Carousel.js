import React, { Component } from "react";
import data from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const sliderSettings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      swipeToSlide: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

    let products = this.state.products;
    return (
      <div className="container">
        <h2>Related Products</h2>
        <Slider {...sliderSettings}>
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
        </Slider>
      </div>
    );
  }
}

export default Carousel;
