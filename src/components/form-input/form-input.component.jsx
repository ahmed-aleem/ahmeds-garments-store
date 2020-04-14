import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return ( 
        <div className="group">
            <input onChange={handleChange} {...otherProps} className='form-input'/>
            {
                label ? 
                <label className={`form-input-label ${otherProps.value.length ? "shrink" : null}`}>{label}</label> :
                null
            }
        </div>
     );
}
 
export default FormInput;