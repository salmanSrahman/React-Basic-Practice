import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Product.css";
import { RiShoppingBag3Fill } from "react-icons/ri";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, price, star, starCount, stock } = product;

  return (
    <div>
      <Col>
        <Card>
          <div className="product-details">
            <img src={img} alt="" className="img-fluid" />
            <div className="details">
              <h5>{name}</h5>
              <h5>Price: ${price}</h5>
              <div>
                <Rating
                  className="rating-style"
                  initialRating={star}
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  readonly
                />
                <span className="text-secondary">({starCount} review)</span>
              </div>
              <h6 className="my-2">
                Only {stock} left in stock -{" "}
                <span className="text-danger">order soon</span>
              </h6>
              <Button
                className="btn-regular"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart <RiShoppingBag3Fill className="mb-1" />{" "}
              </Button>
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default Product;
