import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../utils/firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {

    const [fields, setFields] = useState(
        { 
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    )

    const handleChange = e => {
        const newFields = {...fields};
        newFields[e.target.name] = e.target.value;
        setFields(newFields);
    } 

    const handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = fields;

        if(password !== confirmPassword){
            alert("Passwords do not match!");
            return;
        }
        
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            setFields({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            alert('User created Successfully');

        } catch (error) {
            console.log("Error while submit:", error.message);
            alert('Oops! Error while creating an account, please try later.');
        }
    }

    return ( 
        <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="text"
                        label="Display Name"
                        name="displayName"
                        value={fields.displayName}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        label="Email"
                        name="email"
                        value={fields.email}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        label="Password"
                        name="password"
                        value={fields.password}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        value={fields.confirmPassword}
                        handleChange={handleChange}
                        required
                    />
                    <CustomButton type="submit">SignUp</CustomButton>
                </form>
            </div>
    );
}

export default SignUp;