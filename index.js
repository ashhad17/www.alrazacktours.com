document.addEventListener('DOMContentLoaded', function () {
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    function showSlide(index) {
        heroSlides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
                slide.style.backgroundImage = `url(${slide.getAttribute('data-background')})`;
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000);
});
/**
 https://www.makkahhaj.com/wp-content/uploads/2017/01/top-banner1-700x450.jpg
 https://www.makkahhaj.com/wp-content/uploads/2018/05/Haj-Categories-1-1.jpg
 https://www.makkahhaj.com/wp-content/uploads/2018/05/Ramadan-Category.jpg
 https://www.makkahhaj.com/wp-content/uploads/2018/05/banner1-700x450.jpg
 https://www.makkahhaj.com/wp-content/uploads/2018/05/hajj-1.jpg
 https://www.makkahhaj.com/wp-content/uploads/2018/05/hajj-package-banner-min-1-700x450.jpg
 https://www.makkahhaj.com/wp-content/uploads/2018/05/umrah-1.jpg
 https://www.makkahhaj.com/wp-content/uploads/2018/09/Banner.jpg
 */

 function myFunction() {
    var x = document.querySelector(".nav-content");
    var open=document.querySelector(".opn");
    var close=document.querySelector(".close");
    var icon=document.querySelector(".icon");

      x.style.display = "block";
      open.style.display="none";
    close.style.display="block"
    
  }
  function myFunctionClose() {
    var x = document.querySelector(".nav-content");
    var open=document.querySelector(".opn");
    var close=document.querySelector(".close");
    var icon=document.querySelector(".icon");
    
    open.style.display="block";
    x.style.display = "none";
  close.style.display="none";
    
  }