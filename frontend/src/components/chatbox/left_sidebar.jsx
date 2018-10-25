import React from 'react';

class LeftSidebar extends React.Component {
  render() {
    return (
      <div className='left-homepage-sidebar'>
        <div className='left-homepage-sidebar-inner'>
          <h1>Party Title Testing</h1>
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
        <div className='middle-homepage-sidebar-inner'>
          <div className='middle-homepage-sidebar-inner-inner'>
            <img />
            <div className='rating-name-section'>
              <span className='user-name-rating'>Anonymous</span>
              <span className='member-since'>Member since 2008</span>
            </div>
            <div className='five-star-rating-eachuser'>
              <img className='five-star-icons' src={require('../../images/header/149765.png')} />
              <img className='five-star-icons' src={require('../../images/header/149765.png')} />
              <img className='five-star-icons' src={require('../../images/header/149765.png')} />
              <img className='five-star-icons' src={require('../../images/header/149765.png')} />
              <img className='five-star-icons' src={require('../../images/header/149765.png')} />
            </div>
            <div className='user-rating-reviews'>
              <p>fheifhwofhwoefhoefhwohfefhwehfuefhwfhwofffwoufwoefhw</p>
            </div>
          </div>
          <div className='middle-homepage-sidebar-inner-inner'>
            <img />
            <div className='rating-name-section'>
              <span className='user-name-rating'>Anonymous</span>
              <span className='member-since'>Member since 2008</span>
            </div>
            <div className='five-star-rating-eachuser'>
              <img className='five-star-icons' src={require('../../images/header/149765.png')} />
              <img className='five-star-icons' src={require('../../images/header/149765.png')} />
              <img className='five-star-icons' src={require('../../images/header/149765.png')} />
              <img className='five-star-icons' src={require('../../images/header/149765.png')} />
              <img className='five-star-icons' src={require('../../images/header/149765.png')} />
            </div>
            <div className='user-rating-reviews'>
              <p>fheifhwofhwoefhoefhwohfefhwehfuefhwfhwofffwoufwoefhw</p>
            </div>
          </div>
          <div className='see-more-reviews'><span>See more reviews</span></div>
          
        </div>
      </div>
    );
  }
}

export default LeftSidebar;