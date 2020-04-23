import styled, {css} from 'styled-components';

export const DefaultStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

export const GoogleSignInStyles = css`
    background-color: #0868d6;
    color: white;
    border: none;

    &:hover{
        background-color: #0861b9;
    }
`

export const InvertedStyles = css`
    background-color: white;
    color: black;
    border: none;

    &:hover{
        background-color: black;
        color: white;
    }
`

const getButtonStyles = props => {
    if (props.isGoogleSignIn){
        return GoogleSignInStyles
    }

    return props.inverted ? InvertedStyles : DefaultStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`
