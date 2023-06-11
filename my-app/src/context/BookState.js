import React, { useState } from "react";
import NoteContext from "./NoteContext";

const BookState = (props) => {
  const arr = [
    {
      id: "1",
      img: "photo1.PNG",
      name: "Eat that frog",
      price: 50,
      category: "novel",
      rating: "3",
    },
    {
      id: "2",
      img: "photo1.PNG",

      name: "Think and grow rich",
      price: 65,
      category: "frictional",
      rating: "5",
    },
    {
      id: "3",
      img: "photo1.PNG",

      name: "Millioniar Club",
      price: 50,
      category: "novel",
      rating: "2",
    },
    {
      id: "4",
      img: "photo1.PNG",

      name: "Eat that frog",
      price: 50,
      category: "self-improvement",
      rating: "4",
    },
    {
      id: "5",
      img: "photo1.PNG",

      name: "Eat that frog",
      price: 50,
      category: "novel",
      rating: "3",
    },
    {
      id: "6",
      img: "photo1.PNG",

      name: "Eat that frog",
      price: 50,
      category: "novel",
      rating: "3",
    },
    {
      id: "7",
      img: "photo1.PNG",

      name: "NEET 2023",
      price: 50,
      category: "general",
      rating: "3",
    },
    {
      id: "8",
      img: "photo1.PNG",

      name: "Eat that frog",
      price: 20,
      category: "novel",
      rating: "3",
    },
    {
      id: "9",
      img: "photo1.PNG",

      name: "Eat that frog",
      price: 50,
      category: "novel",
      rating: "1",
    },
    {
      id: "10",
      img: "photo2.PNG",

      name: "5 a.m club",
      price: 50,
      category: "self-improvement",
      rating: "3",
    },
  ];

  const [books, setBooks] = useState(arr);
  const [cartList, setCartList] = useState([]);
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);

  return (
    <NoteContext.Provider value={{ setBooks, books, setCategory, category, cartList, setCartList, maxPrice, setMaxPrice }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default BookState;
