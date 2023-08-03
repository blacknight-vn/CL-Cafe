import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../asset/scss/product.scss';
import actionCart from "../redux/actions/action";

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

function Product() {

    let nav = useNavigate();
    let dispatch = useDispatch();

    function onClickCart(name) {
        dispatch(actionCart.cartAdd(name));
    }

    function onClickProduct(id) {
        nav('/product/'+id);
    }

    let product = useSelector((state) => state.reducerStore.product).map((e, index) => {

        let price;

        switch(e.price) {
            case 19.99:
                price = <span><s>$25.99</s> - <span style = {{color: 'red'}}>{e.price}$</span></span>;
                break;
            case 16.99:
                price = <span><s>$21.99</s> - <span style = {{color: 'red'}}>{e.price}$</span></span>;
                break;
            case 14.99:
                price = <span><s>$18.99</s> - <span style = {{color: 'red'}}>{e.price}$</span></span>;
                break;
            default: 
                price = <span>{e.price}$</span>;
                break;
        }

        return (
            <div className = 'product_each' key = {index}>
                <img src = {listImg[e.img]} onClick = {() => onClickProduct(index)}/>
                <div className = 'hover_1'>
                    <span><i className="fa-solid fa-expand"></i></span>
                    <span><i className="fa-regular fa-heart"></i></span>
                    <span><i className="fa-solid fa-arrows-rotate"></i></span>
                </div>
                <div className = 'wrap'>
                    <div className = 'star'>
                        <i className="fa fa-solid fa-star"></i>
                        <i className="fa fa-solid fa-star"></i>
                        <i className="fa fa-solid fa-star"></i>
                    </div>
                    <div className = 'name'><strong>Name: </strong>{e.name}</div>
                    <div className = 'des'><strong>Des: </strong>{e.des}</div>
                    <div className = 'price'><strong>Price: </strong>{price}</div>
                </div>
                <div className = 'hover_2' onClick = {() => onClickCart(e.name)}>
                    <span><i className="fa-solid fa-bag-shopping"></i>Add To Cart</span>
                </div>
            </div>
        )
    });

    return (
        <div className = 'product'>
            <h1>List Products</h1>
            <div className = 'list'>
                {product}
            </div>
        </div>
    )
}

export default Product;