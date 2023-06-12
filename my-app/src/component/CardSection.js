import React, { useContext } from "react";
import Card from "./Card";
import NoteContext from "../context/NoteContext";
import { Link} from "react-router-dom";


function CardSection(props) {
  const context = useContext(NoteContext);
  const { books, maxPrice } = context;

  const filteredCategory = books.filter((element) => {
    return element.category === props.category;
  });

  const filteredRating = books.filter((element) => {
    return element.rating === props.rating;
  });

  const filteredPrice = books.filter((element) => {
    return element.price <= maxPrice;
  });


  return (
    <>
      {console.log(filteredRating)}
      <div className="card-section">

      {props.price &&
          filteredPrice.map((element, index) => (
            <Link key={`${element.id}-${index}`} to={`${element.name}`}>
              <Card
                key={`${element.id}-${index}`}
                img={element.img}
                name={element.name}
                price={element.price}
                category={element.category}
                rating={element.rating}
              />
            </Link>
          ))}


        {props.category &&
          filteredCategory.map((element, index) => (
            <Link key={`${element.id}-${index}`} to={`${element.name}`}>
              <Card
                key={`${element.id}-${index}`}
                img={element.img}
                name={element.name}
                price={element.price}
                category={element.category}
                rating={element.rating}
              />
            </Link>
          ))}

        {props.rating &&
          filteredRating.map((element, index) => (
            <Link key={`${element.id}-${index}`} to={`${element.name}`}>
              <Card
                key={`${element.id}-${index}`}
                img={element.img}
                name={element.name}
                price={element.price}
                category={element.category}
                rating={element.rating}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

export default CardSection;

