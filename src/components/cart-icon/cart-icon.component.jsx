import React from 'react';
import {connect} from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingIcon} from '../../static/icons/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDropDown, itemCount}) => {
    return ( 
        <div className='cart-icon' onClick={toggleCartDropDown}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartDropDown: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);