import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import MenuItem from "../menu-item/menu-item.component"
import "./directory-menu.styles.scss";

const DirectoryMenu = ({sections}) => {
    return ( 
        <div className="directory-menu">
            {sections.map(({...allProps}, index)=>(
                <MenuItem  key={index} {...allProps}/>
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);