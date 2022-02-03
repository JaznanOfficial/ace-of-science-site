import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='magazine' element={<HomePage></HomePage>}></Route>
        <Route path='blog' element={<HomePage></HomePage>}></Route>
        <Route path='about' element={<HomePage></HomePage>}></Route>
        <Route path='contact' element={<HomePage></HomePage>}></Route>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
