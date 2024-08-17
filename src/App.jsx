import React, { Fragment, memo } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout'
import Home from './pages/home'
import Category from './pages/category'
import Products from './pages/products'
import ProductDetailes from './pages/product-detailes'
import NotFound from './pages/not-found'
import WishList from './pages/wish-list'
import Cart from './pages/cart'

const App = () => {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<Products />} />
          <Route path="wish-list" element={<WishList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products/:id" element={<ProductDetailes />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default memo(App)