import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Login from './Components/LogIn/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Login></Login>
      <Signup></Signup>
    </div>
  );
}

export default App;
