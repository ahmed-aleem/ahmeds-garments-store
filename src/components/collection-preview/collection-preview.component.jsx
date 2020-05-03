import React from 'react';
import {Link} from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import "./collection-preview.styles.scss"

const CollectionPreview = (props) => {
    const {title, items, routeName} = props;
    console.log("collection preview ", props);

    return (
        <div className="collection-preview">
            <Link to={`/shop/${routeName}`}><h2 className="title">{title}</h2></Link>
            <div className="preview">
                {
                    items.filter((item, i) => (i < 4)).map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div> 
        
    );
}

export default CollectionPreview;