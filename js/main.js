const direction = document.querySelector('#direction')
const header = document.querySelector('#header');
const resetBtn = document.querySelector('#reset_btn');
const regex = /[A-Za-zA-Яа-яЁё]/g;
const phone = document.querySelector('#phone')


direction.addEventListener('change', function() {
  direction.style.color = "#000"
})


resetBtn.addEventListener('click', function () {
    document.getElementById('direction').style.color = '#A6A6A6';
})


window.addEventListener('scroll', function() {
  if (window.pageYOffset >= 720) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
})


phone.oninput = function() {
  this.value = this.value.replace(regex, '');
}




