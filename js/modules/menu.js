export default function Menu() {
	/* model */
	let navigationVisible = false;
	
	/* query selectors */
	const menuNavigation = document.querySelector('.menu__navigation');
	const menuButton = document.querySelector('.menu__button');

	/* event listeners */
	menuButton.addEventListener('mouseover', handleMenuButtonHover);
	// menuNavigation.addEventListener('mouseover', handleMenuButtonHover);

	/* event handlers */
	function handleMenuButtonHover(event) {
		toggleNavigation();
		renderHTML();
	}

	/* methods */
	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

	/* render */
	function renderHTML() {
		if (navigationVisible === true) {
			menuNavigation.classList.add('menu__navigation--visible');
		} else {
			menuNavigation.classList.remove('menu__navigation--visible');
		}
	}
}
