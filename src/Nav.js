import React from "react";
import { Link, useRoutes } from "react-router-dom";
import Routes from "./Routes1";

function Nav() {
  return (
    <div>
      <Link to="a">A</Link>
      {/* <Link to="achild">Achild</Link> */}
      {/* <br />
      <Link to="/b">B</Link>
      <br />
      <Link to="/c">C</Link>
      <br />
      <Link to="/d">D</Link> */}
      <br />
    </div>
  );
}

export default Nav;
