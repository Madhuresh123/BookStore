import React, { useContext } from "react";
import Header from "../component/Header";
import "./detailsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping,
  faBolt,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NoteContext from "../context/NoteContext";


function DetailsPage(props) {

  const context = useContext(NoteContext);
  const { cartList, setCartList } = context;

  const handleAddToCart =()=>{
    
    const list = {
      id: new Date().getTime().toString(),
      img: props.img,
      title: props.title,
      category: props.category,
      price: props.price,
      rating: props.rating
    } 
    setCartList([...cartList,list])
    console.log(cartList)
  }

  return (
    <>
      <Header />
      <form>
      <div className="detail-section">
        <div className="left-section">
          <img src={`/${props.img}`} alt="Italy" />
          <div className="detail-button">

            <Link><button
              type="button"
              style={{ backgroundColor: "#ff9f00", fontWeight: "bold" }}
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white", marginRight: "5px" }}
              />
              Add TO CART
            </button>
            </Link>

            <Link to='/cart'>
            <button
              type="button"
              style={{ backgroundColor: "#fb641b", fontWeight: "bold" }}
            >
              <FontAwesomeIcon
                icon={faBolt}
                style={{ color: "white", marginRight: "5px" }}
              />
              BUY NOW
            </button>
            </Link>

          </div>
        </div>

        <div className="right-section">
          <p className="title">{props.title}</p>

          <div className="rating-and-reviews">
            <div className="rate-sticker" style={{ margin: "0 1rem" }}>
              <p style={{ marginRight: "3px" }}>{props.rating}.3</p>
              <FontAwesomeIcon icon={faStar} style={{ color: "white" }} />
            </div>
            <div><p>253 Ratings & 12 Reviews</p></div>
          </div>

          <div className="price">
            <h2>Special price</h2>
            <div className="cost">
              <p style={{ fontSize: "24px" }}>₹{props.price}</p>
              <p style={{ textDecoration: "line-through" }}>₹503</p>
              <p style={{ color: "green", fontWeight: "bold" }}>74% off</p>
            </div>
          </div>

          <div className="offers">
            <h3>Available offers</h3>
            <p>
              <FontAwesomeIcon
                icon={faTag}
                style={{ color: "green", marginRight: "5px" }}
              />
              Special PriceGet extra 5% off (price inclusive of cashback/coupon){" "}
              <span style={{ color: "#2874f0", fontWeight: "bold" }}>T&C</span>
            </p>
            <p>
              <FontAwesomeIcon
                icon={faTag}
                style={{ color: "green", marginRight: "5px" }}
              />
              Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift
              Card worth up to ₹1,000*{" "}
              <span style={{ color: "#2874f0", fontWeight: "bold" }}>
                Know More
              </span>
            </p>
            <p>
              <FontAwesomeIcon
                icon={faTag}
                style={{ color: "green", marginRight: "5px" }}
              />
              Partner OfferBuy this product and get upto ₹250 Off{" "}
              <span style={{ color: "#2874f0", fontWeight: "bold" }}>
                Know More
              </span>
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faTag}
                style={{ color: "green", marginRight: "5px" }}
              />
              Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on
              orders priced between ₹15,000 to ₹39,999 <span style={{ color: "#2874f0", fontWeight: "bold" }}>T&C</span>
            </p>
            <span style={{ color: "#2874f0", fontWeight: "bold" }}>
              View 8 more offers
            </span>
          </div>

          <table className="specifications">
            <tr>
              <td
                style={{ fontSize: "24px", color: "black", fontWeight: "bold" }}
              >
                Specifications
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Book</td>
              <td>
                Delhi Police Constable 2023: 37 Sets PYQ: TCS PYQ Solved Papers
                Hindi Medium
              </td>
            </tr>
            <tr>
              <td>Author</td>
              <td>Pinnacle Publications</td>
            </tr>
            <tr>
              <td>Binding</td>
              <td>Paperback</td>
            </tr>
            <tr>
              <td>Publishing Date</td>
              <td>2023</td>
            </tr>
            <tr>
              <td>Publisher</td>
              <td>Pinnacle Publications</td>
            </tr>
            <tr>
              <td>Edition</td>
              <td>1st</td>
            </tr>
            <tr>
              <td>Number of Pages</td>
              <td>316</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>Hindi</td>
            </tr>
          </table>
        </div>
      </div>
      </form>
    </>
  );
}

export default DetailsPage;
