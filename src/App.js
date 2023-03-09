import logo from './logo.svg';
import { Routes,Route } from 'react-router';
import Navigation from './Components/Navigation';
import './App.css';

function App() {
  return ( 
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route path='/home' element={<Navigation/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
