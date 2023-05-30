import './App.css';
import NoteState from './context/NoteState';
import About from './pages/About';

function App() {
  return (
    <>
    <NoteState>
     <About/>
    </NoteState>
    </>
  );
}

export default App;
