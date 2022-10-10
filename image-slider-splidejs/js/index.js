const splide = new Splide(".splide", {
  type: "slide", //slide, loop, fade
  // padding: { y: 10 }, //css values
  gap: "20px", //1 rem default
  // rewind: true,
  speed: 500, //transition in milliseconds
  // fixedWidth: '10vw',
  // width: '100vw',
  perPage: 3,
  start: 0,
  perMove: 1,
  autoplay: true,
  interval: 3000,
  arrows: true,
  pagination: false,
  pauseOnHover: true,
  wheel: false,
});
splide.mount();
