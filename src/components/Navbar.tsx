import "../sass/Navbar.scss";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Input } from "../components/Input";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { SideBar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../redux/store";
import { darkMood } from "../redux/actions/addToCartActions";
import { Product } from "../redux/types/addToCartTypes";
import { loadFromLocalStorage } from "../redux/store";

export function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let {mood} = useSelector((state: rootState) => state.cart);

  const productObject = loadFromLocalStorage();
  const cart = productObject.cart.cart
 
  type Cart = {
    product: Product;
    qty: number;
  };

  let newCart: Cart[] = cart;

  function handleChange(): void {
    dispatch(darkMood());
  }

  return (
    <>
      <nav>
        <div
          className="nav__icon"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <AppsRoundedIcon />
        </div>
        <div>
          <Input />
        </div>

        <div className="nav__cart__toggle">
          <div className="nav__cart" onClick={() => navigate("/cart")}>
            <LocalMallOutlinedIcon />{" "}
            <div className={mood ? `nav__cart__badge` : `nav__cart__badgeD`}>
              {newCart.length}
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
      {sidebar ? <SideBar sidebar={sidebar} setSidebar={setSidebar} /> : null}
      <Outlet />
    </>
  );
}
