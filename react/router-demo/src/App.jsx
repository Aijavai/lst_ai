import {
  BrowserRouter as Router, // 前端路由
  Routes, // 路由设置容器
  Route  // 单条路由
} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import UserProfile from './pages/UserProfile'
import Products from './pages/Products'
import ProductDetail from './pages/Products/ProductDetail'
import NewProduct from './pages/Products/NewProduct'

function App() {

  return (
    <>
    {/* 前端路由接管一切，配置 */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/products" element={<Products />}>
          {/* 二级路由 */}
          <Route path="ProductDetail" element={<ProductDetail />} />
          <Route path="NewProduct" element={<NewProduct />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
