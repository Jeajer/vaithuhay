// Slider Menu
const blogs = document.querySelectorAll(
  ".header .header__navbar .menu-discover-content .menu-discover-blog .blog-list .items"
);
let counter_menu = 0;
function left_menu() {
  if (counter_menu == 0) {
    counter_menu = blogs.length / 4 - 1;
  } else {
    counter_menu--;
  }
  scroll_menu();
}

function right_menu() {
  if (counter_menu == blogs.length / 4 - 1) {
    counter_menu = 0;
  } else {
    counter_menu++;
  }
  scroll_menu();
}
function scroll_menu() {
  blogs.forEach(function (item) {
    item.style.transform = `translateX(-${counter_menu * 1115}px)`;
  });
}






// function loadPage(page) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', `${page}.html`, true);
//   xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//           document.getElementById('content').innerHTML = xhr.responseText;
//       }
//   };
//   xhr.send();
// }

// document.addEventListener("DOMContentLoaded", function() {
//   loadPage('home');
// });