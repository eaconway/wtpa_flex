import React from 'react';

class Profile extends React.Component {

  // https://stackoverflow.com/a/20744868/2734863
  // String newFileName = "my-image";
  // File imageFile = new File("/users/victor/images/image.png");
  // GridFS gfsPhoto = new GridFS(db, "photo");
  // GridFSInputFile gfsFile = gfsPhoto.createFile(imageFile);
  // gfsFile.setFilename(newFileName);
  // gfsFile.save();

  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '', online_url: '' };
  }

  _handleProfilePicChange(e) {
    e.preventDefault();
    // this.setState({ online_url: "" });
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (this.imageExists(this.state.online_url)) {
      this.props.updateUser({ id: this.props.currentUser.id, image_url: this.state.online_url }).then(
        this.eventFire(document.getElementById('cog'), 'click'));
    } else if (this.imageExists(this.state.imagePreviewUrl)) {
      this.props.updateUser({ id: this.props.currentUser.id, image_url: this.state.imagePreviewUrl }).then(
        this.eventFire(document.getElementById('cog'), 'click'));
    }
  }


  render() {
    return (
      <div>
        <div className="header-avatar">
          <div className="users-name">Testing</div>
          <div className="avatar-section">
            <div className="avatar-position" />
          </div>
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