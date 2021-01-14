import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import './Header.css';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header___icon"/>
            </IconButton>

            <img 
                className="header___logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt="tinder" />

            <IconButton>
                <QuestionAnswerIcon fontSize="large" className="header___icon" />
            </IconButton>

            

        </div>

    )

}

export default Header;
