import styled from 'styled-components';

export const BackgroundImage = styled.div`

    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 0 5px;
    background-image:${({imageUrl} )=> `url(${imageUrl})` };

`;


export const Body = styled.div`

    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #B2B2B2;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    color: #B08BBB;
    
    h2 {
      font-weight: bold;
      font-size: 22px;
      text-transform:uppercase;
      margin: 0 6px 0;
    }

    p {
      font-weight: lighter;
      font-size: 16px;
      margin: 0 6px 0;
    }
    @media screen and (max-width: 800px) {
      height: 70px;
      
    }
`;

export const DirectoryItemContainer = styled.div`
    min-width: 30%;
    height: 370px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #B08BBB;
    margin: 0 7.5px 15px;
    overflow: hidden;
    @media screen and (max-width: 800px) {
        height: 200px;
        width: 45%;
      }
    &:hover {
      cursor: pointer;

      & ${BackgroundImage} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      & ${Body} {
        opacity: 0.9;
      } }   
      

      &:first-child {
      margin-right: 7.5px;
      }

      &:last-child {
      margin-left: 7.5px;
     }
        

`;





