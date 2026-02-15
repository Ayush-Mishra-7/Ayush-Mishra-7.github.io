(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Dark Mode Toggle
  var toggleSwitch = document.querySelector('#theme-toggle');
  var currentTheme = localStorage.getItem('theme');
  var icon = toggleSwitch ? toggleSwitch.querySelector('i') : null;

  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode' && icon) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener('click', function (e) {
      document.body.classList.toggle('dark-mode');

      var theme = 'light';
      if (document.body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
        if (icon) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
        }
      } else {
        if (icon) {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
        }
      }

      localStorage.setItem('theme', theme);
    });
  }

})(jQuery); // End of use strict
