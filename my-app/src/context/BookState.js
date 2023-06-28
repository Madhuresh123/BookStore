import React, { useState } from "react";
import NoteContext from "./NoteContext";

const BookState = (props) => {
  const arr = [
    {
      id: "1",
      img: "photo1.PNG",
      name: "Eat that frog",
      price: 55,
      category: "self-improvement",
      rating: "3",
    },
    {
      id: "2",
      img: "book1.PNG",

      name: "The Housemaid",
      price: 85,
      category: "frictional",
      rating: "3",
    },
    {
      id: "3",
      img: "book2.PNG",

      name: "Lessons in chemistry",
      price: 45,
      category: "novel",
      rating: "2",
    },
    {
      id: "4",
      img: "book3.PNG",

      name: "The Bandit Queens",
      price: 35,
      category: "general",
      rating: "4",
    },
    {
      id: "5",
      img: "book4.PNG",

      name: "Again Rachel",
      price: 15,
      category: "frictional",
      rating: "2",
    },
    {
      id: "6",
      img: "book5.PNG",

      name: "Ouw Wives under the sea",
      price: 45,
      category: "novel",
      rating: "5",
    },
    {
      id: "7",
      img: "book6.PNG",

      name: "Go as a River",
      price: 85,
      category: "general",
      rating: "2",
    },
    {
      id: "8",
      img: "book7.PNG",

      name: "I can't believe it's not better",
      price: 20,
      category: "frictional",
      rating: "3",
    },
    {
      id: "9",
      img: "book8.PNG",

      name: "Pineapple Street",
      price: 75,
      category: "novel",
      rating: "1",
    },
    {
      id: "10",
      img: "photo2.PNG",

      name: "5 a.m club",
      price: 25,
      category: "self-improvement",
      rating: "4",
    },
  ];


  const [books, setBooks] = useState(arr);
  const [cartList, setCartList] = useState([]);
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);
  const [userInfo,setUserInfo] = useState([]);



  return (
    <NoteContext.Provider value={{ setBooks, books, setCategory, category, cartList, setCartList, maxPrice, setMaxPrice,userInfo,setUserInfo }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default BookState;
