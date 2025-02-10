// import { useState } from 'react'
import "./index.css"
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import { BrowserRouter,Routes, Route } from "react-router";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartitems")) || []);

  return (
    <UserContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
