import "../sass/Navbar.scss";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Input } from "../components/Input";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../redux/store";
import { darkMood } from "../redux/actions/addToCartActions";
import { sideBar } from "../redux/actions/sideBarActions";
import { Product } from "../redux/types/addToCartTypes";

export function Navbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let {mood, cart} = useSelector((state: rootState) => state.cart);

  type Cart = {
    product: Product;
    qty: number;
  };

  let newCart: Cart[] = cart;

  function handleChange(): void {
    dispatch(darkMood());
  }

  function totalProducts():number{
    let total:number=0;
    for(let i=0; i < newCart.length; ++i){
      total += newCart[i].qty;
    }
    return total;
  }

  return (
    <>
      <nav>
        <div
          className="nav__icon"
          onClick={() => dispatch(sideBar())}
        >
          <AppsRoundedIcon/>
        </div>
        <div>
          <Input/>
        </div>
        <div className="nav__cart__toggle">
          <div className="nav__cart" onClick={() => navigate("/cart")}>
            <LocalMallOutlinedIcon />{" "}
            <div className={mood ? `nav__cart__badge` : `nav__cart__badgeD`}>
              {totalProducts()}
            </div>
          </div>
          <div className="nav__toggle">
            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    checked={!mood}
                    onChange={handleChange}
                  />
                }
                label=""
              />
            </FormGroup>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
