import React from 'react';
import './chatbox.css';

class LeftSidebar extends React.Component {
  render() {
    let infoSection = <div className='left-homepage-sidebar'>
      <div className='toggle-info-create'>
        <div className='info-rectangle'></div>
        <div className='create-rectangle'></div>
      </div>
      <div className='left-homepage-sidebar-inner'>
      <div className='party-title-wrapper'>
        <h1>Party Title Testing</h1>
        <span>18% <i className="far fa-thumbs-up"></i></span>
        <span>21% <i className="far fa-thumbs-down"></i></span>
      </div>
      <div className='party-icon-bar'>
        <img className='emoji-icon' src={require('../../images/mood/637646.png')} />
        <img className='emoji-icon' src={require('../../images/theme/673890.png')} />
        <img className='emoji-icon' src={require('../../images/music/1184619.png')} />
        <img className='emoji-icon' src={require('../../images/food/931959.svg')} />
        <img className='emoji-icon' src={require('../../images/drugs/991884.png')} />
      </div>
      <div className='five-star'>
        <img className='five-star-icons' src={require('../../images/header/149765.png')} />
        <img className='five-star-icons' src={require('../../images/header/149765.png')} />
        <img className='five-star-icons' src={require('../../images/header/149765.png')} />
        <img className='five-star-icons' src={require('../../images/header/149765.png')} />
        <img className='five-star-icons' src={require('../../images/header/149765.png')} />
      </div>
      <div className='left-sidebar-picture-section'>
        <img />
        <img />
      </div>
      <a>See more</a>
      </div>
    </div>;
    return (
      <div className='left-homepage-sidebar'>
        <div className='toggle-info-create'>
          <div className='info-rect'></div>
          <div className='create-rect'></div>
        </div>
        <div className='left-homepage-sidebar-inner'>
          <div className='five-star'>
            <img className='five-star-icons' src={require('../../images/header/149765.png')} />
            <img className='five-star-icons' src={require('../../images/header/149765.png')} />
            <img className='five-star-icons' src={require('../../images/header/149765.png')} />
            <img className='five-star-icons' src={require('../../images/header/149765.png')} />
            <img className='five-star-icons' src={require('../../images/header/149765.png')} />
          </div>
          <div className='select-dropdown'>
            <span>Select the mood:</span>
            <i className="fas fa-caret-down"></i>
            <select className='mood-dropdown'>
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
          <div className='select-dropdown'>
            <span>Select the music:</span>
            <i className="music-caret fas fa-caret-down"></i>
            <select className='mood-dropdown'>
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
          
          <div className='left-sidebar-picture-section'>
            <img />
            <img />
          </div>
          <a>See more</a>
        </div>
      </div>
    );
  }
}

export default LeftSidebar;