import React from "react";
// moment is a react component that formats dates
import moment from "moment";

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      //   searchtype can be "Event, "City", or "Party"
      searchType: "Event"
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidMount() {
    this.defaultSFSearch();
  }

  defaultSFSearch() {
    let d = moment().format("YYYY-MM-DD");
    d = moment(d)
      .add(1, "days")
      .format("YYYY-MM-DD");
    let tomorrow = moment(d)
      .add(1, "days")
      .format("YYYY-MM-DD");
    this.props.searchCities("SanFrancisco", d, tomorrow);
  }

  handleSubmit(e) {
    e.preventDefault();
    let d = moment().format("YYYY-MM-DD");
    d = moment(d)
      .add(1, "days")
      .format("YYYY-MM-DD");
    let tomorrow = moment(d)
      .add(1, "days")
      .format("YYYY-MM-DD");
    if (this.state.searchType == "Event") {
      this.props.searchArtist(this.state.query);
    } else {
      this.props.searchCities(this.state.query, d, tomorrow);
      this.props.clearResults();
    }
  }

  handleFocus(event) {
    event.target.select();
  }

  handleUpdate(property) {
    let that = this;
    return e => {
      that.props.geocoder(e.target.value);
      that.props.searchText(e.target.value);
      that.setState({
        [property]: e.target.value
      });
    };
  }

  render() {
    return (
      <form className="search__form" onSubmit={this.handleSubmit}>
        <div className="search__comp">
          <input
            onChange={this.handleUpdate("query")}
            onClick={this.handleFocus}
            value={this.props.text}
            type="text"
            placeholder={`Search for ${this.state.stateType}`}
            className="search__input"
          />
          <button className="headerSearch__submit submit sc-ir" type="submit" />
        </div>
      </form>
    );
  }
}
