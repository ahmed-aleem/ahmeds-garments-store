import React, { useState } from 'react';
import {auth} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {

    const [fields, setFields] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {

        e.preventDefault();

        const newFields = {...fields};

        newFields[e.target.name] = e.target.value;
        
        setFields(newFields);

    }

    const handleSubmit = async e => {
        e.preventDefault();

        try{

            await auth.signInWithEmailAndPassword(fields.email, fields.password);
            setFields({email: '', password: ''});
            alert("Sign In Successful!");

        } catch (error){

            console.log(error);
            alert("Oops! Problem with Sign In, Try Again Later.")

        }
    }

    return ( 
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in using email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email"
                    name="email"
                    label="email"
                    value={fields.email}
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    type="password"
                    name="password"
                    label="password"
                    value={fields.password}
                    handleChange={handleChange}
                    required
                />
                <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;