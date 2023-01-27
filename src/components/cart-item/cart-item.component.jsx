import {CartItemContainer,Img,ItemDetails} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span> {name} </span>
        <span > {quantity} x ${price} </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;