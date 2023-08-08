// Change Header Background
const scrollNavbar = () => {
	const navbar = document.getElementById('navbar')
	this.scrollY >= 50 ? navbar.classList.add('scroll-navbar')
		: navbar.classList.remove('scroll-navbar')
}
window.addEventListener('scroll', scrollNavbar)

// Show Scroll Up
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Active Link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
	const scrollDown = window.scrollY

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight, sectionTop = current.offsetTop - 58, sectionId = current.getAttribute('id'), sectionsClass = document.querySelector('.menu a[href*=' + sectionId + ']')

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link')
		} else {
			sectionsClass.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true // Animations repeat
})

sr.reveal(`.home-box, .products-box, .steps-box, .footer-container`)
sr.reveal(`.home-img`, {origin: 'bottom'})
sr.reveal(`.products-card`, {interval: 100})
sr.reveal(`.about-img, .testimonial-img`, {origin: 'right'})
sr.reveal(`.about-box, .testimonial-box`, {origin: 'left'})