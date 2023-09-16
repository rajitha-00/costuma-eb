import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Navbar from './components/nav/Navbar';
import Design from './views/Design';
import Marketplace from './views/Marketplace';
import Releses from './views/Releses';
import About from './views/About';
import News from './views/News';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/news' element = {<News/>}/>
        <Route path='/design' element = {<Design/>}/>
        <Route path='/market' element = {<Marketplace/>}/>
        <Route path='/releases' element = {<Releses/>}/>
        <Route path='/about' element = {<About/>}/>

      </Routes>
    </>
  );
}

export default App;
