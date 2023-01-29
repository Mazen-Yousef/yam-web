import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    padding:10px ;
`;
export const Title = styled(Link)`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    color:#7F669D ;
`;
export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 15px;

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
   
        
      }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        
      }
`;





  
