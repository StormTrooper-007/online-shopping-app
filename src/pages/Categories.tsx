import "../sass/ProductCart.scss";
import "../sass/Categories.scss";
import { Product } from "../redux/types/fetchAPITypes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { groupItems } from "../functions/groupItems";
import { rootState } from "../redux/store";

type Props = {
  products: Product[];
};

export function Categories({ products }: Props) {
  let productItems: ProductItems = groupItems(products, "category");

  type ProductItems = {
    electronics: Product[];
    jewelery: Product[];
    mensClothing: Product[];
    womensClothing: Product[];
  };

  const navigate = useNavigate();
  const { mood } = useSelector((state: rootState) => state.cart);

  return (
    <>
      <div>
              <button
                className={mood ? `cart__button` : `cart__buttonD`}
                onClick={() => navigate("/")}
              >
                back home
              </button>
            </div>
      {Object.entries(productItems).map(
        ([category, productItems], index: number) => (
          <>
            <div key={index}>
              <h1>{category.toLocaleUpperCase()}</h1>
              {productItems.map((item: Product) => (
                <div className={mood ? `card` : `cardD`} key={item.title}>
                  <img className="card__image" src={item.image} alt="product" />
                  <div className="card__content">
                    <h2>{item.title}</h2>
                    <button
                      className={mood ? `cart__button` : `cart__buttonD`}
                      onClick={() => navigate(`/details/${item.title}`)}
                    >
                      view item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )
      )}
    </>
  );
}
