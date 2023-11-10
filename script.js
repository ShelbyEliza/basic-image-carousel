const buttons = document.querySelectorAll('[data-carousel-button]');
const circles = document.querySelector('[data-circles]');
const slides = document.querySelector('[data-slides]');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
		const slides = button
			.closest('[data-carousel]')
			.querySelector('[data-slides]');

		const activeSlide = slides.querySelector('[data-active]');
		const activeCircle = circles.querySelector('[data-active]');

		// converts to an array:
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex < 0) {
			newIndex = slides.children.length - 1;
		}
		if (newIndex >= slides.children.length) {
			newIndex = 0;
		}
		circles.children[newIndex].dataset.active = true;
		delete activeCircle.dataset.active;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	});
});
/** TODO: Add timeout progression */
function progressSlides() {
	const activeSlide = slides.querySelector('[data-active]');
	const activeCircle = circles.querySelector('[data-active]');
	let newIndex = [...slides.children].indexOf(activeSlide) + 1;

	if (newIndex >= slides.children.length) {
		newIndex = 0;
	}
	circles.children[newIndex].dataset.active = true;
	delete activeCircle.dataset.active;

	slides.children[newIndex].dataset.active = true;
	delete activeSlide.dataset.active;
}

setInterval(progressSlides, 5000);
