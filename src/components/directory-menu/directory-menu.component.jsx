import React from 'react';
import MenuItem from "../menu-item/menu-item.component"
import MenuList from "../../util/menu-list";
import "./directory-menu.styles.scss";

const DirectoryMenu = () => {
    return ( 
        <div className="directory-menu">
            {MenuList.map(({title, img, size}, index)=>(
                <MenuItem title={title} img={img} id={index} size={size}/>
            ))}
        </div>
    );
}

export default DirectoryMenu;