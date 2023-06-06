import React, { useContext } from 'react'
import './categorySlide.css'
import NoteContext from "../context/NoteContext";
import Card from './Card'
import { Link } from 'react-router-dom';

function CategorySlide(props) {
    const context = useContext(NoteContext);
    const { books } = context;

    const filtedCaterogy = books.filter((element) => {
        return element.category === props.category.toLowerCase();
      });


  return (

    <div className='categorySlide'>
        <div className='categorySlide_left'>
            <div><h3>{props.category} Category Books</h3></div>
            <Link to='/'><button type='button'>VIEW ALL</button></Link>
        </div>
        <div className='categorySlide_right'>
        {filtedCaterogy.slice(0, 4).map((item) => {
  return (

    <Link to='/'>
    <Card
      key={item.id}
      img={item.img}
      name={item.name}
      price={item.price}
      category={item.category}
      rating={item.rating}
    />
    </Link>
  );
})}

        </div>
    </div>
  )
}

export default CategorySlide