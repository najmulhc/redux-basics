 
import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Reset from './Components/Reset';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <Login />
      <Profile /> 
      <Reset />
      <Users /> 
    </div>
  );
}

export default App;
