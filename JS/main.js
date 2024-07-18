AOS.init()


//Hamburger menu



let meniDugme = document.getElementById("button-menu")
let donjaSekcija = document.querySelector(".donja-sekcija")


meniDugme.addEventListener('click', ()=>{


donjaSekcija.classList.toggle("hamburger-meni");

})


//Dark Theme
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () =>{

    const body = document.body;
    body.classList.toggle('dark-theme');
})




const popupOverlay = document.querySelector(".popup-overlay");
const popupContainer = document.querySelector(".popup-container");
const closePopupButton = document.getElementById("close-popup");

function openPopup() {
  popupOverlay.style.display = "flex";
  setTimeout(() => {
    popupContainer.style.opacity = "1";
    popupContainer.style.transform = "scale(1)";
  }, 100);
  document.body.classList.add("scroll-lock");
}

function closePopup() {
  popupContainer.style.opacity = "0";
  popupContainer.style.transform = "scale(0.8)";
  setTimeout(() => {
    popupOverlay.style.display = "none";
  }, 300);
  document.body.classList.remove("scroll-lock");
}

window.addEventListener("load", openPopup);

closePopupButton.addEventListener("click", closePopup);



//SWIPER
jQuery(document).ready(function ($) {
    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
 
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
 
    $('#slider').css({ width: slideWidth, height: slideHeight });
 
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
 
    $('#slider ul li:last-child').prependTo('#slider ul');
 
    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
 
    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
 
    $('a.control_prev').click(function (event) {
        event.preventDefault();
        moveLeft();
    });
 
    $('a.control_next').click(function (event) {
        event.preventDefault();
        moveRight();
    });
 
});