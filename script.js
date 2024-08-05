var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var nav = document.querySelector("nav")
  window.addEventListener("scroll", () => {
      if(document.documentElement.scrollTop > 20 ){
          nav.classList.add("sticky")
      }else{
          nav.classList.remove("sticky");
      }
  });