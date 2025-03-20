                      

var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
const navLinks = document.querySelectorAll('#cs-navigation a'); // Select all nav links

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	ariaExpanded();
});

// Function to close the menu
function closeMenu() {
	CShamburgerMenu.classList.remove('cs-active');
	CSnavbarMenu.classList.remove('cs-active');
	CSbody.classList.remove('cs-open');
	ariaExpanded();
}

// Close menu when a nav link is clicked
navLinks.forEach(link => {
	link.addEventListener('click', function () {
		closeMenu();
	});
});

// Accessibility update function
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// Mobile nav dropdown toggle
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}
