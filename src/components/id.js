import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import '../asset/scss/id.scss';

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


function Id() {

    let id = useParams().id;
    let product = useSelector(state => state.reducerStore.product)[id];

    return (
        <div className = 'id'>
            <img src = {listImg[product.img]} alt = 'alt'/>
            <div className = 'content-2'>
                <p className = 'name'>{product.name}</p>
                <h1>{product.des}</h1>

                <div className = 'review'>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star last"></i>
                    <span>6 Reviews</span>
                </div>

                <h2 className = 'price'>$ {product.price}</h2>
                <p className = 'stock'>Stock: <span>{product.stock}</span></p>
                <p className = 'des'>It is a long established fact that a reader will be distracted by the readable there content of a page when looking at its layout</p>

                <div className = 'counter'><button>-</button> <span>1</span> <button>+</button></div>
                <button className = 'add'> Add To Cart </button>
            </div>
        </div>
    )
}

export default Id;