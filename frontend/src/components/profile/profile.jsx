import React from 'react';
import './profile.css';

class Profile extends React.Component {

  // https://stackoverflow.com/a/20744868/2734863
  // String newFileName = "my-image";
  // File imageFile = new File("/users/victor/images/image.png");
  // GridFS gfsPhoto = new GridFS(db, "photo");
  // GridFSInputFile gfsFile = gfsPhoto.createFile(imageFile);
  // gfsFile.setFilename(newFileName);
  // gfsFile.save();

  componentDidMount(){
    this.props.fetchUser(this.props.currentUserId).then( res => {
      this.setState({ imagePreviewUrl: res.user.data.profilePicture });
    });
  }

  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '', online_url: '', displayNameInputField: 'hidden', displayEmailInputField: 'hidden', displayPhoneInputField: 'hidden', displayHobbyInputField: 'hidden', displayBioInputField: 'hidden', displayFacebookInputField: 'hidden', displayTwitterInputField: 'hidden', displayInstagramInputField: 'hidden', displayLinkedinInputField: 'hidden', displayYoutubeInputField: 'hidden', name: this.props.currentUser.name, email: this.props.currentUser.email, phone: this.props.currentUser.phone, thingsilove: this.props.currentUser.thingsilove, bio: this.props.currentUser.bio, facebook: this.props.currentUser.social.facebook, twitter: this.props.currentUser.social.twitter, instagram: this.props.currentUser.social.instagram, linkedin: this.props.currentUser.social.linkedin, youtube: this.props.currentUser.social.youtube };
    this._handleProfilePicChange = this._handleProfilePicChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.imageExists = this.imageExists.bind(this);
    this.updateProfileField = this.updateProfileField.bind(this);
  }

  imageExists(url) {
    var image = new Image();
    image.src = url;
    if (!image.complete) {
      return false;
    }
    else if (image.height === 0) {
      return false;
    }
    return true;
  }

  _handleProfilePicChange(e) {
    e.preventDefault();
    // this.setState({ online_url: "" });
    let reader = new FileReader();
    let file = e.target.files[0];
    let that = this;
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
      that.props.updateUser({
        id: that.props.currentUserId,
        profilePicture: that.state.imagePreviewUrl
      });
    };

    reader.readAsDataURL(file);
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  _handleSubmit(e) {
    debugger
    e.preventDefault();
    // if (this.imageExists(this.state.online_url)) {
    //   this.props.updateUser({ id: this.props.currentUser.id, image_url: this.state.online_url }).then(
    //     this.eventFire(document.getElementById('cog'), 'click'));
    // } else 
    if (this.imageExists(this.state.imagePreviewUrl)) {
      debugger
      this.props.updateUser({ id: this.props.currentUser.id, profilePicture: this.state.imagePreviewUrl })
    }
  }

  updateProfileField(field) {
    if (field === 'name') {
      this.props.updateUser({[field]: this.state.name});
      this.setState({displayNameInputField: 'hidden'});
    } else if (field === 'email') {
      this.props.updateUser({[field]: this.state.email});
      this.setState({displayEmailInputField: 'hidden'});
    } else if (field === 'phone') {
      this.props.updateUser({[field]: this.state.phone});
      this.setState({displayPhoneInputField: 'hidden'});
    } else if (field === 'thingsilove') {
      this.props.updateUser({[field]: this.state.thingsilove});
      this.setState({displayHobbyInputField: 'hidden'});
    } else if (field === 'bio') {
      this.props.updateUser({[field]: this.state.bio});
      this.setState({displayBioInputField: 'hidden'});
    } else if (field === 'facebook') {
      this.props.updateUser({[field]: this.state.facebook});
      this.setState({displayFacebookInputField: 'hidden'});
    } else if (field === 'twitter') {
      this.props.updateUser({[field]: this.state.twitter});
      this.setState({displayTwitterInputField: 'hidden'});
    } else if (field === 'instagram') {
      this.props.updateUser({[field]: this.state.instagram});
      this.setState({displayInstagramInputField: 'hidden'});
    } else if (field === 'linkedin') {
      this.props.updateUser({[field]: this.state.linkedin});
      this.setState({displayLinkedinInputField: 'hidden'});
    } else if (field === 'youtube') {
      this.props.updateUser({[field]: this.state.youtube});
      this.setState({displayYoutubeInputField: 'hidden'});
    }
  }

  showInputField(field) {
    if (field === 'name') {
      this.setState({displayNameInputField: ''});
    } else if (field === 'email') {
      this.setState({displayEmailInputField: ''});
    } else if (field === 'phone') {
      this.setState({displayPhoneInputField: ''});
    } else if (field === 'thingsilove') {
      this.setState({displayHobbyInputField: ''});
    } else if (field === 'bio') {
      this.setState({displayBioInputField: ''});
    } else if (field === 'facebook') {
      this.setState({displayFacebookInputField: ''});
    } else if (field === 'twitter') {
      this.setState({displayTwitterInputField: ''});
    } else if (field === 'instagram') {
      this.setState({displayInstagramInputField: ''});
    } else if (field === 'linkedin') {
      this.setState({displayLinkedinInputField: ''});
    } else if (field === 'youtube') {
      this.setState({displayYoutubeInputField: ''});
    }
  }

  render() {
    let { imagePreviewUrl, online_url } = this.state;
    let profilePicture = null;
    // let loading = <div className="avatar-previewText">Loading...</div>;

    if (imagePreviewUrl) {
      profilePicture = (<img className='avatar-img' src={imagePreviewUrl} />);
    } 
    // else if (online_url) { 
    //   if (this.imageExists(online_url)) {
    //     $imagePreview = (<img src={online_url} />);
    //   } else {
    //     $imagePreview = loading;
    //   }
    // } else {
    //   $imagePreview = <div className="avatar-previewText">
    //     </div>;
    // }
    let nameField = '';
    let emailField = '';
    let phoneField = '';
    let hobbyField = '';
    let bioField = '';
    let facebookField = '';
    let twitterField = '';
    let instagramField = '';
    let linkedinField = '';
    let youtubeField = '';
    if (this.state.displayNameInputField != 'hidden') {
      nameField = <div className='inner-input-field'>
        <input onChange={this.update('name')} type='text' />
        <button onClick={() => this.updateProfileField('name')}>SAVE</button>
      </div>;
    } else if (this.state.displayEmailInputField != 'hidden') {
      emailField = <div className='inner-input-field'>
        <input onChange={this.update('email')} type='text' />
        <button onClick={() => this.updateProfileField('email')}>SAVE</button>
      </div>;
    } else if (this.state.displayPhoneInputField != 'hidden') {
      phoneField = <div className='inner-input-field'>
        <input onChange={this.update('phone')} type='text' />
        <button onClick={() => this.updateProfileField('phone')}>SAVE</button>
      </div>;
    } else if (this.state.displayHobbyInputField != 'hidden') {
      hobbyField = <div className='inner-input-field'>
        <input onChange={this.update('thingsilove')} type='text' />
        <button onClick={() => this.updateProfileField('thingsilove')}>SAVE</button>
      </div>;
    } else if (this.state.displayBioInputField != 'hidden') {
      bioField = <div className='inner-input-field'>
        <input onChange={this.update('bio')} type='text' />
        <button onClick={() => this.updateProfileField('bio')}>SAVE</button>
      </div>;
    } else if (this.state.displayFacebookInputField != 'hidden') {
      facebookField = <div className='inner-input-field'>
        <input onChange={this.update('facebook')} type='text' />
        <button onClick={() => this.updateProfileField('facebook')}>SAVE</button>
      </div>;
    } else if (this.state.displayTwitterInputField != 'hidden') {
      twitterField = <div className='inner-input-field'>
        <input onChange={this.update('twitter')} type='text' />
        <button onClick={() => this.updateProfileField('twitter')}>SAVE</button>
      </div>;
    } else if (this.state.displayInstagramInputField != 'hidden') {
      instagramField = <div className='inner-input-field'>
        <input onChange={this.update('instagram')} type='text' />
        <button onClick={() => this.updateProfileField('instagram')}>SAVE</button>
      </div>;
    } else if (this.state.displayLinkedinInputField != 'hidden') {
      linkedinField = <div className='inner-input-field'>
        <input onChange={this.update('linkedin')} type='text' />
        <button onClick={() => this.updateProfileField('linkedin')}>SAVE</button>
      </div>;
    } else if (this.state.displayYoutubeInputField != 'hidden') {
      youtubeField = <div className='inner-input-field'>
        <input onChange={this.update('youtube')} type='text' />
        <button onClick={() => this.updateProfileField('youtube')}>SAVE</button>
      </div>;
    }
    return (
      <div>
        <div className="header-avatar">
          <div className="users-name">Testing</div>
          {/* <form onSubmit={this._handleSubmit}> */}
            <div className="avatar-section">
              <div className="avatar-position" >
                {profilePicture}
                <input className="avatar-fileInput"
                  type="file"
                  onChange={this._handleProfilePicChange} />
              </div>
            </div>
          {/* </form> */}
          <div className="users-location">San Francisco, CA</div>
          <div className='profile-information'>
            <div className="users-name-field">
              <span>Name: </span>
              <p>{this.props.currentUser.name}</p>
              <i onClick={() => this.showInputField('name')} className="fas fa-edit"></i>
            </div>
            {nameField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Email: </span>
              <p>{this.props.currentUser.email}</p>
              <i onClick={() => this.showInputField('email')} className="fas fa-edit"></i>
            </div>
            {emailField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Phone Number: </span>
              <p>{this.props.currentUser.phone}</p>
              <i onClick={() => this.showInputField('phone')} className="fas fa-edit"></i>
            </div>
            {phoneField}
            <div className="input-field-divider" />
            <div className="thingsilove-field">
              <span>Things I Love: </span>
              <p>{this.props.currentUser.thingsilove}</p>
              <i onClick={() => this.showInputField('thingsilove')} className="fas fa-edit"></i>
            </div>
            {hobbyField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Bio: </span>
              <p>{this.props.currentUser.bio}</p>
              <i onClick={() => this.showInputField('bio')} className="fas fa-edit"></i>
            </div>
            {bioField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Facebook: </span>
              <p>{this.props.currentUser.social.facebook}</p>
              <i onClick={() => this.showInputField('facebook')} className="fas fa-edit"></i>
            </div>
            {facebookField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Twitter: </span>
              <p>{this.props.currentUser.social.twitter}</p>
              <i onClick={() => this.showInputField('twitter')} className="fas fa-edit"></i>
            </div>
            {twitterField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Instagram: </span>
              <p>{this.props.currentUser.social.instagram}</p>
              <i onClick={() => this.showInputField('instagram')} className="fas fa-edit"></i>
            </div>
            {instagramField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Linkedin: </span>
              <p>{this.props.currentUser.social.linkedin}</p>
              <i onClick={() => this.showInputField('linkedin')} className="fas fa-edit"></i>
            </div>
            {linkedinField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Youtube: </span>
              <p>{this.props.currentUser.social.youtube}</p>
              <i onClick={() => this.showInputField('youtube')} className="fas fa-edit"></i>
            </div>
            {youtubeField}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;