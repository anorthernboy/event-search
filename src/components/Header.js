import React, { Component } from "react";
import { Link } from "@reach/router";
import "../style/Header.css";

import Search from "../components/Search";
import logo from "../assets/skiddle-logo-white-landscape.png";

class Header extends Component {
  render() {
    const { fetchEventsByKeyword } = this.props;
    return (
      <div className="Header">
        <Link to={`/`}>
          <img src={logo} alt="skiddle logo" className="logo" />
        </Link>

        <Search fetchEventsByKeyword={fetchEventsByKeyword} />
      </div>
    );
  }
}

export default Header;
