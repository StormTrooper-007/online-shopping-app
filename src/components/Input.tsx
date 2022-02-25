import React, { ChangeEvent } from "react";
import "../sass/Input.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { query } from "../redux/actions/queryAction";
import { useDispatch } from "react-redux";

export function Input() {
  const dispatch = useDispatch();

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    dispatch(query(e.target.value));
  }

  return (
    <div className="input__container">
      <SearchRoundedIcon />
      <input type="text" className="input" onChange={handleChange} />
    </div>
  );
}
