import React from "react";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <Logo></Logo>
      <div className={classes.links}>
        <Button type={"facebook"}></Button>
        <Button type={"twitter"}></Button>
        <Button type={"linkedin"}></Button>
        <Button type={"instagram"}></Button>
      </div>
    </div>
  );
};

export default Header;
