import React, { useContext } from "react";
import Card from "./Card";
import NoteContext from "../context/NoteContext";

function CardSection(props) {
  const context = useContext(NoteContext);
  const { books } = context;

  const filtedCaterogy = books.filter((element) => {
    return element.category === props.category;
  });
  const filtedRating = books.filter((element) => {
    return element.rating === props.rating;
  });

  return (
    <div className="card-section">
      {props.category &&
        filtedCaterogy.map((element) => {
          return (
            <Card
              name={element.name}
              price={element.price}
              category={element.category}
              rating={element.rating}
            />
          );
        })}

      {props.rating &&
        filtedRating.map((element) => {
          return (
            <Card
              name={element.name}
              price={element.price}
              category={element.category}
              rating={element.rating}
            />
          );
        })}
    </div>
  );
}

export default CardSection;
