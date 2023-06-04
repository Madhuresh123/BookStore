import React, { useState } from "react";
import NoteContext from "./NoteContext";

const BookState = (props) => {
  const arr = [
    {
      id: "1",
      name: "Eat that frog",
      price: "$5",
      category: "novel",
      rating: "3",
    },
    {
      id: "2",
      name: "Think and grow rich",
      price: "$65",
      category: "frictional",
      rating: "5",
    },
    {
      id: "3",
      name: "Millioniar Club",
      price: "$5",
      category: "novel",
      rating: "2",
    },
    {
      id: "4",
      name: "Eat that frog",
      price: "$50",
      category: "self-improvement",
      rating: "4",
    },
    {
      id: "5",
      name: "Eat that frog",
      price: "$5",
      category: "novel",
      rating: "3",
    },
    {
      id: "6",
      name: "Eat that frog",
      price: "$5",
      category: "novel",
      rating: "3",
    },
    {
      id: "7",
      name: "NEET 2023",
      price: "$5",
      category: "general",
      rating: "3",
    },
    {
      id: "8",
      name: "Eat that frog",
      price: "$5",
      category: "novel",
      rating: "3",
    },
    {
      id: "9",
      name: "Eat that frog",
      price: "$5",
      category: "novel",
      rating: "3",
    },
    {
      id: "10",
      name: "5 a.m club",
      price: "$5",
      category: "self-improvement",
      rating: "3",
    },
  ];

  const [books, setBooks] = useState(arr);
  const [category, setCategory] = useState('');



  return <NoteContext.Provider value={{setBooks , books, setCategory, category}}>
    {props.children}
    </NoteContext.Provider>;
};

export default BookState;
