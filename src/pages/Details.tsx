import "../sass/Details.scss";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../redux/types/fetchAPITypes";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { rootState } from "../redux/store";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addQty,
  subQty
} from "../redux/actions/addToCartActions";
import {convertEur} from "../functions/currency";

type Props={
  products:Product[]
}


export function Details({products}:Props) {
  function getDetails(number: number): any {
    let result: any = {};
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === number) {
        result = products[i];
      }
    }
    return result;
  }


  let params = useParams<string>();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let details: Product = getDetails(parseInt(`${params.productId}`, 10));
  const { mood, qty } = useSelector((state: rootState) => state.cart);
  return (
    <>
      <button
        className={mood ? `details__button` : `details__buttonD`}
        onClick={() => navigate("/")}
      >
        back
      </button>
      <div
        className={mood ? `details__container` : `details__containerD`}
        key={params.id}
      >
        <img className="details__image" src={details.image} alt="product" />
        <div className="details__content">
          <h2>{details.title}</h2>
          <div>{details.description}</div>
          <p>{details.category}</p>
          <p>{convertEur(details.price)}</p>
          <p>count in stock: {details.rating.count}</p>
          <div>
            <Typography component="legend">
              Rating:{details.rating.rate}
            </Typography>
            <Rating name="read-only" value={details.rating.rate} readOnly />
          </div>
          <div className="cart__quantity">
            <button
              className={
                mood ? "cart__quantity__button" : "cart__quantity__buttonD"
              }
              disabled={qty === 1 ? true : false}
              onClick={() => dispatch(subQty())}
            >
              {" "}
              <RemoveIcon />{" "}
            </button>
            <div style={{ margin: "10px" }}> Qty:{qty}</div>
            <button
              className={
                mood ? "cart__quantity__button" : "cart__quantity__buttonD"
              }
              onClick={() => dispatch(addQty())}
            >
              {" "}
              <AddIcon />{" "}
            </button>
          </div>
        </div>
        <button
          className={
            mood
              ? `card__add__to__cart__button`
              : `card__add__to__cart__buttonD`
          }
          onClick={() => dispatch(addToCart(details, qty))}
        >
          <FavoriteRoundedIcon sx={{ color: "red" }} /> add to cart
        </button>
      </div>
    </>
  );
}
