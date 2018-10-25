import { connect } from "react-redux";
import Search from "./search";
import {
  searchText,
  searchArtist,
  searchCity,
  changeDate
} from "../../actions/events_actions";
import { geocoderQuery, clearResults } from "../../actions/map_actions";
import { searchType } from "../../actions/search_actions";

const mapStateToProps = state => {
  return {
    text: state.search,
    artistSearch: state.artist_search,
    error: state.errors.search
  };
};

const mapDispatchToProps = dispatch => ({
  searchArtist: artistName => dispatch(searchArtist(artistName)),
  searchCities: (cityName, date, tomorrow) =>
    dispatch(searchCity(cityName, date, tomorrow)),
  geocoder: query => dispatch(geocoderQuery(query)),
  changeDate: date => dispatch(changeDate(date)),
  searchText: text => dispatch(searchText(text)),
  clearResults: () => dispatch(clearResults()),
  searchType: type => dispatch(searchType(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
