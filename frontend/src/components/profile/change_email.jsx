import React from 'react';
import {Link} from 'react-router-dom';

class ChangeEmail extends React.Component {
  render() {
    return (
      <div className='update-profile'>
        <div className='update-profile-inner'>
          <div className='update-profile-inner-inner'>
            <div className='update-profile-left-sidebar'>
              <button><Link to='/account/update-profile'>Update Profile</Link></button>
              <button className='clicked-button'>Change Email</button>
              <button><Link to='/account/change-password'>Change Password</Link></button>
            </div>
            <div className='update-profile-right'>
              <h1>Change Email</h1>
              <p>If you would like to change your email address, simply enter in a new email address below.</p>
              <form>
                <div className='name-location-input-field'>
                  <div className='name-location-input-inner'>
                    <div className='name-field'>
                      <div className='name-field-title'>
                        <label>New Email Address</label>
                      </div>
                      <div className='name-field-input'>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='change-email-address'>
                      <button>CHANGE EMAIL ADDRESS</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeEmail;