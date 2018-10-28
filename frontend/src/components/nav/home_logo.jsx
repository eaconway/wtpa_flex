import React from 'react';

class HomePage extends React.Component {
    render () {
        return (
        <div className='home-logo-comp'>
            <img src={require('../../images/header/balloons.jpg')}
          className='user-icon-div' onClick={this.toggleUserOptions}/>
            <div className='nav-search'>
                <i className="fas fa-search search-icon" />
                <input type='text' className='search-input' placeholder='Search' />
            </div>
            
        </div>
        )
    }
};

export default HomePage;