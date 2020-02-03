// var lowerSlider = document.querySelector("#lower"),
//   upperSlider = document.querySelector("#upper"),
//   lowerVal = parseInt(lowerSlider.value);
// upperVal = parseInt(upperSlider.value);

// upperSlider.oninput = function() {
//   lowerVal = parseInt(lowerSlider.value);
//   upperVal = parseInt(upperSlider.value);

//   if (upperVal < lowerVal + 4) {
//     lowerSlider.value = upperVal - 4;

//     if (lowerVal == lowerSlider.min) {
//       upperSlider.value = 4;
//     }
//   }
// };

// lowerSlider.oninput = function() {
//   lowerVal = parseInt(lowerSlider.value);
//   upperVal = parseInt(upperSlider.value);

//   if (lowerVal > upperVal - 4) {
//     upperSlider.value = lowerVal + 4;

//     if (upperVal == upperSlider.max) {
//       lowerSlider.value = parseInt(upperSlider.max) - 4;
//     }
//   }
// };

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  center: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      loop: false
    }
  },
  navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fa fa-arrow-right'></i>"
  ]
});

var btn = $("#button");

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

$("body").scrollspy({ target: "#main-nav" });

// Add smooth scrolling
$("#navbarNav a").on("click", function(e) {
  // Check for a hash value
  if (this.hash !== "") {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function() {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});

// $("input[type='range']").popup();

$(document).ready(function() {
  $(".ui-select").removeClass("ui-select");
});
