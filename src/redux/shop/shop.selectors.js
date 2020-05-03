import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //here whata happens: arrayofKeys.map => creates arrayofCollectionItem by replacing item for every matched Key
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)