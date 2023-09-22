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
import Landing from './views/Landing';
import WhatsNew from './views/WhatsNew';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Landing/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/home' element = {<Landing/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/new' element = {<WhatsNew/>}/>
        <Route path='/design' element = {<Design/>}/>
        <Route path='/market' element = {<Marketplace/>}/>
        <Route path='/releases' element = {<Releses/>}/>
        <Route path='/about' element = {<About/>}/>

      </Routes>
    </>
  );
}

export default App;
