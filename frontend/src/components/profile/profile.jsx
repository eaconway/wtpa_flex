import React from 'react';
import './profile.css';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = "d02vszw5";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/WTPA/upload";


// import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
// import cloudinary from 'cloudinary-core';
// const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'demo' });
// const SampleImg = () => (
//   <img src={cloudinaryCore.url('sample')} />
// );


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
    this.state = { file: '', imagePreviewUrl: '', online_url: '',
      uploadedFileCloudinaryUrl: '' };
    this._handleProfilePicChange = this._handleProfilePicChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.imageExists = this.imageExists.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
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

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
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

    //TODO: Cloudinary
    ////////////////////////////////////////////////////////
    //   <CloudinaryContext cloudName="wtpa">
    //     <Image publicId="sample" format="jpg">
    //       <Transformation crop="fill" gravity="faces" width="300" height="200" />
    //     </Image>
    //   </CloudinaryContext>

    // var widget = cloudinary.createUploadWidget({
    //   cloudName: "demo", uploadPreset: "preset1"
    // }, (error, result) => { });
    // widget.open();
    /////////////////////////////////////////////////////////



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
              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Drop an image or click to select a file to upload.</p>
              </Dropzone>
              <div className="FileUpload">
                ...
              </div>

              <div>
                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                  <div>
                    <p>{this.state.uploadedFile.name}</p>
                    <img src={this.state.uploadedFileCloudinaryUrl} />
                  </div>}
              </div>
              {/* <input name="file" type="file"
                class="file-upload" data-cloudinary-field="image_id"
                data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}" /> */}
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

        {/* <CloudinaryContext cloudName="demo">
          <div>
            <Image publicId="sample" width="50" />
          </div>
          <Image publicId="sample" width="0.5" />
        </CloudinaryContext> */}

        {/* <Image publicId="sample_woman.jpg" >
          <Transformation width="400" height="350" gravity="face" crop="crop" />
          <Transformation radius="20" border="5px_solid_black" />
          <Transformation overlay="cloudinary_icon" opacity="50" width="0.25" flags="relative" gravity="north_east" y="10" x="10" />
          <Transformation quality="auto" fetchFormat="auto" />
        </Image> */}

      </div>
    );
  }
}

export default Profile;