import React from "react";
import Header from "../component/Header";
import "./cart.css";
import Rating from "../component/Rating";

function Cart() {
  return (
    <div>
      <Header />
      <div className="cart">
        <div className="cart-left">
          <div className="stage">
            <div className="stage-title">Books(1)</div>
            <div className="stage-title">Order(1)</div>
          </div>

          <div className="stage2">
            <div style={{ marginLeft: "1rem" }}>From save email address</div>
            <div style={{ marginRight: "1rem" }}>Order(1)</div>
          </div>

          <div className="stage3">
            <div>
              <img className="cart-photo" src="photo1.PNG" alt="" />
            </div>

            <div className="cart-content">
              <div>
                <h2>Eat That Frog</h2>
                <Rating rating={4} />
                <p>Category: General</p>
                <div className="cost" style={{ marginTop: "1rem" }}>
                  <p style={{ fontSize: "24px" }}>$303</p>
                  <p style={{ textDecoration: "line-through" }}>$503</p>
                  <p style={{ color: "green", fontWeight: "bold" }}>74% off</p>
                </div>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "3rem",
                    cursor: "pointer",
                  }}
                >
                  SAVE FOR LATER
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "3rem",
                    cursor: "pointer",
                  }}
                >
                  REMOVE
                </span>{" "}
              </div>
            </div>
          </div>

          <div className="stage4">
            <button
              type="button"
              style={{
                backgroundColor: "#fb641b",
                fontWeight: "bold",
                marginRight: "2rem",
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
        <div className="cart-right">
        <div className="stage5 " style={{borderBottom: '3px solid whitesmoke'}}>
            <div style={{ marginLeft: "1rem" } }>PRICE DETAILS</div>
            <div style={{ marginRight: "1rem" }}></div>
          </div>

          <div className="stage5">
            <div style={{ marginLeft: "1rem" }}>Price (1 item)</div>
            <div style={{ marginRight: "1rem" }}>999</div>
          </div>

          <div className="stage5">
            <div style={{ marginLeft: "1rem" }}>Discount</div>
            <div style={{ marginRight: "1rem" }}>-500</div>
          </div>

          <div className="stage5">
            <div style={{ marginLeft: "1rem" }}>Delivery Charges</div>
            <div style={{ marginRight: "1rem" }}>Free</div>
          </div>

          <div className="stage5" style={{borderTop: '3px solid whitesmoke'}}>
            <div style={{ marginLeft: "1rem", fontWeight:'bold' }}>Total Amount</div>
            <div style={{ marginRight: "1rem" }}></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;
