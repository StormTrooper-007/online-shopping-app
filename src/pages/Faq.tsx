import { useNavigate } from "react-router-dom";
import "../sass/Cart.scss";
import { rootState } from "../redux/store";
import { useSelector } from "react-redux";

export function Faq() {
  const navigate = useNavigate();
  const { mood } = useSelector((state: rootState) => state.cart);
  return (
    <div style={{ margin: "20px" }}>
      <div>
        <button
          className={mood ? `cart__button` : `cart__buttonD`}
          onClick={() => navigate("/")}
        >
          Back to home
        </button>
      </div>
      <h2>FAQ page</h2>
      <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
      <h4>
        Delectus rerum suscipit placeat explicabo maiores repudiandae,quia,
      </h4>
      <h4>
        deserunt autem officiis cum modi corrupti? Eligendi repudiandae sint{" "}
      </h4>
      <h4>temporibus vitae, voluptatibus veritatis distinctio!</h4>
    </div>
  );
}
