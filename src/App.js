import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import {
  selectUICart,
  selectUINotification,
  showNotification,
} from "./store/uiSLice";
import { selectCart } from "./store/cartSlice";
import React, { useEffect } from "react";
import Notification from "./components/UI/Notification";

function App() {
  const isCartVisible = useSelector(selectUICart);
  const cart = useSelector(selectCart);
  const notification = useSelector(selectUINotification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const res = await fetch(
        "https://react-http-7e647-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!res.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data successfully",
        })
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
