const select = document.getElementById('direction');
const tel = document.querySelector('#tel');
const regex = /[a-zA-Zа-яА-Я]/g;

select.addEventListener('change', function() {
  select.style.color = "#000"
});

tel.oninput = function(){
  this.value = this.value.replace(regex, '');
}

// const header = document.querySelector("navbar");

// window.addEventListener('scroll', function() {
//   if (window.pageYOffset >= 720) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// });