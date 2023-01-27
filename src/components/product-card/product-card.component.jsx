import { useContext ,useState} from 'react';
import {Footer,Name,PictureCardContainer,Price,ButtonProductCard} from './product-card.styles';
import {BUTTON_TYPE_CLASSES} from '../button/button.component';
import ModalOpen from '../modal/modal.component.jsx';
import { CartContext } from '../../contexts/cart.context';


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => addItemToCart(product);
  const[modalIsOpen,setModalIsOpen]=useState(false);

  return (
    <PictureCardContainer>
      <img src={imageUrl} alt={`${name}`}  onClick ={()=> setModalIsOpen(true)}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ButtonProductCard buttonType= {BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>Add to cart</ButtonProductCard>
      <ModalOpen modalIsOpen={modalIsOpen}  name={name} imageUrl={imageUrl} setModalIsOpen={setModalIsOpen} />
    </PictureCardContainer>
  );
};

export default ProductCard;

