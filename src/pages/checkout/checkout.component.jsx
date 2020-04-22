import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';


const Checkout = ({cartItems, total}) => {
    return ( 
        <div className="checkout">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Name</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <span className='total'>TOTAL: ${total}</span>
            <span className='test-payment'>
                *Please use following card details for the payment*
                <br/>
                4242 4242 4242 4242 - Exp: 13/27 - CVV: 123 
            </span>
            <StripeCheckoutButton price={total}/>
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotal
})

 
export default connect(mapStateToProps)(Checkout);