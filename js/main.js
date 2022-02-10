let elMenuBtn = document.getElementById('menuBtn');
let elMenuBox = document.getElementById('menuBox');
let elMenuRemov = document.getElementById('menuRemov')

elMenuBtn.addEventListener('click', function () {
  elMenuBox.classList.add('open-menu');
  elMenuBtn.classList.add('m-none');
  elMenuBtn.classList.remove('m-block');
  elMenuRemov.classList.add('m-block');
})

elMenuRemov.addEventListener('click', function () {
  elMenuBtn.classList.add('m-block');
  elMenuBox.classList.remove('open-menu');
  elMenuRemov.classList.add('m-none');

})