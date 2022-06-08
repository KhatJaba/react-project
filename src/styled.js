import styled from 'styled-components';

export const Square = styled.div`
    width: 100;
    margin: 10px 25px;
    height: 50px;
    background-color: transparent;
    color: black;
    border: solid 1px black;
    border-radius: 25px;
    text-align: center;
    &:active { 
        background-color: salmon; 
    }
`;

export const Btn = styled.button`
    width: 50%;
    padding: 20px;
    font-size: 20px;
    margin-top: 10px;
`