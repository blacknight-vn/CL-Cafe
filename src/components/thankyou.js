import { NavLink } from 'react-router-dom';

import '../asset/scss/thankyou.scss';
import thankyou_animation from '../asset/img/thankyou_animation.gif';

function ThankYou() {
    return (
        <div className = 'thankyou'>
            <img src = {thankyou_animation} alt = 'alt'/>
            <i class="fa-regular fa-circle-check"></i>
           <h1>Thank You!</h1>
            <p>Thank you for your interest! Check your email for a link to the guide.</p>
            <NavLink to = '/'><i className="fa fa-arrow-left" aria-hidden="true"></i> Back To Products</NavLink>
        </div>
    )
}

export default ThankYou;