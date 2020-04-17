import React from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../utils/firebase/firebase.utils';

import {ReactComponent as Logo} from '../../static/icons/logo.svg';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => {
    return ( 
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/contact' className='option'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link to='/sign-in' className='option'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropDown/>
            }
        </div>
    );
}

const mapStatetoProps = ({user: {currentUser}, cart: {hidden}}) => ({
    //displayName: store.rootreducer.reducerStateValue
    currentUser,
    hidden
})

export default connect(mapStatetoProps)(Header);