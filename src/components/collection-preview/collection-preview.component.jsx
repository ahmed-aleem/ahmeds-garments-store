import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import "./collection-preview.styles.scss"

const CollectionPreview = (props) => {
    const {title, items} = props;

    return (
        <div className="collection-preview">
            <h2 className="title">{title}</h2>
            <div className="preview">
                {
                    items.filter((item, i) => (i < 4)).map(({id, ...itemProps}) => (
                        <CollectionItem key={id} {...itemProps}/>
                    ))
                }
            </div>
        </div> 
        
    );
}

export default CollectionPreview;