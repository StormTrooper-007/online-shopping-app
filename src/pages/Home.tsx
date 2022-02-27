import { Product } from "../redux/types/fetchAPITypes";
import { useNavigate } from "react-router-dom";
import "../sass/ProductCart.scss";
import { useSelector } from "react-redux";
import { rootState } from "../redux/store";
import {convertEur} from "../functions/currency";

type Props = {
  products: Product[];
};

export function Home({ products }: Props) {
  const navigate = useNavigate();
  let { mood } = useSelector((state: rootState) => state.cart);


  return (
      <>
      {products.map((item, index: number) => (
        <div className={mood ? `card` : `cardD`} key={item.id}>
          <img className="card__image" src={item.image} alt="product" />
          <div className="card__content">
            <h2>{item.title}</h2>
            <div>Price: {convertEur(item.price)}</div>
            <button
              className={mood ? `card__button` : `card__buttonD`}
              onClick={() => navigate(`/details/${item.id}`)}
            >
              view item
            </button>
          </div>
        </div>
      ))}
      </>
)}
    

