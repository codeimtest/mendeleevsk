var swiper = new Swiper(".first-screen-slider", {
	slidesPerView: 1,
	watchOverflow: true,
  spaceBetween: 0,
	loop: false,
	watchSlidesProgress: true,
	navigation: {
		nextEl: ".next-btn",
		prevEl: ".prev-btn",
	},
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
});

$('.toggle-button').click(function(){
	$(this).toggleClass('active')
	$('.toggle-menu').toggleClass('active')
	$('body').toggleClass('lock')
})

//faq accordeon
var toggleActiveElements = document.querySelectorAll(".event-card-header");
for (var i = 0; i < toggleActiveElements.length; i++) {
    toggleActiveElements[i].addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });
}