import "../sass/Cart.scss";
import "../sass/ProductCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../redux/store";
import { Product } from "../redux/types/fetchAPITypes";
import { useNavigate } from "react-router-dom";
import { deleteItem, clearCart } from "../redux/actions/addToCartActions";



export function Cart() {
  const dispatch = useDispatch();
  let {mood, cart} = useSelector((state: rootState) => state.cart);
  let {sidebar} = useSelector((state: rootState) => state.sidebar);
  
  const navigate = useNavigate();

  type Cart = {
    product: Product;
    qty: number;
  };

  let newCart: Cart[]=cart;

    function totalProducts():number{
    let total:number=0;
    for(let i=0; i < newCart.length; ++i){
      total += newCart[i].qty;
    }
    return total;
  }

  return (
    <>
      {newCart.length === 0 ? (
        <>
        <div className="empty__cart__message"> Your cart is empty </div>
        <button
        className={mood ? `cart__button` : `cart__buttonD`}
        onClick={() => navigate("/")}
        >back to home</button>
        </>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              className={mood ? `cart__button` : `cart__buttonD`}
              onClick={() => navigate("/")}
            >
              back
            </button>
            <button
              className={mood ? `cart__button` : `cart__buttonD`}
              onClick={() => navigate("/checkout")}
            >
              {" "}
              Proceed to checkout{" "}
            </button>
            <button
              className={mood ? `cart__button` : `cart__buttonD`}
              onClick={() => dispatch(clearCart())}
            >
              {" "}
              clear cart{" "}
            </button>
          </div>
          <div style={{marginLeft:"15px", fontWeight:"bold"}}>Total number of products in cart: {totalProducts()} </div>
          {newCart.map((item) => (
            <div key={item.product.id}>
            <div className={mood ? `card` : `cardD`}>
              <img
                className="card__image"
                src={item.product.image}
                alt="product"
              />
              <div className="card__content">
                <h2>{item.product.title}</h2>
                <div>Quantity: {item.qty}</div>
              </div>
              <button
                className={mood ? `cart__button` : `cart__buttonD`}
                onClick={() => dispatch(deleteItem(item.product.title))}
              >
                delete
              </button>
            </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}


