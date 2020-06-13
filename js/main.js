var searchButton = document.querySelector('.search-button');
var searchForm = document.querySelector('.search-form');
var form = document.querySelector('.form');

var dateArrival = document.querySelector('[name=date-arrival]');
var dateLeaving = document.querySelector('[name=date-leaving]');
var adult = document.querySelector('[name=adult]');
var kids = document.querySelector('[name=kids]');

var isStorageSupport = true;
var storage = '';

try {
    storage = localStorage.getItem('dateArrival');
} catch(err) {
    isStorageSupport = false;
}


searchButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    searchForm.classList.add('shown');

    if(storage) {
        dateArrival.value = storage;
        dateLeaving.focus();
    } else {
        dateArrival.focus();
    }

})

form.addEventListener('submit', function(evt){ 
    if(!dateArrival.value || !dateLeaving.value || !adult.value || !kids.value) {
        evt.preventDefault();
        form.classList.remove('form-error');
        form.offsetWidth = form.offsetWidth;
        form.classList.add('form-error');
    } else {
        if(isStorageSupport) {
            localStorage.setItem('dateArrival', dateArrival.value);
        }
    }

});


window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27) {
        if(searchForm.classList.contains('shown')) {
            evt.preventDefault();
            searchForm.classList.remove('shown');
            form.classList.remove('form-error');
        }
    }
});