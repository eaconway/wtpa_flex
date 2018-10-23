import React from 'react';
import {Link} from 'react-router-dom';

class ChangePassword extends React.Component {
  render() {
    return (
      <div className='update-profile'>
        <div className='update-profile-inner'>
          <div className='update-profile-inner-inner'>
            <div className='update-profile-left-sidebar'>
              <button ><Link to='/account/update-profile/'>Update Profile</Link></button>
              <button><Link to='/account/change-email'>Change Email</Link></button>
              <button className='clicked-button'>Change Password</button>
            </div>
            <div className='update-profile-right'>
              <h1>Change Password</h1>
              <p>If you want to change your password please enter all necessary information below.</p>
              <form>
                <div className='name-location-input-field'>
                  <div className='name-location-input-inner'>
                    <div className='name-field'>
                      <div className='name-field-title'>
                        <label>Current Password</label>
                      </div>
                      <div className='name-field-input'>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='location-field'>
                      <div className='name-field-title'>
                        <label>New Password</label>
                      </div>
                      <div className='name-field-input'>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='confirm-new-password'>
                      <div className='name-field-title'>
                        <label>Confirm new password</label>
                      </div>
                      <div className='name-field-input'>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='change-my-password'>
                      <button>CHANGE MY PASSWORD</button>
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

export default ChangePassword;