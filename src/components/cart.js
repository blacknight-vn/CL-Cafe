import { useDispatch, useSelector } from "react-redux";
import noCart from '../asset/img/noCart.png';
import { NavLink, useNavigate } from "react-router-dom";
import '../asset/scss/cart.scss';
import action from "../redux/actions/action";
import { useState } from "react";

import cake_brown from '../asset/img/cake_brown.jpeg';
import cake_white from '../asset/img/cake_white.jpeg';
import cake_yellow from '../asset/img/cake_yellow.jpeg';
import cake_yellow_pro from '../asset/img/cake_yellow_pro.jpeg';
import cake_mix_bw from '../asset/img/cake_mix_bw.jpeg';

let listImg = {
    cake_brown: cake_brown,
    cake_white: cake_white,
    cake_yellow: cake_yellow,
    cake_yellow_pro: cake_yellow_pro,
    cake_mix_bw: cake_mix_bw,
}

function Cart() {

    let [note, setNote] = useState('');
    let nav = useNavigate();

    let dispatch = useDispatch();

    function onClickAdd(name) {
        dispatch(action.cartAdd(name));
    }

    function onClickReduce(name) {
        dispatch(action.cartReduce(name));
    }

    function onClickRemove(name) {
        dispatch(action.cartRemove(name));
    }

    function onClickRemoveAll() {
        dispatch(action.cartRemoveAll())
    }

    function onChangeNote(value) {
        setNote(value);
    }

    function onClickOrder(cart, note, total) {
        dispatch(action.order({cart: cart, note: note, total: total}))
        nav('/thankyou');
    }

    function sumCart(cart) {
        let sum = 0;
        for(let value of cart) {
            sum += value.total;
        }
        return sum;
    }

    let cartAlt = useSelector((state) => state.reducerStore);
    let cart = cartAlt.cart.map((e, index) => {
        let price;

        switch(e.price) {

            case 19.99:
                price = 
                    <>
                        <p className = 'price'><s>$ 25.99</s></p>
                        <p className = 'discount' style = {{color: 'red'}}>$ {e.price}</p>
                    </>;
                break;
            case 16.99:
                price = 
                <>
                    <p className = 'price'><s>$ 21.99</s></p>
                    <p className = 'discount' style = {{color: 'red'}}>$ {e.price}</p>
                </>;
                break;
            case 14.99:
                price = 
                <>
                    <p className = 'price'><s>$ 18.99</s></p>
                    <p className = 'discount' style = {{color: 'red'}}>$ {e.price}</p>
                </>;
                break;
            default: 
                price = 
                <>
                    <p className = 'price'>$ {e.price}</p>
                    <p className = 'discount'>$ {e.price}</p>
                </>;
                break;
        }

        return (
            <div className = 'cart_each' key = {index}>
                <div className = 'img'>
                    <img src = {listImg[e.img]} alt = 'alt'/>
                    <p>{e.name}</p>
                </div>

                <div className = 'middle'>
                    {price}
                    <div className = 'quantity'><button className = 'reduce' onClick = {() => onClickReduce(e.name)}>-</button> <span className = 'content'>{e.quantity}</span> <button className = 'add' onClick = {() => onClickAdd(e.name)}>+</button></div>
                </div>

                <p className = 'total'>$ {e.total}</p>
                <button className = 'x' onClick = {() => onClickRemove(e.name)}>x</button>
            </div>
        )
    })

    return (
        <div className = 'cart'>
            {(cart.length > 0) ? 
                <div className = 'content_1'> 

                    <div className = 'wrap'>
                        <div className = 'header'>
                            <p>PRODUCT</p>
                            <div className = 'middle'>
                                <p>PRICE</p>
                                <p>DISCOUNTED PRICE</p>
                                <p>QUANTITY</p>
                            </div>
                            <p>TOTAL</p>
                            <button onClick = {() => onClickRemoveAll()} style = {{color: 'red'}}><i class="fa-solid fa-trash"></i> Remove All</button>
                        </div>
                        {cart}
                    </div>

                    <p className = 'note_header'>Note</p>

                    <div className = 'bill'>
                        <div className = 'note'>
                            <textarea rows = '8' placeholder = 'Write your thoughts here...' onChange = {(e) => onChangeNote(e.target.value)}></textarea>
                        </div>

                        <div className = 'proceed'>
                            <div className = 'cost_total'>
                                <p>Cost Total</p>
                                <p style = {{color: 'red'}}>$ {sumCart(cartAlt.cart)}</p>
                            </div>

                            <p className = 'calculate'>Calculate Shipping</p>
                            <input type = 'text' placeholder = 'Enter Address ...'/>

                            <div className = 'total'>
                                <p>Total</p>
                                <p style = {{color: 'red'}}>$ {sumCart(cartAlt.cart)}</p>
                            </div>

                            <button onClick = {() => onClickOrder(cartAlt.cart, note, sumCart(cartAlt.cart))}>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
                : 
                <div className = 'content_2'>
                    <img src = {noCart} alt = 'alt'/>
                    <h1>Empty! You Don't Cart any Products</h1>
                    <NavLink to = '/'><i className="fa fa-arrow-left" aria-hidden="true"></i> Back To Products</NavLink>
                </div>}
        </div>
    )
}

export default Cart;