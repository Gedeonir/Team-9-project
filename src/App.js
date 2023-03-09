import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';

function App() {
  return (
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <div>
      <Routes>
        <Route path='/home' element={<Navigation/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
