import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
