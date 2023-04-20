import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggle } from "../../store/uiSLice";
import { selectTotalQuantity } from "../../store/cartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(selectTotalQuantity);

  const toggleCartHandler = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
