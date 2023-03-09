import logo from './logo.svg';
import { Routes,Route } from 'react-router';
import Navigation from './Components/Navigation';
import './App.css';
import Footer from './Components/footer';
function App() {
  return ( 
    <div>
      <Routes>
        <Route path='/home' element={<Navigation/>}>
        
        </Route>
        <Route path='/Footer' element={<Footer/>}/>
      </Routes>
    </div>
  );
}

export default App;
