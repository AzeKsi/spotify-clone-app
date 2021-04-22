import React from 'react';
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    slider: {
        width: '60%'
    }
}))

function Footer() {
    const classes = useStyles();


    return (
        <div className="footer">
            <div className="footer__left">
               <img src="data:image/jpeg;base64,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" alt="" className="footer__albumLogo"/>
               <div className="footer__songInfo">
                    <h4>Usher</h4>
                    <p>Caught up</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider className={classes.slider}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
