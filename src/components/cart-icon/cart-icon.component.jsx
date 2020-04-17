import React from 'react';
import {connect} from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../static/icons/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDropDown}) => {
    return ( 
        <div className='cart-icon' onClick={toggleCartDropDown}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
     );
}

const mapDispatchToProps = dispatch => ({
    toggleCartDropDown: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);