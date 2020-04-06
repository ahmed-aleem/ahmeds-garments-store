import React from 'react';
import {withRouter} from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({title, img, size, linkUrl ,history, match}) => {

    return ( 
        <div className={`menu-item ${size }`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div style={{backgroundImage: `url(${img})`}} className="menu-item__bg"/>
            <div className="menu-item__content">
                <h3>{title}</h3>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);