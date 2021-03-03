$('.header__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.header_arrow--l'),
  nextArrow: $('.header_arrow--r')
});

$('.gallery__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.gallery_arrow--l'),
  nextArrow: $('.gallery_arrow--r'),
  responsive: [
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]});

function resizeInput(){
  document.querySelectorAll(".form__input-box").forEach((elem)=>{
    elem.addEventListener('input', (event) =>{
      if(event.currentTarget.value){
        elem.previousElementSibling.dataset.resized = true;
      }
      if(!event.currentTarget.value){
        elem.previousElementSibling.dataset.resized = false;
      }
    })
  })
}

resizeInput();