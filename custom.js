/* aos-animation */
AOS.init({
    once: true,
});
/* end-aos-animation */

/* header-active */
function toggleHeaderClass() {
    const header = document.getElementById("fixedHeader");
    if (window.scrollY > 50) {
        header.classList.add("activeHeader");
    } else {
        header.classList.remove("activeHeader");
    }
}
 
window.addEventListener("scroll", toggleHeaderClass);
 
window.addEventListener("load", toggleHeaderClass);
/* end-header-active */

/* home-slider */
jQuery(document).ready(function ($) {
    var slides = [
        {
            src: "public/assets/images/home-banner-1.jpg",
            title: "Its all about life !",
        },
        {
            src: "public/assets/images/home-banner-2.jpg",
            title: "Its all about life !",
        },
    ];
    // Initialize Vegas slider
    $("#homeTopSlider").vegas({
        slides: slides,
        overlay: true,
        transition: "fade2",
        animation: "kenburns",
        transitionDuration: 1500,
        delay: 5000,
        animationDuration: 18000,
        walk: function (index, slide) {
            // Update the title dynamically when the slide changes
            $("#slider-title").text(slide.title);
        },
    });
    // Set initial title
    $("#slider-title").text(slides[0].title);
});
/* end-home-slider */

/* map */
const Us = function () {
    var t = document.querySelector(".country_map");
    if (!t) return; // Exit early if map container doesn't exist

    var e = [
        { x: 30, y: 70, content: "country-1" },
        { x: 51.1, y: 18.1, content: "country-2" },
        { x: 50.5, y: 32.5, content: "country-3" },
        { x: 52, y: 58, content: "country-4" },
        { x: 68.5, y: 30.7, content: "country-5" },
        { x: 67.5, y: 47.5, content: "country-6" },
        { x: 74.5, y: 53.5, content: "country-7" },
        { x: 85.3, y: 66, content: "country-8" },
        { x: 84.7, y: 78.5, content: "country-9" },
    ];

    function i() {
        var t = document.querySelectorAll(".hot-spot"),
            i = document.querySelectorAll(".speech-bubble");
        t.forEach(function (t, n) {
            var s = e[n].x,
                o = e[n].y,
                r = e[n].content;

            if (n === 0) {
                t.classList.add("hot-spot-india");
            }

            t.style.top = `${o}%`;
            t.style.left = `${s}%`;

            i[n].textContent = r;

            if (window.innerWidth >= 300) {
                i[n].style.top = `${o}%`;
                i[n].style.left = `${s}%`;
            } else {
                i[n].style.top = "50%";
                i[n].style.left = "50%";
            }

            // Remove the corresponding speech bubble on click
            t.addEventListener("click", function () {
                i[n].remove(); // Remove the speech bubble element
            });
        });
    }

    (function () {
        for (var n = 0; n < e.length; n++) {
            var s = document.createElement("div");
            s.classList.add("hot-spot");
            t.append(s);

            var o = document.createElement("span");
            o.classList.add("speech-bubble");
            t.append(o);
        }
        i();
    })();

    window.addEventListener("load", i);
    window.addEventListener("resize", i);
};

document.addEventListener("DOMContentLoaded", function () {
    Us();
});

/* end-map */

/* testimonials-slider */
$(document).ready(function(){
    $(".testimonials-slider").owlCarousel({
        items: 1,
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: false
    });
});
/* end-testimonials-slider */

/*product-slider*/

$(document).ready(function () {
  var $slider = $('.product-img-slider');
  var slideCount = $slider.find('.pro-img-slide-col').length;

  // Initialize slick
  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true
  });

  // Hide dots if there's only one slide
  if (slideCount <= 1) {
    $slider.slick('slickSetOption', 'dots', false, true); // Remove dots dynamically
    $('.slick-dots').hide(); // Just in case, force-hide
  }
});
  $('.product-thumb-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-img-slider',
    dots: true,
    arrows: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
  });
  

/*end-product-slider*/

/*infrastructure-slider*/
// $('.infrastructure-img-slider').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1, 
//     dots: true,
//     arrows: false,
//     centerMode: true,
//     centerPadding: '0px', // Add this line
//     focusOnSelect: true,
//     rtl: false,
//     responsive: [
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 3, 
//             },
//         },
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 3, 
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2, 
//             },
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 slidesToShow: 2, 
//             },
//         },
//     ],
// });

$(document).ready(function () {
  var $slider = $('.infra-fixed-slider');
  var slideCount = $slider.find('.infra-fixed-slide-col').length;

  if (slideCount > 1) {
    $slider.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      prevArrow: $('.bottom-prev-arrow'),
      nextArrow: $('.bottom-next-arrow')
    });
  } else {
    // Optional: hide arrows if only 1 slide
    $('.infra-fixed-slider-arrow').hide();
  }
});



$(document).ready(function () {
  var $slider = $('.box-img-slider');
  var slideCount = $slider.find('.box-img-slide-col').length;

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: slideCount > 1, // only show dots if more than 1 slide
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true
  });
});

  
  

/*end-infrastructure-slider*/

/*life at amnata gallary */
$(function () {
    $('#puzzllerry2').puzzllerry({
      spacing: 1,
      animation: {
        easing: "easeInOutBounce",
        duration: 50,
        maxBoxSize: 195
      }
    });
  });
  
/*end life at amnata gallary */
 
//  $(document).ready(function () {
//         var currentUrl = window.location.href;
//         $('.header-menu-fixd ul li a').each(function () {
//             if (this.href === currentUrl) {
//                 $(this).parent('li').addClass('active');
//             }
//         });
//     });
$(document).ready(function () {
    var currentUrl = window.location.href;
    $('.header-menu-fixd ul li a').each(function () {
        if (this.href === currentUrl) {
            // Add 'active' to current <li>
            $(this).parent('li').addClass('active');

            // Also add 'active' to parent dropdown <li> if exists
            $(this).closest('.dropdown-mega').addClass('active');
        }
    });
});
