  var glide = new Glide('.glide', {
  type: 'carousel',
  perView: 5,
  focusAt: 'center',
  breakpoints: {
	1200: {
	      perView: 4
	    },
    768: {
      perView: 3
    },
    576: {
      perView: 2
    }
  }
})

glide.mount()
