import React from 'react';

class HomePage extends React.Component {
    render () {
        return (
        <div className='home-logo-comp'>
            <img className='home-logo' src="https://image.flaticon.com/icons/png/128/387/387304.png" />
            <h1>WTPA</h1>
            
            <div className='nav-search'>
                <i className="fas fa-search search-icon" />
                <input type='text' className='search-input'/>
            </div>
        </div>
        )
    }
};

export default HomePage;