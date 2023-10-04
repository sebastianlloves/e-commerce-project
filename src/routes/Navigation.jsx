import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../Components/Products/Home'
import ProductDetail from '../Components/Products/ProductDetail'
import CartList from '../Components/Carrito/CartList'

const Navigation = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/cart" element={<CartList />}></Route>
        </Routes>
    </Router>
  )
}

export default Navigation