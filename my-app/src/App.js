import "./App.css";
import NoteState from "./context/NoteState";
import BookState from "./context/BookState";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoteContext from "./context/NoteContext";
import { useContext } from "react";
import DetailsPage from "./pages/DetailsPage";
import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage";

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
              <Route path="/landingpage" element={<LandingPage />} />

              {books.map((item) => {
                return (
                  <>
                    <Route
                      key={item.id}
                      path="/"
                      element={
                        <Home category={item.category} rating={item.rating} />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/${item.name}`}
                      element={ <DetailsPage img={item.img} title={item.name} rating={item.rating} />}
                    />
                    <Route
                      key={item.id}
                      path={`/${item.category}`}
                      element={<Home category={item.category} />}
                    />
                    <Route
                      key={item.id}
                      path={`/${item.rating}`}
                      element={<Home rating={item.rating} />}
                    />

                    <Route
                      key={item.id}
                      path={`/general/${item.name}`}
                      element={
                        <DetailsPage img={item.img} title={item.name} rating={item.rating} />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/frictional/${item.name}`}
                      element={
                        <DetailsPage img={item.img} title={item.name} rating={item.rating} />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/novel/${item.name}`}
                      element={
                        <DetailsPage img={item.img} title={item.name} rating={item.rating} />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/self-improvement/${item.name}`}
                      element={
                        <DetailsPage img={item.img} title={item.name} rating={item.rating} />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/4/${item.name}`}
                      element={
                        <DetailsPage img={item.img} title={item.name} rating={item.rating} />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/3/${item.name}`}
                      element={
                        <DetailsPage img={item.img} title={item.name} rating={item.rating} />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/2/${item.name}`}
                      element={
                        <DetailsPage img={item.img} title={item.name} rating={item.rating} />
                      }
                    />
                    <Route
                      key={item.id}
                      path={`/1/${item.name}`}
                      element={
                        <DetailsPage img={item.img} title={item.name} rating={item.rating} />
                      }
                    />
                  </>
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
