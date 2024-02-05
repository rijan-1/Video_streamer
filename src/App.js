import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import VideDetail from './components/VideDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import {Box} from '@mui/material'
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <BrowserRouter>
      <Box sx={{backgroundColor:'black'}}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path ='/search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>
      </Box>
      </BrowserRouter>

    </div>
  );
}

export default App;
