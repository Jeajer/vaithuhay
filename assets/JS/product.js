//show preorder content
const show_btn = document.querySelector('.product-information .preorder-information .preorder-content .vendor-seemore');
const preorder_content = document.querySelector('.product-information .preorder-information .preorder-content');

show_btn.addEventListener('click', () => {
  if(preorder_content.classList.contains('show-content')){
    preorder_content.classList.remove('show-content');
  }
  else {
    preorder_content.classList.add('show-content');
  }
});



//description toggle
const description_toggle_items = document.querySelectorAll(
  ".product-description .description-toggle .description-toggle-item"
);
description_toggle_items.forEach((item) => {
  const toggle_header = item.querySelector(".description-toggle-head");
  const toggle_body = item.querySelector(".description-toggle-body");
  const toggle_icon = item.querySelector(".toggle-head-icon img");
  toggle_header.addEventListener("click", () => {
    if (toggle_body.style.display == "none") {
      toggle_body.style.display = "inline";
      toggle_header.style.background = "#FFDE50";
      toggle_icon.style.transform = "rotate(90deg)";
    } else {
      toggle_body.style.display = "none";
      toggle_header.style.background = "#f1f1f1";
      toggle_icon.style.transform = "rotate(0deg)";
    }
  });

  const more_btn = item.querySelector('.description-toggle-body .description-more-btn span');
  const toggle_body_more = item.querySelector(".description-toggle-body .description-toggle-more"); 
  if(more_btn != null){
    more_btn.addEventListener('click', () => {
        if(toggle_body_more.style.display == 'none'){
            toggle_body_more.style.display = 'inline';
            more_btn.innerHTML = 'Thu gọn <b class="more-icon active"><img src="//theme.hstatic.net/1000069970/1001119059/14/arrow-down.png?v=5007"></b>';
        } else {
            toggle_body_more.style.display = 'none';
            more_btn.innerHTML = 'Xem thêm <b class="more-icon"><img src="//theme.hstatic.net/1000069970/1001119059/14/arrow-down.png?v=5007"></b>';
        }
      });
  }
});

//specification toggle
const specification_header = document.querySelector(
  ".product-description .description-other .description-specification .specification-title"
);
const specification_icon =
  specification_header.querySelector(".toggle-head-icon");
const specification_body = document.querySelector(
  ".product-description .description-other .description-specification .specification-body"
);

specification_header.addEventListener("click", () => {
  if (specification_body.style.display == "none") {
    specification_body.style.display = "inline";
    specification_header.style.background = "#FFDE50";
    specification_icon.style.transform = "rotate(0deg)";
  } else {
    specification_body.style.display = "none";
    specification_header.style.background = "#f1f1f1";
    specification_icon.style.transform = "rotate(-90deg)";
  }
});


//open link input
const link_input = document.querySelector('.product-evaluation .evaluation-comment .evaluation-link-video');

function open_link_input() {
  if(link_input.style.display == "none"){
    link_input.style.display = "flex";
  }
}

//question button
const question_button = document.querySelector('.product-evaluation .evaluation-review .review-btn .review-comment-btn');
const comment_button = document.querySelector('.product-evaluation .evaluation-review .review-btn .review-question-btn');
const question_body = document.querySelector('.product-evaluation .question-comment');
const comment_body = document.querySelector('.product-evaluation .evaluation-comment');

question_button.addEventListener('click', () =>{
  if(question_body.style.display == "none"){
    question_body.style.display = "flex";
  }
  else{
    question_body.style.display = "none";
  }

  comment_body.style.display = "none";
});

comment_button.addEventListener('click', () =>{
  if(comment_body.style.display == "none"){
    comment_body.style.display = "flex";
  }
  else{
    comment_body.style.display = "none";
  }

  question_body.style.display = "none";
});


//popup specification
const spec_popup_btn = document.querySelector('.product-description .description-other .description-specification .specification-body .specification-more-btn');
const spec_popup_body = document.querySelector('.popup-specification');
const spec_popup_close_btn = document.querySelector('.popup-specification .popup-content .popup-header .popup-close-btn');

spec_popup_btn.addEventListener('click', () =>{
  spec_popup_body.style.display = 'inline';
});

spec_popup_close_btn.addEventListener('click', () => {
  spec_popup_body.style.display = 'none';
});


//change option
const option_btn = document.querySelector('.product-buy-now .buy-now-content .buy-now-information .buy-now-change-option');
const change_option_body = document.querySelector('.popup-change-option');
option_btn.addEventListener('click', () => {
  change_option_body.style.display = 'flex';
})

const option_close_btn = document.querySelector('.popup-change-option .change-option-content .change-option-btns .complete-btn');
option_close_btn.addEventListener('click', () => {
  change_option_body.style.display = 'none';
})







//youtube slider
const youtubeSliderState = {
  list: document.querySelectorAll('.youtube .youtube-container .youtube-slider .youtube-content-slider .youtube-slider-item'),
  slider: document.querySelector('.youtube .youtube-container .youtube-slider .youtube-content-slider'),
  length: document.querySelectorAll('.youtube .youtube-container .youtube-slider .youtube-content-slider .youtube-slider-item').length,
  perView: 4,
  counter: 0,
  widthElement: document.querySelector('.youtube .youtube-container .youtube-slider .youtube-content-slider .youtube-slider-item:first-child').offsetWidth + 15
};

insertHTML(youtubeSliderState);


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