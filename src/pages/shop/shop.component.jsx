import React from 'react';
import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';

import "./shop.styles.scss";

const Shop = ({match}) => {
    return ( 
        <div>
            <Route path={`${match.path}`} exact component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={Collection}/>
        </div>
    );
}

export default Shop;