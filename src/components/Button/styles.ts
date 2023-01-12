import styled from "styled-components";

export const ContainerButton = styled.button`
width: 160px;
height: 50px;
text-align: center;
color: green;
font-weight: bold;
border: 2px solid #00aa00;
border-radius: 10px;
background-color: black;
opacity: 1;
cursor: pointer;
z-index: 99;

&:hover{
    opacity: 1.2;
    color: #00ff00;
    border: 2px solid  #00ff00;
}

`