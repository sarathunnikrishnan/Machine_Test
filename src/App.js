import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayProduct from './Components/DisplayProduct';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartItems from './Components/CartItems/CartItems';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<DisplayProduct/>} />
          <Route path='/cart' element={<CartItems />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
