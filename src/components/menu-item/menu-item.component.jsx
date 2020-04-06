import React from 'react';
import "./menu-item.styles.scss";

const MenuItem = ({title, img, size}) => {

    return ( 
        <div className={`menu-item ${size }`}>
            <div style={{backgroundImage: `url(${img})`}} className="menu-item__bg"/>
            <div className="menu-item__content">
                <h3>{title}</h3>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default MenuItem;