// console.log("Hello World")
document.querySelector('.menu-btn').addEventListener('click', () =>{
      document.querySelector('.nav-menu').classList.toggle("show");

});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.portfolio',{delay:500});
ScrollReveal().reveal('.banner-a',{delay:500});
ScrollReveal().reveal('.banner-two',{delay:500});




///////scroll top btn/////////

const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}