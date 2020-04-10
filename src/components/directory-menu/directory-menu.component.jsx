import React from 'react';
import MenuItem from "../menu-item/menu-item.component"
import MenuList from "./directory-menu.data";
import "./directory-menu.styles.scss";

const DirectoryMenu = () => {
    return ( 
        <div className="directory-menu">
            {MenuList.map(({...allProps}, index)=>(
                <MenuItem  key={index} {...allProps}/>
            ))}
        </div>
    );
}

export default DirectoryMenu;