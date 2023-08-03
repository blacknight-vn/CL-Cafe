import {Routes, Route, NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import '../asset/scss/app.scss';

import Cart from './cart';
import Product from './product';
import Order from './order';
import ThankYou from './thankyou';
import Id from './id';

import bill from '../asset/img/bill.png';
import cart from '../asset/img/shopping-cart.png';
import logo from '../asset/img/logo.png';


const App = () => {
  
  return (
    <div className = 'App'>
        <nav>
          <img className = 'child logo' src = {logo} alt = 'alt'/>

          <div className = 'child middle'>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to = '/'>Product</NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to = '/cart'>Cart</NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to = '/order'>Order</NavLink>
          </div>

          <div className = 'child end'>
            <NavLink className = 'childEnd' to = '/cart'><img src = {cart} alt = 'alt'/></NavLink>
            <NavLink className = 'childEnd' to = '/order'><img src = {bill} alt = 'alt'/></NavLink>
          </div>
        </nav>

      <div className = 'nav_below'>
        <Routes>
          <Route path = '/' element = {<Product/>}/>
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/order' element = {<Order/>}/>
          <Route path = '/thankyou' element = {<ThankYou/>}/>
          <Route path = '/product/:id' element = {<Id/>}/>
        </Routes>
      </div>
    </div>
  )
} 

export default App;