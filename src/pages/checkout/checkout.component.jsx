import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import {CheckoutContainer, CheckoutHeaderContainer, HeaderBlock, TestPayment, TotalPrice, StripeButtonContainer} from './checkout.styles';

// import './checkout.styles.scss';

const Checkout = ({cartItems, total}) => {
    return ( 
        <CheckoutContainer >
            <CheckoutHeaderContainer>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Name</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <TotalPrice>TOTAL: ${total}</TotalPrice>
            <TestPayment>
                *Please use following card details for the payment*
                <br/>
                4242 4242 4242 4242 - Exp: 13/27 - CVV: 123 
            </TestPayment>
            <StripeButtonContainer>
                <StripeCheckoutButton price={total}/>
            </StripeButtonContainer>
        </CheckoutContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotal
})

 
export default connect(mapStateToProps)(Checkout);