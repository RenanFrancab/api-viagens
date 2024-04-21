import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Info from "./Info";
import Score from "./Score";
import Scores from "./Scores";
import Extra from "./Extra";

const GET_BOOK = gql`
  query getBook($isbn: String!) {
    book(isbn: $isbn) {
      isbn
      name
      coverImage
      price
      promotionalPrice
      rating
      score
      scores {
        name
        value
      }
      tecnologies
      requirements
      description
    }
  }
`;

export default function BookDetails() {
  const { isbn } = useParams();
  const [book, setBook] = useState({ isbn: null });

  useQuery(GET_BOOK, {
    variables: { isbn: isbn },
    onCompleted: data => setBook(data.book)
  });

  return (
    <>
      {book.isbn && (
        <>
          <Info book={book} />
          <Score book={book} />
          <Scores book={book} />
          <Extra book={book} />
        </>
      )}
    </>
  );
}
