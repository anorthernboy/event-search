import React, { Component } from "react";
import { navigate } from "@reach/router";
import "../style/Search.css";

class Search extends Component {
  state = {
    keywords: ""
  };

  render() {
    console.log(this.state.keywords);

    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            name="keyword"
            placeholder="search for events"
            value={this.state.keywords}
            onChange={this.handleChange}
            className="search-input"
          />
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ keywords: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { fetchEventsByKeyword } = this.props;
    const keyword = this.state.keywords.replace(" ", "%20").toLowerCase();
    fetchEventsByKeyword(keyword);
    navigate("/");
  };
}

export default Search;
