import { useState } from "react";
import { useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { rootState } from "../redux/store";
import "../sass/Checkout.scss";
import { convertEur } from "../functions/currency";
import { useNavigate } from "react-router-dom";
import { Product } from "../redux/types/addToCartTypes";

export function Checkout() {
  const [pay, setPay] = useState<boolean>(false);

  let { cart, mood } = useSelector((state: rootState) => state.cart);
  let navigate = useNavigate();

  type Cart = {
    product: Product;
    qty: number;
  };

  let newCart: Cart[] = cart;

  function totalPrice(arr: Cart[]): number {
    let totalPrice: number = 0;
    arr.map(function (item) {
      totalPrice += item.qty * item.product.price;
      return totalPrice;
    });
    return totalPrice;
  }

  function handlePayment() {
    setPay(true);
    newCart.splice(0, newCart.length);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <div className="checkout__container">
      {pay ? (
        <div className="checkout__container_message">
          <p>Thanks for choosing us, your order will arrive 1-2 working days</p>
          <div>
            <ClearIcon />
          </div>
        </div>
      ) : (
        <>
          <div className="checkout__image__container">
            {newCart.map((item) => (
              <div key={item.product.title}>
                <img
                  src={item.product.image}
                  alt="product"
                  className="checkout__image"
                />
                <div>{item.product.title}</div>
                <div>{item.product.price}</div>
                <div> x {item.qty} </div>
              </div>
            ))}
          </div>
          <div className="checkout__leftside">
            <h3>Total Price:{convertEur(totalPrice(newCart))} </h3>
            <button
              className={mood ? `checkout__button` : `checkout__buttonD`}
              onClick={handlePayment}
            >
              Pay
            </button>
          </div>
        </>
      )}
    </div>
  );
}
