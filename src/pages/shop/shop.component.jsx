import React from 'react';

import ShopData from "./shop.data";

import "./shop.styles.scss";

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const Shop = () => {
    return ( 
        <div>
            {
                ShopData.map(({id, ...allData}) => (
                    <CollectionPreview key={id} {...allData}/>
                ))
            }
        </div>
    );
}

export default Shop;