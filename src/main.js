"use strict";

import { musicPlay, musicStop, selectedMusic } from "./music.js";

const btnPlay = document.querySelector("#music-btns-play");
const btnPlayIcon = btnPlay.querySelector("i");
const btnBack = document.querySelector(".music-btns-back");
const btnForward = document.querySelector(".music-btns-Forward");

let clickBtnPlay = false;
let clickBtnBack = false;
let clickBtnForward = false;

const isClickBtnPlay = () => {
  const check = btnPlayIcon.classList.contains("fa-play");
  if (check) {
    btnPlayIcon.classList.remove("fa-play");
    btnPlayIcon.classList.add("fa-pause");
    clickBtnPlay = true;
  } else {
    btnPlayIcon.classList.remove("fa-pause");
    btnPlayIcon.classList.add("fa-play");
    clickBtnPlay = false;
  }
  clickBtnPlay ? musicPlay() : musicStop();
};

const isClickBtnBackForward = () => {
  if (clickBtnBack) {
    selectedMusic(1);
    clickBtnBack = false;
  } else if (clickBtnForward) {
    selectedMusic(0);
    clickBtnForward = false;
  }
};

function handleClickPlay() {
  isClickBtnPlay();
}

function handleClickBack() {
  clickBtnBack = true;
  isClickBtnBackForward();
}

function handleClickForward() {
  clickBtnForward = true;
  isClickBtnBackForward();
}

btnPlay.addEventListener("click", handleClickPlay);
btnBack.addEventListener("click", handleClickBack);
btnForward.addEventListener("click", handleClickForward);
