import './App.css';
import NoteState from './context/NoteState';
import BookState from './context/BookState';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <>
      <NoteState>
      <BookState>
        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home/>} />
            <Route path="/general" element={<Home category='general'/>} />
            <Route path="/frictional" element={<Home category='frictional' />} />
            <Route path="/novel" element={<Home category='novel'/>} />
            <Route path="/self-improvement" element={<Home category='self-improvement'/>} />
            <Route path="/4" element={<Home rating='4'/>} />
            <Route path="/3" element={<Home rating='3'/>} />
            <Route path="/2" element={<Home rating='2'/>} />
            <Route path="/1" element={<Home rating='1'/>} />
            <Route path="/details" element={<DetailsPage/>} />
          </Routes>
        </BrowserRouter>
        </BookState>
      </NoteState>
    </>
  );
}

export default App;
