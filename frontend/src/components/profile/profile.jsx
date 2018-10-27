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
      uploadedProfilePic: '', //imagePreviewUrl: '', online_url: '',
      uploadedFileCloudinaryUrl: '' };
    // this._handleProfilePicChange = this._handleProfilePicChange.bind(this);
    // this._handleSubmit = this._handleSubmit.bind(this);
    // this.imageExists = this.imageExists.bind(this);
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


  // imageExists(url) {
  //   var image = new Image();
  //   image.src = url;
  //   if (!image.complete) {
  //     return false;
  //   }
  //   else if (image.height === 0) {
  //     return false;
  //   }
  //   return true;
  // }

  // _handleProfilePicChange(e) {
  //   e.preventDefault();
  //   // this.setState({ online_url: "" });
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   let that = this;
  //   reader.onloadend = () => {
  //     this.setState({
  //       file: file,
  //       imagePreviewUrl: reader.result
  //     });
  //     that.props.updateUser({
  //       id: that.props.currentUserId,
  //       profilePicture: that.state.imagePreviewUrl
  //     });
  //   };

  //   reader.readAsDataURL(file);
  // }

  // _handleSubmit(e) {
  //   debugger
  //   e.preventDefault();
  //   // if (this.imageExists(this.state.online_url)) {
  //   //   this.props.updateUser({ id: this.props.currentUser.id, image_url: this.state.online_url }).then(
  //   //     this.eventFire(document.getElementById('cog'), 'click'));
  //   // } else 
  //   if (this.imageExists(this.state.imagePreviewUrl)) {
  //     debugger
  //     this.props.updateUser({ id: this.props.currentUser.id, profilePicture: this.state.imagePreviewUrl })
  //   }
  // }

  render() {
    // let { imagePreviewUrl, online_url } = this.state;
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



  // <Image publicId="lady.jpg" >
  //   <Transformation width="400" height="400" gravity="face" radius="max" crop="crop" />
  //   <Transformation width="200" crop="scale" />
  // </Image> 

    return (
      <div>
        <div className="header-avatar">
          <div className="users-name">Testing</div>
          {/* <form onSubmit={this._handleSubmit}> */}
            <div className="avatar-section">
              <div className="avatar-position" >
                {profilePicture}
                {/* <input className="avatar-fileInput"
                  type="file"
                  onChange={this._handleProfilePicChange} /> */}
              <Dropzone className='avatar-dropzone'
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
              </Dropzone>
              {/* <div className="FileUpload">
                ...
              </div> */}

              {/* <div>
                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                  <div>
                    <img src={this.state.uploadedFileCloudinaryUrl} />
                  </div>}
              </div> */}


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