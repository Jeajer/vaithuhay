//youtube slider
const youtubeSliderState = {
  list: document.querySelectorAll(
    ".youtube .youtube-container .youtube-slider .youtube-content-slider .youtube-slider-item"
  ),
  slider: document.querySelector(
    ".youtube .youtube-container .youtube-slider .youtube-content-slider"
  ),
  length: document.querySelectorAll(
    ".youtube .youtube-container .youtube-slider .youtube-content-slider .youtube-slider-item"
  ).length,
  perView: 4,
  counter: 0,
  widthElement:
    document.querySelector(
      ".youtube .youtube-container .youtube-slider .youtube-content-slider .youtube-slider-item:first-child"
    ).offsetWidth + 15,
};

insertHTML(youtubeSliderState);

function insertHTML(state) {
  for (let i = state.length - 1; i > state.length - state.perView; i--) {
    state.slider.insertAdjacentHTML("afterbegin", state.list[i].outerHTML);
  }

  for (let i = 0; i < state.perView - 1; i++) {
    state.slider.insertAdjacentHTML("beforeend", state.list[i].outerHTML);
  }
}

function nav_left(state) {
  state.counter--;
  if (state.counter < 0) {
    state.counter = state.length;
    state.slider.style.transition = "0s";
    state.slider.style.left = `-${state.counter * state.widthElement}px`;
    setTimeout(() => {
      state.counter--;
      state.slider.style.left = `-${state.counter * state.widthElement}px`;
      state.slider.style.transition = "0.3s";
    }, 0);
  } else {
    state.slider.style.left = `-${state.counter * state.widthElement}px`;
    state.slider.style.transition = "0.3s";
  }
}

function nav_right(state) {
  state.counter++;
  if (state.counter == state.length + 1) {
    state.counter = 1;
    state.slider.style.transition = "0s";
    state.slider.style.left = "0";
    setTimeout(() => {
      state.slider.style.left = `-${state.counter * state.widthElement}px`;
      state.slider.style.transition = "0.3s";
    }, 0);
  } else {
    state.slider.style.left = `-${state.counter * state.widthElement}px`;
    state.slider.style.transition = "0.3s";
  }
}
