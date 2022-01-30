import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Login from './Components/LogIn/Login';
import Signup from './Components/Signup/Signup';
import HeaderBanner from './Components/Header/HeaderBanner';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <HeaderBanner></HeaderBanner>
    </div>
  );
}

export default App;
