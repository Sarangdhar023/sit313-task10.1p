import React from 'react';
import './navigation.css';

function Navigation(){
    return(
        <div className='nav'>
            <div className='center'>
                <h3>DEV@Deakin</h3>
            </div>
            <div className="center">
                <input type="text" id="search-bar" placeholder='Search...'></input>
            </div>
            <div className='center'>
                <h3>Post</h3>
            </div>
            <div className='center'>
                <h3>Login</h3>
            </div>
        </div>
    )
}

export default Navigation;