"use strict";

//SCRIPT FOR SCROLLSPY -->
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
}); //SCRIPT FPOR HEADER TEXT -->

var TxtRotate = function TxtRotate(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  var that = this;
  var delta = 80 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');

  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');

    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  } // INJECT CSS


  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid yellowgreen; }";
  document.body.appendChild(css);
}; //SCRIPT FOR WHO AM I -->


var i = 0;
var txt = 'I am Mark Jesper Pillerva. A University Graduate of Bachelor of Science in Electrical Engineering. A bit of years and I journeyed upon the vast sea of Industry in Digital World, this is where I started to the chance of becoming a Software Engineer. Months of self-taught at home and got the opportunity to be taught by KodeGo Organization. And this is where I am now, developing websites and improving myself to become a Fulfilled Software Engineer.';
var speed = 1;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("whoami").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} //SCRIPT FOR NAVBAR MENU BUTTON -->


$(".btn").click(function (e) {
  $(".custom-nav-menu").toggleClass("show");
  e.stopPropagation();
});
$(".menu").click(function (e) {
  e.stopPropagation();
});
$(document).click(function (e) {
  $(".custom-nav-menu").removeClass("show");
  e.stopPropagation();
});
$(".btn").on("click", function togglemenu() {
  $(".top").toggleClass("forward");
});
$(".btn").click(function (e) {
  e.stopPropagation();
});
$(document).click(function (e) {
  $(".top").removeClass("forward");
  e.stopPropagation();
});
$(".btn").on("click", function togglemenu() {
  $(".middle").toggleClass("disappear");
});
$(".btn").click(function (e) {
  e.stopPropagation();
});
$(document).click(function (e) {
  $(".middle").removeClass("disappear");
  e.stopPropagation();
});
$(".btn").on("click", function togglemenu() {
  $(".bottom").toggleClass("backward");
});
$(".btn").click(function (e) {
  e.stopPropagation();
});
$(document).click(function (e) {
  $(".bottom").removeClass("backward");
  e.stopPropagation();
}); //FOR FADING SKILLS ON SCROLL -->

$(window).on("load", function () {
  $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function () {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      /* If the element is completely within bounds of the window, fade it in */

      if (objectBottom < windowBottom) {
        //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500, 1);
        }
      } else {
        //object goes out of view (scrolling up)
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(500, 0);
        }
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
}); //SLIDE UP EFFECT

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;
  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height; //check to see if this current container is within viewport

    if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll', check_if_in_view); // LOADER HERO

$(function () {
  $('#loader-wrapper').delay(5000).hide(1000);
}); // SCROLL TO TOP EVERY REFRESH

$(document).ready(function () {
  $(this).scrollTop(0);
});
//# sourceMappingURL=animation-scripts.dev.js.map
