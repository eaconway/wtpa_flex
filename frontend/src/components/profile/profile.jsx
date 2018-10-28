import React from 'react';
import './profile.css';
// import Dropzone from 'react-dropzone';
// import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = "d02vszw5";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/WTPA/upload";

class Profile extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.currentUserId).then( res => {
      this.setState({
        uploadedFileCloudinaryUrl: res.user.data.profilePicture
      });
    });
  }

  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '', online_url: '', displayFacebookInputField: 'hidden', displayTwitterInputField: 'hidden', displayInstagramInputField: 'hidden', displayLinkedinInputField: 'hidden', displayYoutubeInputField: 'hidden', 
    uploadedProfilePic: '', uploadedFileCloudinaryUrl: '' //facebook: //this.props.currentUser.social.facebook, twitter: this.props.currentUser.social.twitter, instagram: this.props.currentUser.social.instagram, linkedin: this.props.currentUser.social.linkedin, youtube: this.props.currentUser.social.youtube 
    };
    // this._handleProfilePicChange = this._handleProfilePicChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    // this.imageExists = this.imageExists.bind(this);
    this.updateProfileField = this.updateProfileField.bind(this);
    this.showInputField = this.showInputField.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedProfilePic: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    // let upload = request.post(CLOUDINARY_UPLOAD_URL)
    //   .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //   .field('file', file);

    // upload.end = (err, response) => {
    //   if (err) {
    //     console.error(err);
    //   }

    //   let height = response.body.height;
    //   let width = response.body.width;
    //   if(height > width){height = width} else {width = height}
    // }
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    // if (this.imageExists(this.state.online_url)) {
    //   this.props.updateUser({ id: this.props.currentUser.id, image_url: this.state.online_url }).then(
    //     this.eventFire(document.getElementById('cog'), 'click'));
    // } else 
    if (this.imageExists(this.state.imagePreviewUrl)) {
      this.props.updateUser({ id: this.props.currentUser.id, profilePicture: this.state.imagePreviewUrl });
    }
    // if (response.body.secure_url !== '') {
    //   this.setState({
    //     uploadedFileCloudinaryUrl: response.body.secure_url.replace(
    //       "v" + response.body.version.toString(),
    //       `w_${width},h_${height},c_crop,g_face,r_max/w_170`
    //     )
    //   });
    //   this.props.updateUser({
    //     id: this.props.currentUserId,
    //     profilePicture: this.state.uploadedFileCloudinaryUrl
    //   });
    // }
  }
    
    

  updateProfileField(field) {
    if (field === 'facebook') {
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
    if (field === 'facebook' && this.state.displayFacebookInputField === 'hidden') {
      this.setState({displayFacebookInputField: ''});
    } else if (field === 'facebook' && this.state.displayFacebookInputField === '') {
      this.setState({displayFacebookInputField: 'hidden'});
    } else if (field === 'twitter' && this.state.displayTwitterInputField === 'hidden') {
      this.setState({displayTwitterInputField: ''});
    } else if (field === 'twitter' && this.state.displayTwitterInputField === '') {
      this.setState({displayTwitterInputField: 'hidden'});
    } else if (field === 'instagram' && this.state.displayInstagramInputField === 'hidden') {
      this.setState({displayInstagramInputField: ''});
    } else if (field === 'instagram' && this.state.displayInstagramInputField === '') {
      this.setState({displayInstagramInputField: 'hidden'});
    } else if (field === 'linkedin' && this.state.displayLinkedinInputField === 'hidden') {
      this.setState({displayLinkedinInputField: ''});
    } else if (field === 'linkedin' && this.state.displayLinkedinInputField === '') {
      this.setState({displayLinkedinInputField: 'hidden'});
    } else if (field === 'youtube' && this.state.displayYoutubeInputField === 'hidden') {
      this.setState({displayYoutubeInputField: ''});
    } else if (field === 'youtube' && this.state.displayYoutubeInputField === '') {
      this.setState({displayYoutubeInputField: 'hidden'});
    }
  }

  render() {
    let profilePicture = null;
    // let loading = <div className="avatar-previewText">Loading...</div>;

    if (this.state.uploadedFileCloudinaryUrl != '') {
      profilePicture = <img className="avatar-img" src={this.state.uploadedFileCloudinaryUrl} />;
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
    let facebookField = '';
    let twitterField = '';
    let instagramField = '';
    let linkedinField = '';
    let youtubeField = '';
    if (this.state.displayFacebookInputField != 'hidden') {
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
            <div className="avatar-section">
              <div className="avatar-position" >
                {profilePicture}
                <label for='file-input'>
                  <i className="fas fa-plus"></i>
                </label>
                <input id='file-input' className="avatar-fileInput"
                  type="file"
                  onChange={this._handleProfilePicChange} />
              {/*<Dropzone className='avatar-dropzone'
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
              </Dropzone>*/}
              </div>
            </div>
          <div className="users-location">San Francisco, CA</div>
          <div className='profile-information'>
            <div className="users-name-field">
              <span>Name: </span>
              <p>{this.props.currentUser != null ? this.props.currentUser.name : null}</p>
              <i onClick={() => this.props.history.push('/account/update-profile')} className="fas fa-edit"></i>
            </div>
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Email: </span>
              <p>{this.props.currentUser != null ? this.props.currentUser.email : null}</p>
              <i onClick={() => this.props.history.push('/account/update-profile')} className="fas fa-edit"></i>
            </div>
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Phone Number: </span>
              {/* <p>{this.props.currentUser.phone}</p> */}
              <i onClick={() => this.props.history.push('/account/update-profile')} className="fas fa-edit"></i>
            </div>
            <div className="input-field-divider" />
            <div className="thingsilove-field">
              <span>Things I Love: </span>
              {/* <p>{this.props.currentUser.thingsilove}</p> */}
              <i onClick={() => this.props.history.push('/account/update-profile')} className="fas fa-edit"></i>
            </div>
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Bio: </span>
              {/* <p>{this.props.currentUser.bio}</p> */}
              <i onClick={() => this.props.history.push('/account/update-profile')} className="fas fa-edit"></i>
            </div>
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Facebook: </span>
              {/* <p>{this.props.currentUser.social.facebook}</p> */}
              <i onClick={() => this.showInputField('facebook')} className="fas fa-edit"></i>
            </div>
            {facebookField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Twitter: </span>
              {/* <p>{this.props.currentUser.social.twitter}</p> */}
              <i onClick={() => this.showInputField('twitter')} className="fas fa-edit"></i>
            </div>
            {twitterField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Instagram: </span>
              {/* <p>{this.props.currentUser.social.instagram}</p>*/}
              <i onClick={() => this.showInputField('instagram')} className="fas fa-edit"></i>
            </div>
            {instagramField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Linkedin: </span>
              {/*<p>{this.props.currentUser.social.linkedin}</p>*/}
              <i onClick={() => this.showInputField('linkedin')} className="fas fa-edit"></i>
            </div>
            {linkedinField}
            <div className="input-field-divider" />
            <div className="users-name-field">
              <span>Youtube: </span>
              {/*<p>{this.props.currentUser.social.youtube}</p>*/}
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