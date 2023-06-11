import React, { useContext } from "react";
import Header from "../component/Header";
import Filter from "../component/Filter";
import CardSection from "../component/CardSection";
import NoteContext from "../context/NoteContext";


export default function Home(props) {
  const context = useContext(NoteContext);
  const { maxPrice } = context ;
  
  return (
    <div>
      <Header />
      <div className="home-body">
        <Filter />
        <CardSection category={props.category} rating={props.rating} pricing = {maxPrice}/>
      </div>
    </div>
  );
}
