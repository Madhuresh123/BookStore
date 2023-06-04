import React from "react";
import Header from "../component/Header";
import "./detailsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function DetailsPage(props) {
  return (
    <>
      <Header />
      <div className="detail-section">
        <div className="left-section">
          <img src="/photo.jpg" alt="Italy" />
          <div className="detail-button">
            <button type="button" style={{ backgroundColor: "#ff9f00" }}>
              Add TO CART
            </button>
            <button type="button" style={{ backgroundColor: "#fb641b" }}>
              BUY NOW
            </button>
          </div>
        </div>

        <div className="right-section">
          <p className="title">{props.title}</p>

          <div className="rating-and-reviews">
            <div className="rate-sticker" style={{ margin: "0 1rem" }}>
              <p style={{ marginRight: "3px" }}>4.2</p>
              <FontAwesomeIcon icon={faStar} style={{ color: "white" }} />
            </div>
            <p>253 Ratings & 12 Reviews</p>
          </div>

          <div className="price">
            <h2>Special price</h2>
            <div className="cost">
              <p style={{ fontSize: "24px" }}>$303</p>
              <p style={{ textDecoration: "line-through" }}>$503</p>
              <p style={{ color: "green", fontWeight: "bold" }}>74% off</p>
            </div>
          </div>

          <div className="offers">
            <h3>Available offers</h3>
            <p>
              Special PriceGet extra 5% off (price inclusive of
              cashback/coupon)T&C
            </p>
            <p>
              Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift
              Card worth up to ₹1,000*Know More
            </p>
            <p>Partner OfferBuy this product and get upto ₹250 Off</p>
            <p>
              Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on
              orders priced between ₹15,000 to ₹39,999T&
            </p>
            <p>View 8 more offers</p>
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
    </>
  );
}

export default DetailsPage;
