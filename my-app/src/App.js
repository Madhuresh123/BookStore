import "./App.css";
import NoteState from "./context/NoteState";
import BookState from "./context/BookState";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import NoteContext from "./context/NoteContext";
import { useContext } from "react";

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
              <Route path="/" element={<Home />} />
              <Route path="/general" element={<Home category="general" />} />
              <Route
                path="/frictional"
                element={<Home category="frictional" />}
              />
              <Route path="/novel" element={<Home category="novel" />} />
              <Route
                path="/self-improvement"
                element={<Home category="self-improvement" />}
              />
              <Route path="/4" element={<Home rating="4" />} />
              <Route path="/3" element={<Home rating="3" />} />
              <Route path="/2" element={<Home rating="2" />} />
              <Route path="/1" element={<Home rating="1" />} />
              <Route path="/details" element={<DetailsPage />} />

              {books.map((item) => {
                return (
                  <>
                    <Route
                      path={`/general/${item.name}`}
                      element={<DetailsPage title={item.name} />}
                    />
                    <Route
                      path={`/frictional/${item.name}`}
                      element={<DetailsPage title={item.name}/>}
                    />
                    <Route
                      path={`/novel/${item.name}`}
                      element={<DetailsPage title={item.name} />}
                    />
                    <Route
                      path={`/self-improvement/${item.name}`}
                      element={<DetailsPage />}
                    />
                    <Route
                      path={`/4/${item.name}`}
                      element={<DetailsPage title={item.name}/>}
                    />
                    <Route
                      path={`/3/${item.name}`}
                      element={<DetailsPage title={item.name}/>}
                    />
                    <Route
                      path={`/2/${item.name}`}
                      element={<DetailsPage title={item.name}/>}
                    />
                    <Route
                      path={`/1/${item.name}`}
                      element={<DetailsPage title={item.name}/>}
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
