const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
    searchInputEl.focus();

});
searchInputEl.addEventListener('focus', function (){
    // searchEl에 class 추가
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function (){
    // searchEl에 class 제거
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();