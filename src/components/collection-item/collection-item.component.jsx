import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import {CollectionItemContainer, ImageContainer, ButtonContainer, CollectionFooterContainer, NameContainer, PriceContainer} from './collection-item.styles';

// import "./collection-item.styles.scss";

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;

    return ( 
        <CollectionItemContainer>
            <ImageContainer style={{backgroundImage: `url(${imageUrl})`}}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <ButtonContainer>
                <CustomButton inverted onClick={() => addItem(item)}>Add to Cart</CustomButton>
            </ButtonContainer>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);