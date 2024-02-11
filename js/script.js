let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
    menuBtn.addEventListener("click", (function() {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
        if (menuBtn.classList.contains("active")) document.body.style.overflow = "hidden"; else document.body.style.overflow = "";
    }));
    menu.addEventListener("click", (e => {
        if (e.target === menu) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    }));

    //-----------------

    const swiper = new Swiper(".mySwiper", {
        speed: 600,
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 4000,
          },
    });



    const swiperBrends = new Swiper('.swiper-brands', {
        // Optional parameters
        slidesPerView: 7,
        speed:800,
        loop: true,
        spaceBetween: 100,
        observer: true,
        autoHeight: false,
        autoplay: {
          delay: 2000,
        },
      
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
              320: {
                slidesPerView: 4,
                spaceBetween:15,
            },
              460: {
                slidesPerView: 4,
                spaceBetween:15,
            },
            500: {
                slidesPerView: 4,
                spaceBetween: 15,
                
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
            998: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            1100: {
              slidesPerView: 7,
              spaceBetween: 20,
          },
        },
        
      
      });


//----------скрол-------------------//

window.onscroll = function() {myFunction()};

const header = document.querySelector("header");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    document.querySelectorAll('section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('nav').clientHeight <= scrollDistance) {
            document.querySelectorAll('nav a').forEach((el) => {
                if (el.classList.contains('active-menu')) {
                    el.classList.remove('active-menu')
                } 
            });
            document.querySelectorAll('nav li')[i].querySelector('a').classList.add('active-menu');
        }
    })
});

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('move');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('section');
  
  for (let elm of elements) {
    observer.observe(elm);
  }



 