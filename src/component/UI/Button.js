import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  let iconName;
  let link;
  let backgroundColorValue;

  if (props.type) {
    switch (props.type) {
      case "facebook":
        iconName = `fa fa-facebook`;
        link = "google.com";
        backgroundColorValue = "#3b5998";
        break;
      case "twitter":
        iconName = "fa fa-twitter";
        link = "google.com";
        backgroundColorValue = "#00acee";
        break;

      case "linkedin":
        iconName = "fa fa-linkedin";
        link = "google.com";
        backgroundColorValue = "#0e76a8";
        break;

      case "instagram":
        iconName = "fa fa-instagram";
        link = "google.com";
        backgroundColorValue = "#bc2a8d";
        break;
      default:
        iconName = "default";
        link = "google.com";
    }
  }

  return (
    <a
      className={`${classes.button} ${iconName}`}
      href={link}
      style={{ backgroundColor: backgroundColorValue }}
    >
      {props.children}
    </a>
  );
};

export default Button;
