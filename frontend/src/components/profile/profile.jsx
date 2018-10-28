import React from 'react';
import './profile.css';
import Dropzone from 'react-dropzone';
import request from 'superagent';

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
    this.state = {
      uploadedProfilePic: '', 
      uploadedFileCloudinaryUrl: '' };
  }

  onImageDrop(files) {
    this.setState({
      uploadedProfilePic: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      let height = response.body.height;
      let width = response.body.width;
      if(height > width){height = width} else {width = height}


      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url.replace(
            "v" + response.body.version.toString(),
            `w_${width},h_${height},c_crop,g_face,r_max/w_170`
          )
        });
        this.props.updateUser({
          id: this.props.currentUserId,
          profilePicture: this.state.uploadedFileCloudinaryUrl
        });
      }
    });
  }

  render() {
    let profilePicture = null;
  
    if (this.state.uploadedFileCloudinaryUrl != '') {
      profilePicture = <img className="avatar-img" src={this.state.uploadedFileCloudinaryUrl} />;
    } 

    return (
      <div>
        <div className="header-avatar">
          <div className="users-name">Testing</div>
            <div className="avatar-section">
              <div className="avatar-position" >
                {profilePicture}
              <Dropzone className='avatar-dropzone'
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
              </Dropzone>
              </div>
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