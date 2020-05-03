import styled from 'styled-components';

export const SpinnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
`

export const Spinner = styled.div`
    width: 50px;
    height: 50px;
    background: #eee;
    border-radius: 50%;
    position: relative;
    margin: 50px;
    display: inline-block;
    
    &:after {
        content: '';
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        top: -3px;
        left: -3px;
        border: 3px solid transparent;
        border-top-color: #5ca8b1;
        border-bottom-color: #4591a8;
        animation: spinny 1s linear infinite;
        -webkit-animation: spinny 1s linear infinite;
    }

    @keyframes spinny {
        0%{
            transform: rotate(0deg) scale(1.3)
        }
        50% {
            transform: rotate(45deg) scale(1.5)
        }
        100%{
            transform: rotate(360deg) scale(1.3)
        }
    }

    @-webkit-keyframes spinny {
        0%{
            transform: rotate(0deg) scale(1.3)
        }
        50% {
            transform: rotate(45deg) scale(1.5)
        }
        100%{
            transform: rotate(360deg) scale(1.3)
        }
    }
    
`