import React from 'react';

class HomePage extends React.Component {
    render () {
        return (
        <div className='home-logo-comp'>
            <img className='margin-left header-icon' src={require('../../images/header/martini.jpg')} />
            <img className='header-icon' src={require('../../images/header/beer.jpg')} />
            <img className='header-icon' src={require('../../images/header/balloons.jpg')} />
            <img className='header-icon' src={require('../../images/header/champagne.jpg')} />
            
            <div className='nav-search'>
                <i className="fas fa-search search-icon" />
                <input type='text' className='search-input' placeholder='Search' />
            </div>
            
        </div>
        )
    }
};

export default HomePage;