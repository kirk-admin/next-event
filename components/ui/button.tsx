import Link from "next/link";
import React from "react";
import classes from "./button.module.css";

const Button = (props: any) => {
  if (props.link) {
    return (
      <Link className={classes.btn} href={props.link}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
};

export default Button;
