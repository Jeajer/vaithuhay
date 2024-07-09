// Tab
const tabs = document.querySelectorAll(".tab-container .tab-box .tab-btn");
const all_content = document.querySelectorAll(
  ".tab-container .box .content-box"
);
const background_tab = document.querySelectorAll(
  ".tab-container .tab-box .background-tab .background-tap-item"
);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    all_content.forEach((content) => {
      content.classList.remove("active");
    });
    all_content[index].classList.add("active");

    background_tab.forEach((bg) => {
      bg.classList.remove("active");
    });
    background_tab[index].classList.add("active");
  });
});

//Slider Tab
const slider_contents = document.querySelectorAll(
  ".tab-slider .slider-container .slider-content .slider-items .slider-item"
);

let counter_tab = 0;

let refresh_Slider = setInterval(() => {
  owl_right();
}, 3000);

function owl_left() {
  if (counter_tab == 0) {
    counter_tab = slider_contents.length / 2 - 1;
  } else {
    counter_tab--;
  }
  scroll_tab();
  clearInterval(refresh_Slider);
  refresh_Slider = setInterval(() => {
    owl_right();
  }, 3000);
}
function owl_right() {
  if (counter_tab == slider_contents.length / 2 - 1) {
    counter_tab = 0;
  } else {
    counter_tab++;
  }
  scroll_tab();
  clearInterval(refresh_Slider);
  refresh_Slider = setInterval(() => {
    owl_right();
  }, 3000);
}

function scroll_tab() {
  slider_contents.forEach(function (item) {
    item.style.transform = `translateX(-${counter_tab * 1150}px)`;
  });
}



//coming soon products
const coming_slider = document.querySelector(
  ".home-coming .container-coming .coming-slider .coming-content-slider"
);
const countdown_list = document.querySelectorAll(
  ".home-coming .container-coming .coming-slider .coming-content-slider .coming-slider-item"
);

const comingLength = countdown_list.length;
const perView = 3;
let counter_coming = 0;
const delay = 3000;
countdown_list[1].style.transform = 'scale(1)';

coming_slider.style.setProperty('--per-view', perView);

for (let i = 0; i < perView; i++) {
  coming_slider.insertAdjacentHTML('beforeend', countdown_list[i].outerHTML);
}

//let autoScroll = setInterval(scroll_coming, delay);

function coming_right() {
  counter_coming++;
  if(counter_coming == comingLength + 1){
    //clearInterval(autoScroll);
    counter_coming = 1;
    coming_slider.style.transition = '0s';
    coming_slider.style.left = '0';
    //autoScroll = setInterval(scroll_coming, delay);
  }
  const widthEl = document.querySelector('.home-coming .container-coming .coming-slider .coming-content-slider .coming-slider-item:first-child').offsetWidth;
  coming_slider.style.left = `-${counter_coming * widthEl}px`;
  coming_slider.style.transition = '0.3s';

  coming_slider.querySelectorAll('.coming-slider-item').forEach(countdown => {
    countdown.style.transform = 'scale(0.75)';
  })

  coming_slider.querySelectorAll('.coming-slider-item')[counter_coming + 1].style.transform = 'scale(1)';
}

//countdown
function parseDate(dateString) {
  const [day, month, year] = dateString.split("/");
  return new Date(`${year}-${month}-${day}T00:00:00`);
}

function updateCountdown() {
  coming_slider.querySelectorAll('.coming-slider-item').forEach((countdown) => {
    const days = countdown.querySelector("#days");
    const hours = countdown.querySelector("#hours");
    const minutes = countdown.querySelector("#minutes");
    const seconds = countdown.querySelector("#seconds");

    const countdown_item = countdown.querySelector(".item");
    const countdown_date = countdown_item.getAttribute("data-cms-date");

    const date_value = parseDate(countdown_date);

    const currentTime = new Date();
    const diff = date_value - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
  });
}

let auto_countdown = setInterval(updateCountdown, 500);

//order
const order_list = document.querySelectorAll('.home-coming .order-products .order-container .order-slider .order-content-slider .order-slider-item');
const order_slider = document.querySelector('.home-coming .order-products .order-container .order-slider .order-content-slider');
const orderLength = order_list.length;
let counter_order = 0;

for (let i = orderLength - 1; i > orderLength - 4; i--) {
  order_slider.insertAdjacentHTML('afterbegin', order_list[i].outerHTML);
}

for (let i = 0; i < 3; i++) {
  order_slider.insertAdjacentHTML('beforeend', order_list[i].outerHTML);
}

function order_left() {
  counter_order--;
  if (counter_order < 0) {
    counter_order = orderLength;
    order_slider.style.transition = '0s';
    order_slider.style.left = `-${counter_order * 320}px`;
    setTimeout(() => {
      counter_order--;
      order_slider.style.left = `-${counter_order * 320}px`;
      order_slider.style.transition = '0.3s';
    }, 0);
  } else {
    order_slider.style.left = `-${counter_order * 320}px`;
    order_slider.style.transition = '0.3s';
  }
}

function order_right() {
  counter_order++;
  if (counter_order == orderLength + 1) {
    counter_order = 1;
    order_slider.style.transition = '0s';
    order_slider.style.left = '0';
    setTimeout(() => {
      order_slider.style.left = `-${counter_order * 320}px`;
      order_slider.style.transition = '0.3s';
    }, 0);
  } else {
    order_slider.style.left = `-${counter_order * 320}px`;
    order_slider.style.transition = '0.3s';
  }
}

//workspace
const workspace_list = document.querySelectorAll('.workspace .workspace-content .workspace-slider .workspace-content-slider .workspace-items');
const workspace_slider = document.querySelector('.workspace .workspace-content .workspace-slider .workspace-content-slider');
const Workspace_length = workspace_list.length;
const workspace_perView = 4;
let workspace_counter = 0;
const workspace_widthEl = document.querySelector('.workspace .workspace-content .workspace-slider .workspace-content-slider .workspace-items:first-child').offsetWidth + 15;
const workspace_dots = document.querySelectorAll('.workspace .workspace-content .workspace-dots li');


function workspace_left() {
  console.log(Workspace_length);
  if (workspace_counter == 0) {
    workspace_counter = Workspace_length / workspace_perView - 1;
  } else {
    workspace_counter--;
  }

  workspace_reload_slider();
}

function workspace_right() {
  if (workspace_counter == Workspace_length / workspace_perView - 1) {
    workspace_counter = 0;
  } else {
    workspace_counter++;
  } 
  
  workspace_reload_slider();
}

function workspace_reload_slider() {
  workspace_slider.style.left = `-${workspace_counter * workspace_widthEl * workspace_perView}px`;
  workspace_slider.style.transition = '0.3s';

  let workspace_lastActiveDot = document.querySelector('.workspace .workspace-content .workspace-dots .slick-active');
  workspace_lastActiveDot.classList.remove('slick-active');
  workspace_dots[workspace_counter].classList.add('slick-active');
}

//decorate
const decorateSliderState = {
  list: document.querySelectorAll('.decorate .decorate-container .decorate-slider .decorate-content-slider .decorate-slider-item'),
  slider: document.querySelector('.decorate .decorate-container .decorate-slider .decorate-content-slider'),
  length: document.querySelectorAll('.decorate .decorate-container .decorate-slider .decorate-content-slider .decorate-slider-item').length,
  perView: 4,
  counter: 0,
  widthElement: document.querySelector('.decorate .decorate-container .decorate-slider .decorate-content-slider .decorate-slider-item:first-child').offsetWidth + 25
};

insertHTML(decorateSliderState);

let autoDecorate = setInterval(function() {
  nav_right_auto(decorateSliderState);
}, 3000);


//setup
const setupSliderState = {
  list: document.querySelectorAll('.setup .setup-container .setup-slider .setup-content-slider .setup-slider-item'),
  slider: document.querySelector('.setup .setup-container .setup-slider .setup-content-slider'),
  length: document.querySelectorAll('.setup .setup-container .setup-slider .setup-content-slider .setup-slider-item').length,
  perView: 4,
  counter: 0,
  widthElement: document.querySelector('.setup .setup-container .setup-slider .setup-content-slider .setup-slider-item:first-child').offsetWidth + 25
};

insertHTML(setupSliderState);

let autoSetup = setInterval(function() {
  nav_right_auto(setupSliderState);
}, 3000);


//experience
const experienceSliderState = {
  list: document.querySelectorAll('.experience .experience-container .experience-slider .experience-content-slider .experience-slider-item'),
  slider: document.querySelector('.experience .experience-container .experience-slider .experience-content-slider'),
  length: document.querySelectorAll('.experience .experience-container .experience-slider .experience-content-slider .experience-slider-item').length,
  perView: 3,
  counter: 0,
  widthElement: document.querySelector('.experience .experience-container .experience-slider .experience-content-slider .experience-slider-item:first-child').offsetWidth + 50
};

insertHTML(experienceSliderState);


//invest
const investSliderState = {
  list: document.querySelectorAll('.invest .invest-container .invest-slider .invest-content-slider .invest-slider-item'),
  slider: document.querySelector('.invest .invest-container .invest-slider .invest-content-slider'),
  length: document.querySelectorAll('.invest .invest-container .invest-slider .invest-content-slider .invest-slider-item').length,
  perView: 4,
  counter: 0,
  widthElement: document.querySelector('.invest .invest-container .invest-slider .invest-content-slider .invest-slider-item:first-child').offsetWidth + 25
};

insertHTML(investSliderState);

let autoInvest = setInterval(function() {
  nav_right_auto(investSliderState);
}, 3000);


//youtube
const youtubeSliderState = {
  list: document.querySelectorAll('.youtube .youtube-container .youtube-slider .youtube-content-slider .youtube-slider-item'),
  slider: document.querySelector('.youtube .youtube-container .youtube-slider .youtube-content-slider'),
  length: document.querySelectorAll('.youtube .youtube-container .youtube-slider .youtube-content-slider .youtube-slider-item').length,
  perView: 4,
  counter: 0,
  widthElement: document.querySelector('.youtube .youtube-container .youtube-slider .youtube-content-slider .youtube-slider-item:first-child').offsetWidth + 15
};

insertHTML(youtubeSliderState);

//brand
const brandSliderState = {
  list: document.querySelectorAll('.brand .brand-container .brand-slider .brand-content-slider .brand-slider-item'),
  slider: document.querySelector('.brand .brand-container .brand-slider .brand-content-slider'),
  length: document.querySelectorAll('.brand .brand-container .brand-slider .brand-content-slider .brand-slider-item').length,
  perView: 3,
  counter: 0,
  widthElement: document.querySelector('.brand .brand-container .brand-slider .brand-content-slider .brand-slider-item:first-child').offsetWidth + 30
};

insertHTML(brandSliderState);

let autoBrand = setInterval(function() {
  nav_right_auto(brandSliderState);
}, 3000);






function insertHTML(state){
  for (let i = state.length - 1; i > state.length - state.perView; i--) {
    (state.slider).insertAdjacentHTML('afterbegin', (state.list)[i].outerHTML);
  }
  
  for (let i = 0; i < state.perView - 1; i++) {
    (state.slider).insertAdjacentHTML('beforeend', (state.list)[i].outerHTML);
  }
}

function nav_left(state) {
  state.counter--;
  if (state.counter < 0) {
    state.counter = state.length;
    state.slider.style.transition = '0s';
    state.slider.style.left = `-${state.counter * state.widthElement}px`;
    setTimeout(() => {
      state.counter--;
      state.slider.style.left = `-${state.counter * state.widthElement}px`;
      state.slider.style.transition = '0.3s';
    }, 0);
  } else {
    state.slider.style.left = `-${state.counter * state.widthElement}px`;
    state.slider.style.transition = '0.3s';
  }
}

function nav_right(state) {
  state.counter++;
  if (state.counter == state.length + 1) {
    state.counter = 1;
    state.slider.style.transition = '0s';
    state.slider.style.left = '0';
    setTimeout(() => {
      state.slider.style.left = `-${state.counter * state.widthElement}px`;
      state.slider.style.transition = '0.3s';
    }, 0);
  } else {
    state.slider.style.left = `-${state.counter * state.widthElement}px`;
    state.slider.style.transition = '0.3s';
  }
}

function nav_right_auto(state) {
  state.counter++;
  if (state.counter == state.length + 1) {
    clearInterval(autoDecorate);
    state.counter = 1;
    state.slider.style.transition = '0s';
    state.slider.style.left = '0';
    autoDecorate = setInterval(function() {
      nav_right_auto(state);
    }, 3000);
    setTimeout(() => {
      state.slider.style.left = `-${state.counter * state.widthElement}px`;
      state.slider.style.transition = '0.3s';
    }, 0);
  } else {
    state.slider.style.left = `-${state.counter * state.widthElement}px`;
    state.slider.style.transition = '0.3s';
  }
}