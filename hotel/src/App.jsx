import logo from './logo.svg';
import './App.scss';
import {Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
function App() {
  return (
    < > 
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='hotel' element={<List />} />
          <Route path='/hotels/:id' element={<Hotel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
