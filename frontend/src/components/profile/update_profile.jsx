import React from 'react';
import {Link} from 'react-router-dom';

class UpdateProfile extends React.Component {
  render() {
    return (
      <div className='update-profile'>
        <div className='update-profile-inner'>
          <div className='update-profile-inner-inner'>
            <div className='update-profile-left-sidebar'>
              <button className='clicked-button'>Update Profile</button>
              <button><Link to='/account/change-email'>Change Email</Link></button>
              <button><Link to='/account/change-password'>Change Password</Link></button>
            </div>
            <div className='update-profile-right'>
              <h1>Update Profile</h1>
              <p>Update your profile settings below.</p>
              <form>
                <div className='name-location-input-field'>
                  <div className='name-location-input-inner'>
                    <div className='name-field'>
                      <div className='name-field-title'>
                        <label>Name</label>
                        <span>Required</span>
                      </div>
                      <div className='name-field-input'>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='location-field'>
                      <div className='name-field-title'>
                        <label>Location</label>
                        <span>Required</span>
                      </div>
                      <div className='name-field-input'>
                        <input type='text' />
                      </div>
                      <span className='dark-grey'>This language will be used for Google Maps on the site.</span>
                    </div>
                    <div className='phonenumber-field'>
                      <div className='name-field-title'>
                        <label>Phone Number</label>
                        <span>Required</span>
                      </div>
                      <div className='name-field-input'>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='phonenumber-field'>
                      <div className='name-field-title'>
                        <label>Things I Love</label>
                        <span>Required</span>
                      </div>
                      <div className='thingsilove-field-input'>
                        <input type='text' />
                      </div>
                      <div className='thingsilove-field-input'>
                        <input type='text' />
                      </div>
                      <div className='thingsilove-field-input'>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='bio-field'>
                      <label>Bio</label>
                      <textarea></textarea>
                    </div>
                    <div className='update-profile-save'>
                      <button>SAVE</button>
                    </div>
                  </div>
                </div>
              </form>
              <div className='update-delete-divider'></div>
              <div className='delete-my-account'>
                <h2>Delete My Account</h2>
                <p>Your styles, favourites, API key, and profile settings will be deleted.</p>
                <div className='delete-my-account-button'>
                  <button>DELETE MY ACCOUNT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateProfile;