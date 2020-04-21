import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //here whata happens: arrayofKeys.map => creates arrayofCollectionItem by replacing item for every matched Key
    collections => Object.keys(collections).map(key => collections[key])
)