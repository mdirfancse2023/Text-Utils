import React from "react";

import PropTypes from "prop-types";
export default function Footer(props) {
  return (
    <footer className={`text-center bg-${props.mode} fixed-bottom`}>
      <div
        className={`text-center p-3 text-${props.tmode}`}>
        © 2023 Copyright : Md Irfan
      </div>
    </footer>
  );
}
