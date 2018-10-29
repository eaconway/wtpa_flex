import React from 'react';
import { Link } from 'react-router-dom';
import "./create_party.css";

class CreateParty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            lat: '',
            lng: '',
            partyType: '',
            musicType: '',
            feel: '',
            dress: '',
            orientation: '',
            eventDate: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field){
        return e => this.setState({ [field]: e.target.value})
    }

    handleSubmit(e){    
        e.preventDefault();

        console.log('This should submit here');
        this.props.createParty(this.state)
            .then(() => this.props.history.push('/'))
    }
    render(){
        return <div className="create-party-sidebar">
            <form className="create-party-section" onSubmit={this.handleSubmit}>
              <h1 className='cp-header'>Create Party</h1>
              <label>
                Title:
                <input type="text" value={this.state.title} onChange={this.update("title")} className="cp-form-input" />
              </label>

              <label>
                Event Date:
                <input type="date" value={this.state.eventDate} onChange={this.update("eventDate")} className="cp-form-input" />
              </label>

              <label>
                Event Description:
                <textarea value={this.state.description} onChange={this.update("description")} className="cp-form-textarea" />
              </label>

              <label>
                Address:
                <input type="text" value={this.state.address} onChange={this.update("address")} className="cp-form-input" />
              </label>

              <label>
                City:
                <input type="text" value={this.state.city} onChange={this.update("city")} className="cp-form-input" />
              </label>

              <label>
                State:
                <input type="text" value={this.state.state} onChange={this.update("state")} className="cp-form-input" />
              </label>

              <label>
                Zipcode:
                <input type="text" value={this.state.zipcode} onChange={this.update("zipcode")} className="cp-form-input" />
              </label>

              <label>
                Latitude:
                <input type="text" value={this.state.lat} onChange={this.update("lat")} className="cp-form-input" />
              </label>

              <label>
                Longitude:
                <input type="text" value={this.state.lng} onChange={this.update("lng")} className="cp-form-input" />
              </label>

              <label>
                Select music type:
                <select type="text" value={this.state.musicType} onChange={this.update("musicType")} className="cp-form-input">
                  <option>-- SELECT ONE --</option>
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
              </label>

              <label>
                Select party type:
                <select type="text" value={this.state.partyType} onChange={this.update("partyType")} className="cp-form-input">
                  <option>-- SELECT ONE --</option>
                  <option>Bar</option>
                  <option>DJ/Club</option>
                  <option>Casual</option>
                  <option>Game Night</option>
                </select>
              </label>

              <label>
                Select party feel:
                <select type="text" value={this.state.feel} onChange={this.update("feel")} className="cp-form-input">
                  <option>-- SELECT ONE --</option>
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
                  <option>Rawdy</option>
                  <option>Sad</option>
                  <option>Sexy</option>
                  <option>Spacey</option>
                  <option>Trippy</option>
                </select>
              </label>

              <label>
                Select party dress:
                <select type="text" value={this.state.dress} onChange={this.update("dress")} className="cp-form-input">
                  <option>-- SELECT ONE --</option>
                  <option>None</option>
                  <option>Cocktail</option>
                  <option>Business Casual</option>
                  <option>Business Formal</option>
                </select>
              </label>

              <label>
                Select party orientation:
                <select type="text" value={this.state.orientation} onChange={this.update("orientation")} className="cp-form-input">
                  <option>-- SELECT ONE --</option>
                  <option>Cis </option>
                  <option>LGBTQ</option>
                </select>
              </label>

              <input type="submit" value="SUBMIT" className="cp-submit" />
            </form>
            <div>
              <div className="middle-bar">
                <div onClick={() => this.leftSidebarChange("info")} className="info-rectangle">
                  <i className="fas fa-info-circle" />
                </div>
                <div onClick={() => this.leftSidebarChange("create")} className="create-rectangle">
                  <i className="fas fa-marker" />
                </div>
              </div>
              <Link className="create-page-close-sidebar" to="/">
                <div className="create-white-middle-bar-toggle">
                  <i className="fas fa-angle-left" />
                </div>
              </Link>
            </div>
          </div>;
    }
};

export default CreateParty;