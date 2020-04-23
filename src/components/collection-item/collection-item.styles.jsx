import styled from 'styled-components';

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`

export const ButtonContainer = styled.div`
    width: 80%;
    position: absolute;
    top:225px;
    display: none;
    justify-content: center;
`

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
    transition: .3s;

    &:hover{
        & ${ImageContainer}{
            opacity: 0.8;
        }

        & ${ButtonContainer}{
            opacity: 0.85;
            display: flex;
        }
    }
`

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`
export const PriceContainer = styled.div`
    width: 10%;
`