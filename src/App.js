import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Add from './Components/Add';
import View from './Components/View';

function App() {
  return (
    <div className="App">
     <Navbar/>
   
     <Routes>
      <Route path={'/'} element={<View/>}></Route>
      <Route path={'/add'} element={<Add/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
