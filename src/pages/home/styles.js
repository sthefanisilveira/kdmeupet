import styled from "styled-components";


export const Container =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 150px;
    text-align: center;
`;

export const Button = styled.button`
    padding: 10px;
    width: 360px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background: ${props => props.primary ? "#FF6B6B" : "#4ECDC4" };;
    color: #fff;
    margin: 10px;
    font-weight: bold;
`; 

export const Title = styled.p`
    font-weight: bold;
    color: #FF6B6B;
    font-size: 22px;
`