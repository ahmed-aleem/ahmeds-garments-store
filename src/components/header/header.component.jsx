import React from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../utils/firebase/firebase.utils';

import {ReactComponent as Logo} from '../../static/icons/logo.svg';

import './header.styles.scss';

const Header = ({activeUser}) => {
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
                    activeUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link to='/sign-in' className='option'>SIGN IN</Link>
                }
            </div>
        </div>
    );
}

const mapStatetoProps = state => ({
    activeUser: state.user.currentUser
})

export default connect(mapStatetoProps)(Header);