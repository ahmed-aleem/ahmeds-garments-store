import React from 'react';
import "./home.styles.scss";

import DirectoryMenu from "../../components/directory-menu/directory-menu.component";

const Home = () => {
    
    return ( 
        <div className="home">
            <DirectoryMenu/>
        </div> 
    );
}

export default Home;