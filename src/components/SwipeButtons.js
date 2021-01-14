import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReplayIcon from '@material-ui/icons/Replay';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


import './SwipeButtons.css';

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons___repeat'>
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipeButtons___left'>
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipeButtons___star'>
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipeButtons___right'>
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipeButtons___lightning'>
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>


    )

}

export default SwipeButtons;
