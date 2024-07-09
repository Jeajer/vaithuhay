function loadPage(page) {
    fetch(page)
        .then(data => {
            document.querySelector('.main-index').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// document.addEventListener("DOMContentLoaded", function() {
//     loadPage('home');
// });