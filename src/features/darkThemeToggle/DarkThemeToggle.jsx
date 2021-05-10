import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  selectMode
} from './darkThemeToggleSlice'; // actions
// import styles from './DarkThemeToggle.module.css';

function DarkThemeToggle() {
  const darkThemeEnabled = useSelector(selectMode);
  const dispatch = useDispatch();

  return (
    <p>
      <input
        type="checkbox"
        checked={darkThemeEnabled}
        onChange={() => dispatch(toggle())}
      ></input>
      <span>Use Dark Theme</span>
    </p>
  );
};

export default DarkThemeToggle;