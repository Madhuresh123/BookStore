import React, { useContext } from "react";
import Card from "./Card";
import NoteContext from "../context/NoteContext";
import { Link} from "react-router-dom";

function CardSection(props) {
  const context = useContext(NoteContext);
  const { books } = context;

  const filtedCaterogy = books.filter((element) => {
    return element.category === props.category;
  });
  const filtedRating = books.filter((element) => {
    return element.rating === props.rating;
  });

  const filtedPricing = books.filter((element) => {
    return (element.price <= props.pricing);
  });


  return (
    <>
    <div className="card-section">
      { props.category  && 
        filtedCaterogy.map((element) => {
          return (
          <Link to={`${element.name}`}>  
          <Card
                key={element.id}
              img={element.img}
              name={element.name}
              price={element.price}
              category={element.category}
              rating={element.rating}
            />
            </Link>
          );
        })}

      {props.rating &&
        filtedRating.map((element) => {
          return (
            <Link to={`${element.name}`}>  
            <Card
              key={element.id}
              img={element.img}
              name={element.name}
              price={element.price}
              category={element.category}
              rating={element.rating}
            />
            </Link>

          );
        })}

        { props.pricing &&
        filtedPricing.map((element) => {
          return (
            <Link to={`${element.name}`}>  
            <Card
              key={element.id}
              img={element.img}
              name={element.name}
              price={element.price}
              category={element.category}
              rating={element.rating}
            />
            </Link>
          );
        })}


    </div>
    </>
  );
}

export default CardSection;
