// import React from 'react'
import img from "./Error.svg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="align">
      <img src={img} alt="" className="img" />
      <h3>ohh!</h3>
      <p>we cannot seem to find page you are looking for</p>
      <Link to="/">back home</Link>
    </div>
  );
};

export default ErrorPage;
