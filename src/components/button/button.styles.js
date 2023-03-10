import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color:#B08BBB;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: white;
      color: #B08BBB;
      border: 1px solid #B08BBB;
    }

`;
export const GoogleSignInButton = styled(BaseButton)`
      background-color: #B5D5C5;
      color: white;
  
      &:hover {
        background-color: #FF99D7;
        border: none;
        color: white;
      }
    }

`;
export const InvertedButton = styled(BaseButton)`
      background-color: white;
      color: #FF99D7;
      border: 1px solid #B08BBB;
  
      &:hover {
        background-color: #FF99D7;
        color: white;
        border: none;
      }
    
`;


