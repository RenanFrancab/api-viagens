import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { MdArrowBack } from "react-icons/md";

import { Container, Cover } from "./styles.js";

export default function Info({ book }) {
  return (
    <Container>
      <Link className="go-back" to="/">
        <MdArrowBack size={32} color="#2ecc71" />
      </Link>
      <Cover src={book.coverImage} />
      <h4 className="name">{book.name}</h4>
      <div className="book-rating">
        <StarRatings
          rating={book.rating}
          starRatedColor="#F1C40F"
          starDimension="18px"
          starSpacing="0"
        />{" "}
        (${book.rating})
      </div>
      <p>
        <span className={book.promotionalPrice ? "discount" : ""}>
          R$ {Number(book.price).toFixed(2)}
        </span>
        {book.promotionalPrice && (
          <span> por R$ {Number(book.promotionalPrice).toFixed(2)}</span>
        )}
      </p>
    </Container>
  );
}

Info.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    promotionalPrice: PropTypes.number,
    price: PropTypes.number,
    coverImage: PropTypes.string
  }).isRequired
};
