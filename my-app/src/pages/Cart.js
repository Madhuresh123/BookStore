import React, { useContext } from "react";
import Header from "../component/Header";
import "./cart.css";
import Rating from "../component/Rating";
import NoteContext from "../context/NoteContext";

function Cart() {

  const context = useContext(NoteContext);
  const { cartList, setCartList } = context;

  const handleRemove = (id) => {
    const removeItem = cartList.filter((element) => element.id !==  id )
    setCartList(removeItem)
  }


  const totalPrice = cartList.reduce((sum, element) => {
    return sum + element.price;
  }, 0);

  return (
    <>
      <Header />
      <div className="cart-section"> 
      <div className="cart">
        <div className="cart-left">
          <div className="stage">
            <div className="stage-title">Books({cartList.length})</div>
            <div className="stage-title">Order({cartList.length})</div>
          </div>

          <div className="stage2">
            <div style={{ marginLeft: "1rem" }}>From save email address</div>
            <div style={{ marginRight: "1rem" }}>Order({cartList.length})</div>
          </div>


          {cartList.map((element) => {
            return (
            <div className="stage3" key={element.id}>
            <div>
              <img className="cart-photo" src={element.img} alt="" />
            </div>

            <div className="cart-content">
              <div>
                <h2>{element.title}</h2>
                <Rating rating={element.rating} />
                <p>Category: {element.category}</p>
                <div className="cost" style={{ marginTop: "1rem" }}>
                  <p style={{ fontSize: "24px" }}>₹{element.price}</p>
                  <p style={{ textDecoration: "line-through" }}>₹103</p>
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
                  onClick={() => handleRemove(element.id)}
                >
                  REMOVE
                </span>{" "}
              </div>
            </div>
          </div>
            )
          })}
          

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
        <div className="stage5 " style={{borderBottom: '3px solid whitesmoke', fontSize: '18px', color:'gray', fontWeight: '500'}}>
            <div style={{ marginLeft: "1rem" } }>PRICE DETAILS</div>
            <div style={{ marginRight: "1rem" }}></div>
          </div>

          <div className="stage5" style={{fontSize: '16px'}}>
            <div style={{ marginLeft: "1rem" }}>Price ({cartList.length} item)</div>
            <div style={{ marginRight: "1rem" }}>₹{totalPrice}</div>
          </div>

          <div className="stage5" style={{fontSize: '16px'}}>
            <div style={{ marginLeft: "1rem" }}>Discount 90%</div>
            <div style={{ marginRight: "1rem" , color:'green'}}>-₹{(totalPrice*90)/100}</div>
          </div>

          <div className="stage5" style={{fontSize: '16px'}}>
            <div style={{ marginLeft: "1rem" }}>Delivery Charges</div>
            <div style={{ marginRight: "1rem", color:'green' }}>Free</div>
          </div>

          <div className="stage5" style={{borderTop: '3px solid whitesmoke', fontSize: '18px'}}>
            <div style={{ marginLeft: "1rem", fontWeight:'bold' }}>Total Amount</div>
            <div style={{ marginRight: "1rem", fontWeight:'bold' }}>₹{totalPrice-(totalPrice*90)/100}</div>
          </div>

          <div className="stage5" style={{borderTop: '3px solid whitesmoke', fontSize: '16px'}}>
            <div style={{ marginLeft: "1rem", color: 'green', fontWeight: '500'  }}>You will save ₹{(totalPrice*90)/100} on this order</div>
          </div>
          <div style={{borderBottom: '3px solid whitesmoke', fontSize: '14px', color:'gray', fontWeight: '500', textAlign:'center', padding: '3rem'}}>
            <p>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Cart;
