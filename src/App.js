import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Login from './Components/LogIn/Login';
import Signup from './Components/Signup/Signup';
import HeaderBanner from './Components/Header/HeaderBanner';
import MagazineSlider from './Components/MagazineSlider/MagazineSlider';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <HeaderBanner></HeaderBanner>
      <MagazineSlider></MagazineSlider>
    </div>
  );
}

export default App;
