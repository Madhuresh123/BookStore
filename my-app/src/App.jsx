import "./App.css";
import NoteState from "./context/NoteState";
import BookState from "./context/BookState";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteContext from "./context/NoteContext";
import React, { useContext } from "react";
import DetailsPage from "./pages/DetailsPage";
import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CardSection from "./component/CardSection";
import Filter from "./component/Filter";
import Header from "./component/Header";

function App() {
  const context = useContext(NoteContext);
  const { books } = context;

  return (
    <>
      <NoteState>
        <BookState>
          <BrowserRouter>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Cart box='cart-view' />} />
              <Route path="/landingpage" element={<LandingPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />



              {books.map((item) => {
                return (
                  <React.Fragment key={item.id}>

                    {/* filter home */}
                    <Route
                    key={item.id}
                      path="/"
                      element={
                        <>
                        <Header/>
                        <div style={{display: 'flex'}}>
                        <Filter/>
                        <CardSection key={item.id} price={item.price}/>
                        </div>
                        </>
                      }
                    />

                    {/* category filter */}
                    <Route
                      key={item.id}
                      path={`/${item.category}`}
                      element={
                        <>
                        <Header/>
                        <div style={{display: 'flex'}}>
                        <Filter/>
                        <CardSection key={item.id} category={item.category}/>
                        </div>
                        </>
                    }
                    />

                     {/* rating filter */}
                    <Route
                      key={item.id}
                      path={`/${item.rating}`}
                      element={
                        <>
                        <Header/>
                        <div style={{display: 'flex'}}>
                        <Filter/>
                        <CardSection key={item.id} rating={item.rating}/>
                        </div>
                        </>
                      
                      }
                    />

                    <Route
                      key={item.id}
                      path={`/${item.name}`}
                      element={
                        <DetailsPage
                        key={item.id}
                          img={item.img}
                          title={item.name}
                          rating={item.rating}
                          price={item.price}
                          category={item.category}
                        />
                      }
                    />
                    

                    <Route
                      key={item.id}
                      path={`/general/${item.name}`}
                      element={
                        <DetailsPage
                        key={item.id}
                          img={item.img}
                          title={item.name}
                          rating={item.rating}
                          price={item.price}
                          category={item.category}
                        />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/frictional/${item.name}`}
                      element={
                        <DetailsPage
                        key={item.id}
                          img={item.img}
                          title={item.name}
                          rating={item.rating}
                          price={item.price}
                          category={item.category}
                        />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/novel/${item.name}`}
                      element={
                        <DetailsPage
                        key={item.id}
                          img={item.img}
                          title={item.name}
                          rating={item.rating}
                          price={item.price}
                          category={item.category}
                        />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/self-improvement/${item.name}`}
                      element={
                        <DetailsPage
                        key={item.id}
                          img={item.img}
                          title={item.name}
                          rating={item.rating}
                          price={item.price}
                          category={item.category}
                        />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/4/${item.name}`}
                      element={
                        <DetailsPage
                        key={item.id}
                          img={item.img}
                          title={item.name}
                          rating={item.rating}
                          price={item.price}
                          category={item.category}
                        />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/3/${item.name}`}
                      element={
                        <DetailsPage
                        key={item.id}
                          img={item.img}
                          title={item.name}
                          rating={item.rating}
                          price={item.price}
                          category={item.category}
                        />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/2/${item.name}`}
                      element={
                        <DetailsPage
                        key={item.id}
                          img={item.img}
                          title={item.name}
                          rating={item.rating}
                          price={item.price}
                          category={item.category}
                        />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/1/${item.name}`}
                      element={
                        <DetailsPage
                        key={item.id} 
                          img={item.img}
                          title={item.name}
                          rating={item.rating}
                          price={item.price}
                          category={item.category}
                        />
                      }
                    />
                  </React.Fragment>
                );
              })}
            </Routes>
          </BrowserRouter>
        </BookState>
      </NoteState>
    </>
  );
}

export default App;
