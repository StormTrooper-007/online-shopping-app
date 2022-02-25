import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../redux/store";
import { Link } from "react-router-dom";
import "../sass/SideBar.scss";

function SideBarShadow() {
  return <div className="shadow"></div>;
}

type Props = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SideBar({ sidebar, setSidebar }: Props) {
  function close() {
    setSidebar(!sidebar);
  }

  const { mood } = useSelector((state: rootState) => state.cart);

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
  };
  const linkStyleD = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <div
        className={mood ? `sidebar__container` : `sidebar__containerD`}
        onClick={close}
      >
        <ul className={mood ? `sidebar__list` : `sidebar__listD`}>
          <li>
            <Link to="/" style={mood ? linkStyle : linkStyleD}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/categories" style={mood ? linkStyle : linkStyleD}>
              CATEGORIES
            </Link>
          </li>
          <li>
            <Link to="/faq" style={mood ? linkStyle : linkStyleD}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact" style={mood ? linkStyle : linkStyleD}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <SideBarShadow />
    </div>
  );
}
