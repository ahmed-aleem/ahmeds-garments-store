import React from 'react';

import {SpinnerContainer, Spinner} from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return (
        isLoading ? 
        <SpinnerContainer>
            <Spinner/> 
        </SpinnerContainer> : 
        <WrappedComponent {...otherProps}/>
    ); 
}
 
export default WithSpinner;