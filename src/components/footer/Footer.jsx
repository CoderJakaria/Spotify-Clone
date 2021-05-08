import React from "react";
import "./Footer.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://i.scdn.co/image/ab67616d000048519731bc9988a2ca46643e63a7"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>zara</h4>
          <p>Omkar</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleFilledWhiteIcon fontSize="large" className="footer__icon" />
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
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
