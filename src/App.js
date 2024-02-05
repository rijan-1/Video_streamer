import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
