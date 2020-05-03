import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {firestore, convertCollectionsSnapshotToMap} from '../../utils/firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-sinner.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';

import "./shop.styles.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {

    state={
        loading: true
    }

    unSubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(async snapShot => {
            
            const collectionMapArray = convertCollectionsSnapshotToMap(snapShot);
            
            updateCollections(collectionMapArray);
            
            this.setState({loading: false});
        })
    }

    render(){

        const {match} = this.props;
        const {loading} = this.state;

        return ( 
            <div>
                <Route path={`${match.path}`} exact render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(Shop);