import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import HeaderBanner from './Components/Header/HeaderBanner';
import MagazineSlider from './Components/MagazineSlider/MagazineSlider';
import Category from './Components/Category/Category';
import Achievement from './Components/Achievement/Achievement';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <HeaderBanner></HeaderBanner>
      <Category></Category>
      <MagazineSlider></MagazineSlider>
      <Achievement></Achievement>
    </div>
  );
}

export default App;
