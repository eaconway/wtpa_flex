import React from 'react';
import {Link} from 'react-router-dom';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      newPassword2: ''
    };
  }

  changePassword() {

  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

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
              <form onSubmit={() => this.changePassword()}>
                <div className='name-location-input-field'>
                  <div className='name-location-input-inner'>
                    <div className='name-field'>
                      <div className='name-field-title'>
                        <label>Current Password</label>
                      </div>
                      <div className='name-field-input'>
                        <input onChange={this.update('currentPassword')} type='text' />
                      </div>
                    </div>
                    <div className='location-field'>
                      <div className='name-field-title'>
                        <label>New Password</label>
                      </div>
                      <div className='name-field-input'>
                        <input onChange={this.update('newPassword')} type='text' />
                      </div>
                    </div>
                    <div className='confirm-new-password'>
                      <div className='name-field-title'>
                        <label>Confirm new password</label>
                      </div>
                      <div className='name-field-input'>
                        <input onChange={this.update('newPassword2')} type='text' />
                      </div>
                    </div>
                    <div className='change-my-password'>
                      <input type='submit' value='CHANGE MY PASSWORD'/>
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