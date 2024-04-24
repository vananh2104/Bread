$(".owl-menu").owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
      margin: 20,
    },
    600: {
      items: 3,
      nav: false,
      margin: 20,
    },
    1000: {
      items: 5,
      nav: true,
      loop: false,
    },
  },
});

$(".owl-produts").owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});
