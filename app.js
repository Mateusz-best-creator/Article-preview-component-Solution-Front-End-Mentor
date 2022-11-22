const button = document.querySelector('#btn');
const contentElementToShow = document.querySelector('#hidden-content');

const nameSurname = document.querySelector('#data');
const date = document.querySelector('#date');
// mouseenter
button.addEventListener('mouseenter', function() {
    contentElementToShow.classList.remove('hidden');
    nameSurname.classList.add('color', 'go-right');
    date.classList.add('color', 'go-right');
})
// mouseleave
button.addEventListener('click', function() {
    contentElementToShow.classList.add('hidden');
    nameSurname.classList.remove('color', 'go-right');
    date.classList.remove('color', 'go-right');
})