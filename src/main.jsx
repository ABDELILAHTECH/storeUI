import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import WishList from './pages/WishList.jsx'
import CategoryPage from './pages/CategoryPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} >
                <Route index element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='cart' element={<Cart />} />
                <Route path='wishlist' element={<WishList />} />
                <Route path="categories/:categoryName" element={<CategoryPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
