"use strict";

const musicTrack = [
  "./music/thisyearswelothe.mp3", //
  "./music/youandme.mp3",
];

let MUSIC = new Audio(musicTrack[0]);

export const selectedMusic = (trackNum) => {
  stopPlay(MUSIC);
  MUSIC = new Audio(musicTrack[trackNum]);
  startPlay(MUSIC);
};

export const musicPlay = () => {
  startPlay(MUSIC);
};

export const musicStop = () => {
  stopPlay(MUSIC);
};

export const startPlay = (music) => {
  music.play();
};

export const stopPlay = (music) => {
  music.pause();
};
