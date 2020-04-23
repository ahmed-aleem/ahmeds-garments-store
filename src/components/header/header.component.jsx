import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../utils/firebase/firebase.utils';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {ReactComponent as Logo} from '../../static/icons/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, OptionsContainer, Option } from './header.styles';

// import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
    return ( 
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <Option to='/shop' >
                    SHOP
                </Option>
                <Option to='/contact' >
                    CONTACT
                </Option>
                {
                    currentUser ?
                    <Option as='div' onClick={() => auth.signOut()}>SIGN OUT</Option> :
                    <Option to='/sign-in' >SIGN IN</Option>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden ? null : <CartDropDown/>
            }
        </HeaderContainer>
    );
}

const mapStatetoProps = createStructuredSelector({
    //displayName: store.rootreducer.reducerStateValue
    //currentUser: state.user.currentUser
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStatetoProps)(Header);