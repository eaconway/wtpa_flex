import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className='header-avatar'>
          <div className='users-name'>Testing</div>
          <div className='avatar-section'>
            <div className='avatar-position'>
            </div>
          </div>
          <div className='users-location'>San Francisco, CA</div>
          <div className='users-name-field'>
            <input type='text' placeholder='Name' />
          </div> 
          <div className='input-field-divider'></div>
          <div className='users-name-field'>
            <input type='text' placeholder='Email' />
          </div> 
          <div className='input-field-divider'></div>
          <div className='users-name-field'>
            <input type='text' placeholder='Phone Number' />
          </div> 
          <div className='input-field-divider'></div>
          <div className='thingsilove-field'>
            <textarea placeholder='Things I love'></textarea>
          </div> 
        </div>
      </div>
    );
  }
}

export default Profile;