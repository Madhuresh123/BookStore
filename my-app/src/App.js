import './App.css';
import NoteState from './context/NoteState';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
