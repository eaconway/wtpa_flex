import React from "react";
import ChatRoom from "../chat/chat_room";
import "./chatbox.css";
import { Link } from "react-router-dom";
// import StarRatings from "react-star-ratings";
import { Zoom } from "react-slideshow-image";
import Slider from "react-slick"; //TODO: multi-image-slider https://stackoverflow.com/a/47050930/2734863

class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneStar: "",
      twoStar: "",
      threeStar: "",
      fourStar: "",
      fiveStar: "",
      infoSidebar: "info",
      loaded: false
    };
    this.rate = this.rate.bind(this);
    this.leftSidebarChange = this.leftSidebarChange.bind(this);
  }

  componentDidMount() {
    console.log("about to request party");
    this.props
      .requestParty(this.props.match.params.id)
      .then(() => this.setState({ loaded: true }));
  }

  leftSidebarChange(side) {
    if (side === "info") {
      this.setState({ infoSidebar: "create" });
    } else {
      this.setState({ infoSidebar: "info" });
    }
  }

  rate(star) {
    if (star === "one-star") {
      this.setState({
        oneStar: "green",
        twoStar: "",
        threeStar: "",
        fourStar: "",
        fiveStar: ""
      });
    } else if (star === "two-star") {
      this.setState({
        oneStar: "green",
        twoStar: "green",
        threeStar: "",
        fourStar: "",
        fiveStar: ""
      });
    } else if (star === "three-star") {
      this.setState({
        oneStar: "green",
        twoStar: "green",
        threeStar: "green",
        fourStar: "",
        fiveStar: ""
      });
    } else if (star === "four-star") {
      this.setState({
        oneStar: "green",
        twoStar: "green",
        threeStar: "green",
        fourStar: "green",
        fiveStar: ""
      });
    } else {
      this.setState({
        oneStar: "green",
        twoStar: "green",
        threeStar: "green",
        fourStar: "green",
        fiveStar: "green"
      });
    }
  }

  render() {
    if (this.state.loaded && this.props.opinion) {
      let currentUser =
        this.props.currentUser === undefined ? null : this.props.currentUser.id;

      let chatRoom =
        this.props.party === undefined ? (
          ""
        ) : (
          <ChatRoom
            partyId={this.props.party._id}
            currentUserId={currentUser}
          />
        );

      const zoomOutProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
      };
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      let currentSection =
        this.state.infoSidebar === "info" ? (
          <div className="left-sidebar">
            <div className="left-homepage-sidebar">
              <Link className="close-sidebar" to="/">
                X
              </Link>
              <div className="toggle-info-create">
                <div className="info-rectangle" />
                <div
                  onClick={() => this.leftSidebarChange("info")}
                  className="create-rectangle"
                />
              </div>
              <div className="left-homepage-sidebar-inner">
                <div className="party-title-wrapper">
                  <h1>{this.props.party.title}</h1>
                </div>

                <div className="star-ratings">
                  {/* <StarRatings
                    rating={
                      this.props.opinion.avgRating
                        ? this.props.opinion.avgRating
                        : 0
                    }
                    starRatedColor="yellow"
                    starDimension={"20px"}
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name="rating"
                  /> */}
                </div>
                <div className="party-icon-bar">
                  <img
                    className="emoji-icon"
                    src={require("../../images/mood/637646.png")}
                  />
                  <img
                    className="emoji-icon"
                    src={require("../../images/theme/673890.png")}
                  />
                  <img
                    className="emoji-icon"
                    src={require("../../images/music/1184619.png")}
                  />
                  <img
                    className="emoji-icon"
                    src={require("../../images/food/931959.svg")}
                  />
                  <img
                    className="emoji-icon"
                    src={require("../../images/drugs/991884.png")}
                  />
                </div>
                <div className="five-star">
                  <img
                    className="five-star-icons"
                    src={require("../../images/header/149765.png")}
                  />
                  <img
                    className="five-star-icons"
                    src={require("../../images/header/149765.png")}
                  />
                  <img
                    className="five-star-icons"
                    src={require("../../images/header/149765.png")}
                  />
                  <img
                    className="five-star-icons"
                    src={require("../../images/header/149765.png")}
                  />
                  <img
                    className="five-star-icons"
                    src={require("../../images/header/149765.png")}
                  />
                </div>
                <div className="see-more">See more</div>
              </div>
            </div>
            {chatRoom}
          </div>
        ) : (
          <div className="left-sidebar">
            <div className="left-homepage-sidebar">
              <div className="toggle-info-create">
                <div
                  onClick={() => this.leftSidebarChange("create")}
                  className="info-rect"
                />
                <div className="create-rect" />
              </div>
              <div className="left-create-homepage-sidebar-inner">
                <div className="five-star-section">
                  <span className="bold">Rate the party:</span>
                  <div className="form-five-star">
                    <i
                      onClick={() => this.rate("one-star")}
                      className={`${this.state.oneStar} fas fa-star`}
                    />
                    <i
                      onClick={() => this.rate("two-star")}
                      className={`${this.state.twoStar} fas fa-star`}
                    />
                    <i
                      onClick={() => this.rate("three-star")}
                      className={`${this.state.threeStar} fas fa-star`}
                    />
                    <i
                      onClick={() => this.rate("four-star")}
                      className={`${this.state.fourStar} fas fa-star`}
                    />
                    <i
                      onClick={() => this.rate("five-star")}
                      className={`${this.state.fiveStar} fas fa-star`}
                    />
                  </div>
                </div>
                <div className="select-dropdown">
                  <span className="bold">Select the mood:</span>
                  <i className="fas fa-caret-down" />
                  <select className="mood-dropdown">
                    <option>Aggressive</option>
                    <option>Angry</option>
                    <option>Calm</option>
                    <option>Cheesy</option>
                    <option>Celebratory</option>
                    <option>Confident</option>
                    <option>Dark</option>
                    <option>Energetic</option>
                    <option>Fancy</option>
                    <option>Funky</option>
                    <option>Happy</option>
                    <option>Introspective</option>
                    <option>Mellow</option>
                    <option>Pumped-up</option>
                    <option>Romantic</option>
                    <option>Rpwdy</option>
                    <option>Sad</option>
                    <option>Sexy</option>
                    <option>Spacey</option>
                    <option>Trippy</option>
                  </select>
                </div>
                <div className="select-dropdown">
                  <span className="bold">Select the music:</span>
                  <i className="music-caret fas fa-caret-down" />
                  <select className="mood-dropdown">
                    <option>Alternative/Indie</option>
                    <option>Blues</option>
                    <option>Bollywood & Indian</option>
                    <option>Children's Music</option>
                    <option>Christian</option>
                    <option>Christmas</option>
                    <option>Classical</option>
                    <option>Country</option>
                    <option>Dance & Electronic</option>
                    <option>Folk & Americana</option>
                    <option>Hip-Hop/Rap</option>
                    <option>Jazz</option>
                    <option>K-Pop</option>
                    <option>Latin</option>
                    <option>Metal</option>
                    <option>New Age</option>
                    <option>Oldies</option>
                    <option>Opera</option>
                    <option>Pop</option>
                    <option>Punk</option>
                    <option>R&B</option>
                    <option>Reggae</option>
                    <option>Rock</option>
                    <option>Singer-Songwriter</option>
                    <option>Soul</option>
                    <option>Soundtracks</option>
                    <option>Easy Listening</option>
                    <option>World</option>
                  </select>
                </div>
                <div className="select-dropdown">
                  <span className="bold">Drug of choice:</span>
                  <i className="drug-caret fas fa-caret-down" />
                  <select className="mood-dropdown">
                    <option>Ecstasy</option>
                    <option>Marijuana</option>
                  </select>
                </div>
                <div className="select-dropdown">
                  <span className="bold">Food & Drink of choice:</span>
                  <i className="food-drink-caret fas fa-caret-down" />
                  <select className="mood-dropdown">
                    <option>Beer</option>
                    <option>Champagne</option>
                    <option>Cocktail</option>
                    <option>Cupcakes</option>
                    <option>Martini</option>
                    <option>Pizza</option>
                    <option>Wine</option>
                  </select>
                </div>
                <div className="select-dropdown">
                  <span className="bold">Type of party:</span>
                  <i className="type-party-caret fas fa-caret-down" />
                  <select className="mood-dropdown">
                    <option>Bachelor</option>
                    <option>Bachelorette</option>
                    <option>BBQ</option>
                    <option>Birthday</option>
                    <option>Casino</option>
                    <option>Christmas</option>
                    <option>Cocktail</option>
                    <option>Costume</option>
                    <option>Dance</option>
                    <option>Dinner</option>
                    <option>Easter</option>
                    <option>Fourth of July</option>
                    <option>Frat</option>
                    <option>Game Day</option>
                    <option>Halloween</option>
                    <option>Magic Show</option>
                    <option>New Year's Eve</option>
                    <option>Office</option>
                    <option>Pinata</option>
                    <option>Pool</option>
                    <option>Tea</option>
                    <option>Thanksgiving</option>
                    <option>Valentine's Day</option>
                    <option>Wedding</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      console.log("this is the party on the show page", this.props.party);

      return <div>{currentSection}</div>;
    } else {
      return <div />;
    }
  }
}

export default LeftSidebar;
