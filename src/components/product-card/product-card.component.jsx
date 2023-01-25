import { useContext ,useState} from 'react';
import './product-card.styles.scss';
import Button from '../button/button.component';
import ModalOpen from '../modal/modal.component.jsx';
import { CartContext } from '../../contexts/cart.context';


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => addItemToCart(product);
  const[modalIsOpen,setModalIsOpen]=useState(false);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}  onClick ={()=> setModalIsOpen(true)}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addToCart}>Add to cart</Button>
      <ModalOpen modalIsOpen={modalIsOpen}  name={name} imageUrl={imageUrl} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default ProductCard;

