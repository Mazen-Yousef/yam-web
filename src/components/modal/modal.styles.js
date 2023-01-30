import styled from 'styled-components';

export const ModalContainer = styled.div`
    padding: 10px;
    color:  #B08BBB;
    text-align : center;
    //text-decoration: overline;
    font-size:  2.5em; /* 40px/16=2.5em */
    font-style: oblique;
    @media screen and (max-width: 900px) {
     
        font-size:  1.5em;
        
   }


`;
export const ModalImage= styled.img`
    width: 55%;
    display: block;
    margin : 20px auto;
    outline-color:#B08BBB;
    // outline-style: inset;
    border: 2px solid #B08BBB;
    outline: 8px ridge #FF99D7;
    outline-offset: 15px;
    @media screen and (max-width: 900px) {
     
        width: 100%;
     
}
    
`;




    

