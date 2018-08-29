/* eslint linebreak-style: ["error", "windows"] */

import $ from 'jquery';
import { WOW } from 'wowjs';
import GMaps from 'gmaps';
import 'jquery.nicescroll';
import 'fittextjs';
import 'magnific-popup';
import 'waypoints/lib/noframework.waypoints';

/*-----------------------------------------------------------------------------------
/*
/* Script for Resume
/*
-----------------------------------------------------------------------------------*/

/*----------------------------------------------------*/
/* Preloader
------------------------------------------------------ */

$(window).on('load', () => {
  $('.loader').fadeOut();
  $('#preloader')
    .delay(350)
    .fadeOut('slow');
  $('body').delay(350);
});

$(document).ready(function documentReady() {
  /*----------------------------------------------------*/
  /* Initializing jQuery Nice Scroll
  ------------------------------------------------------ */

  $('body').niceScroll({
    cursorcolor: '#11abb0', // Set cursor color
    cursorwidth: '8', // Sety cursor width
    cursorborder: '', // Set cursor border color, default left none
  });

  /*----------------------------------------------------*/
  /* FitText Settings
  ------------------------------------------------------ */

  setTimeout(() => {
    $('h1.responsive-headline').fitText(1, {
      minFontSize: '28px',
      maxFontSize: '72px',
    });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
  ------------------------------------------------------ */

  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();

    const target = this.hash;

    const $target = $(target);

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        800,
        'swing',
        () => {
          window.location.hash = target;
        },
      );
  });

  // Set my age
  const age = Math.abs(
    new Date(Date.now() - new Date('02/29/1992').getTime()).getUTCFullYear() - 1970,
  );
  $('#age').html(age);

  /*----------------------------------------------------*/
  /* Appear Animation
  ------------------------------------------------------*/
  new WOW().init();

  /*----------------------------------------------------*/
  /* Parallax for Header Content
  ------------------------------------------------------*/
  function parallax() {
    const scrollPosition = $(window).scrollTop();
    $('.banner').css('margin-top', `${0 - scrollPosition * 0.8}px`);
  }

  $(window).scroll(() => {
    parallax();
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
  ------------------------------------------------------*/

  const sections = $('section');
  const navigationLinks = $('#m-nav a');

  sections.each(
    (index, element) => new window.Waypoint({
      element,
      handler: (direction) => {
        let activeSection;
        activeSection = $(element);
        if (direction === 'up') activeSection = activeSection.prev();

        const activeLink = $(`#m-nav a[href="#${activeSection.attr('id')}"]`);

        navigationLinks.parent().removeClass('current');
        activeLink.parent().addClass('current');
      },
      offset: '35%',
    }),
  );

  /*----------------------------------------------------*/
  /* Make sure that #header-background-image height is
  /* equal to the browser height.
  ------------------------------------------------------ */

  $('header').css({
    height: $(window).height(),
  });
  $(window).on('resize', () => {
    $('header').css({
      height: $(window).height(),
    });
    $('body').css({
      width: $(window).width(),
    });
  });

  /*----------------------------------------------------*/
  /*  On scroll blur header
  ------------------------------------------------------*/
  (function scrollBlur() {
    $(window).scroll(() => {
      const oVal = $(window).scrollTop() / 100;
      return $('.header-overlay').css('opacity', oVal);
    });
  }.call(this));

  /*----------------------------------------------------*/
  /* Fade In/Out Primary Navigation
  ------------------------------------------------------*/

  $(window).on('scroll', () => {
    const h = $('header').height();
    const y = $(window).scrollTop();
    const nav = $('#m-nav');

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut('fast');
    } else if (y < h * 0.2) {
      nav.removeClass('opaque').fadeIn('fast');
    } else {
      nav.addClass('opaque').fadeIn('fast');
    }
  });

  /*----------------------------------------------------*/
  /* Modal Popup
  ------------------------------------------------------*/

  $('.item-wrap a').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: 'mfp-fade',
  });

  $(document).on('click', '.popup-modal-dismiss', (e) => {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*----------------------------------------------------*/
  /*  Owl Carousel
  /*----------------------------------------------------*/

  $(document).ready(() => {
    window.$('#testimonial-slides').owlCarousel({
      items: 1,
      loop: true,
    });
  });

  /*----------------------------------------------------*/
  /*  Google Map
  ------------------------------------------------------*/

  // main directions
  GMaps({
    el: '#map',
    lat: 39.079672,
    lng: -94.5818207,
    zoom: 13,
    zoomControl: true,
    zoomControlOpt: {
      style: 'SMALL',
      position: 'TOP_LEFT',
    },
    panControl: false,
    scrollwheel: false,
  });

  // const map = new GMaps({
  //   el: '#map',
  //   lat: 39.079672,
  //   lng: -94.5818207,
  //   zoom: 13,
  //   zoomControl: true,
  //   zoomControlOpt: {
  //     style: 'SMALL',
  //     position: 'TOP_LEFT',
  //   },
  //   panControl: false,
  //   scrollwheel: false,
  // });

  // add address markers
  // map.addMarker({ lat: 23.790223, lng: 90.414036, title: 'BD InfoSys',
  //   infoWindow: { content: '<p>Building # 2, Plot # 111, Road # 35, Gulshan - 2, Dhaka</p>' } });

  /*----------------------------------------------------*/
  /* contact form
  ------------------------------------------------------*/

  $('form#contactForm button.submit').click(() => {
    $('#image-loader').fadeIn();

    const contactName = $('#contactForm #contactName').val();
    const contactEmail = $('#contactForm #contactEmail').val();
    const contactSubject = $('#contactForm #contactSubject').val();
    const contactMessage = $('#contactForm #contactMessage').val();

    const data = `contactName=${contactName}&contactEmail=${contactEmail}&contactSubject=${contactSubject}&contactMessage=${contactMessage}`;

    $.ajax({
      type: 'POST',
      url: 'inc/sendEmail.php',
      data,
      success(msg) {
        // Message was sent
        if (msg === 'OK') {
          $('#image-loader').fadeOut();
          $('#message-warning').hide();
          $('#contactForm').fadeOut();
          $('#message-success').fadeIn();
        } else {
          // There was an error
          $('#image-loader').fadeOut();
          $('#message-warning').html(msg);
          $('#message-warning').fadeIn();
        }
      },
    });
    return false;
  });
});
