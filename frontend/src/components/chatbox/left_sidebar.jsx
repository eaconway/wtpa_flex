import React from 'react';
import ChatRoom from '../chat/chat_room';
import './chatbox.css';

class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneStar: '',
      twoStar: '',
      threeStar: '',
      fourStar: '',
      fiveStar: '',
      infoSidebar: 'info'
    };
    this.rate = this.rate.bind(this);
    this.leftSidebarChange = this.leftSidebarChange.bind(this);
  }

  componentDidMount(){
    this.props.requestParty(this.props.match.params.partyId);
  }

  leftSidebarChange(side) {
    if (side === 'info') {
      this.setState({infoSidebar: 'create'});
    } else {
      this.setState({infoSidebar: 'info'});
    }
  }

  rate(star) {
    if (star === 'one-star') {
      this.setState({oneStar: 'green', twoStar: '', threeStar: '', fourStar: '', fiveStar: ''});
    } else if (star === 'two-star') {
      this.setState({oneStar: 'green', twoStar: 'green', threeStar: '', fourStar: '', fiveStar: ''});
    } else if (star === 'three-star') {
      this.setState({oneStar: 'green', twoStar: 'green', threeStar: 'green', fourStar: '', fiveStar: ''});
    } else if (star === 'four-star') {
      this.setState({oneStar: 'green', twoStar: 'green', threeStar: 'green', fourStar: 'green', fiveStar: ''});
    } else {
      this.setState({oneStar: 'green', twoStar: 'green', threeStar: 'green', fourStar: 'green', fiveStar: 'green'});
    }
  }

  render() {
    let currentSection = this.state.infoSidebar === 'info' ? (
    <div className='left-homepage-sidebar'>
      <div className='toggle-info-create'>
        <div className='info-rectangle'></div>
        <div onClick={() => this.leftSidebarChange('info')} className='create-rectangle'></div>
      </div>
      <div className='left-homepage-sidebar-inner'>
        <div className='party-title-wrapper'>
          <h1>Party Title Testing</h1>
        </div>
        <div className='thumbs-up-thumbs-down'>
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
      <div className='chatbox'>
        <div className='chat-session'>
          <div className='each-user'><span>PartyAnimal: </span><p>Yoyoyo! What is happenin?</p></div>
        </div>
        <div className='chatbox-box'>
          <textarea></textarea>
          <button>CHAT</button>
        </div>
      </div>
    </div>
    ) : (
      <div className='left-homepage-sidebar'>
        <div className='toggle-info-create'>
          <div onClick={() => this.leftSidebarChange('create')} className='info-rect'></div>
          <div className='create-rect'></div>
        </div>
        <div className='left-create-homepage-sidebar-inner'>
          <h1>Party Survey</h1>
          <div className='five-star-section'>
            <span className='bold'>Rate the party:</span>
            <div className='form-five-star'>
              <i onClick={() => this.rate('one-star')} className={`${this.state.oneStar} fas fa-star`}></i>
              <i onClick={() => this.rate('two-star')} className={`${this.state.twoStar} fas fa-star`}></i>
              <i onClick={() => this.rate('three-star')} className={`${this.state.threeStar} fas fa-star`}></i>
              <i onClick={() => this.rate('four-star')} className={`${this.state.fourStar} fas fa-star`}></i>
              <i onClick={() => this.rate('five-star')} className={`${this.state.fiveStar} fas fa-star`}></i>
            </div>
          </div>
          <div className='select-dropdown'>
            <span className='bold'>Select the mood:</span>
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
            <span className='bold'>Select the music:</span>
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
          <div className='select-dropdown'>
            <span className='bold'>Food & Drink of choice:</span>
            <i className="food-drink-caret fas fa-caret-down"></i>
            <select className='mood-dropdown'>
              <option>Beer</option>
              <option>Champagne</option>
              <option>Cocktail</option>
              <option>Cupcakes</option>
              <option>Martini</option>
              <option>Pizza</option>
              <option>Wine</option>
            </select>
          </div>
          <div className='select-dropdown'>
            <span className='bold'>Type of party:</span>
            <i className="type-party-caret fas fa-caret-down"></i>
            <select className='mood-dropdown'>
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
    );
    let currentUser = this.props.currentUser === undefined ? null : this.props.currentUser.id

    let chatRoom = this.props.party === undefined ? '' : (
      <ChatRoom partyId={this.props.party._id} currentUserId = {currentUser} />
    )
    console.log('this is the party on the show page', this.props.party)

    return (
      <div>
        {currentSection}
        {chatRoom}
      </div>
    );
  }
}

export default LeftSidebar;