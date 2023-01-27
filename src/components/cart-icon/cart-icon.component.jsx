import {CartIconContainer,ItemCount,ShoppingIcon} from './cart-icon.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.js';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick = {toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;