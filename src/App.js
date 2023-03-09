import logo from './logo.svg';
import { Routes,Route } from 'react-router';
import Navigation from './Components/Navigation';
import './App.css';
import Footer from './Components/footer';
import Cards from './Components/Cards';
import Homepage from './Pages/Homepage';

function App() {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/home' element={<Navigation/>}>
        
        </Route>
        <Route path='/Footer' element={<Footer/>}/>

        <Route path="/cards" element={<Cards/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
