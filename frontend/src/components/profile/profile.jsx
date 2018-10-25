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
    this.state = { file: '', imagePreviewUrl: '', online_url: '' };
    this._handleProfilePicChange = this._handleProfilePicChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.imageExists = this.imageExists.bind(this);
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
          <div className="users-name-field">
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-field-divider" />
          <div className="users-name-field">
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-field-divider" />
          <div className="users-name-field">
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="input-field-divider" />
          <div className="thingsilove-field">
            <textarea placeholder="Things I love" />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;