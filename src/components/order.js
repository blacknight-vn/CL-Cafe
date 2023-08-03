import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";
import '../asset/scss/order.scss';

import noOrder from '../asset/img/noOrder.png';
import tai from '../asset/img/tai.jpeg';
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


function Order() {

    let order = useSelector(state => state.reducerStore.order).map((e, index) => {

        let cart = e.cart.map((e2, index2) => {

            let price;

            switch(e2.price) {
                case 19.99:
                    price = <span><s>$ 25.99</s> - <span style = {{color: 'red'}}>${e2.price}</span></span>
                    break;
                case 16.99:
                    price = <span><s>$ 21.99</s> - <span style = {{color: 'red'}}>${e2.price}</span></span>
                    break;
                case 14.99:
                    price = <span><s>$ 18.99</s> - <span style = {{color: 'red'}}>${e2.price}</span></span>
                    break;
                default: 
                    price = <span>$ {e2.price}</span>
                    break;
            }

            return (
                <div className = 'cart_list' key = {index2}>

                    <img src = {listImg[e2.img]} alt = 'alt'/>

                    <div className = 'cart_list_content'>

                        <div className = 'name'>
                            <p className = 'p-1'>Name</p>
                            <p className = 'p-2'>{e2.name}</p>
                        </div>

                        <div className = 'data'>
                            <div className = 'original'>
                                <p className = 'p-1'>Original</p>
                                <p className = 'p-2'>{price}</p>
                            </div>
                            <div className = 'quantity'>
                                <p className = 'p-1'>Quantity</p>
                                <p className = 'p-2'>{e2.quantity}</p>
                            </div>
                            <div className = 'price'>
                                <p className = 'p-1'>Price</p>
                                <p className = 'p-2'>$ {e2.total}</p>
                            </div>
                        </div>

                    </div>

                </div>
            )
        })

        return (
            <div className = 'order_list' key = {index}>
                <h1 className = 'h1'>Order - {index+1}</h1>
                <div className = 'wrap'>

                    <div className = 'content-1'>

                        <div className = 'content'>
                            {cart}

                            <div className = 'note'>
                                <div className = 'note-content'>
                                    <h1>Note</h1>
                                    <span>{e.note}</span>
                                </div>
                            </div>

                            <div className = 'summary'>
                                <h1>Summary</h1>
                                <div className = 'summary-1 smr'>
                                    <p className = 'p-1'>Cost Total:</p>
                                    <p className = 'p-2'>$ {e.total}</p>
                                </div>
                                <div className = 'summary-2 smr'>
                                    <p className = 'p-1'>Discount <span>STUDENT</span></p>
                                    <p className = 'p-2'>0 (0%)</p>
                                </div>
                                <div className = 'summary-3 smr'>
                                    <p className = 'p-1'>Shipping</p>
                                    <p className = 'p-2'>$0</p>
                                </div>
                                <div className = 'summary-4 smr'>
                                    <p className = 'p-1'>Total</p>
                                    <p className = 'p-2'>$ {e.total}</p>
                                </div>
                            </div>
                        </div>  

                    </div>

                    <div className = 'content-2'>
                        <p className = 'customer'>Customer</p>
                        <div className = 'info'>
                            <img src = {tai} alt = 'alt'/>
                            <div className = 'info_below'>
                                <h2>Nguyen Tien Tai</h2>
                                <p>10 Previous Orders</p>
                            </div>
                        </div>
                        <p className = 'email'><i class="fa-regular fa-envelope"></i><span>nguyentientai10@gmail.com</span></p>
                        <h2 className = 'address'>Shipping Address</h2>
                        <p className = 'city'>Nha Trang Khanh Hoa</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className = 'order'>
            {(order.length > 0) ? 
                <div className = 'content_1'>
                    {order}
                </div> 
                :
                <div className = 'content_2'>
                    <img src = {noOrder} alt = 'alt'/>
                    <p>Order empty! You haven't added any products.</p>
                    <NavLink to = '/'><i className="fa fa-arrow-left" aria-hidden="true"></i> Back To Products</NavLink>
                </div>
            }
        </div>
    )
}

export default Order;