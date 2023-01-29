import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    padding-bottom:50px ;
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
   
        
      }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        
      }
    
`;
export const CategoryTitle = styled.div`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
    color:#7F669D ;
`;


