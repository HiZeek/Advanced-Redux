import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import { selectCartTotalQuantity } from '../../store/cart-slice'

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(selectCartTotalQuantity)
  
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
