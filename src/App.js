import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddItemForm from './component/AddItemForm';
import { Routes, Route } from 'react-router-dom';
import Login from './component/login';
// import Items from './component/Items';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Nxtwave_assignement' element={<Login />} />
        <Route path='/Nxtwave_assignement/home' element={<Home />} />
        <Route path='/Nxtwave_assignement/addItem' element={<AddItemForm />} />
      </Routes>
    </>
  );
}

export default App;
