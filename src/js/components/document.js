const container = document.querySelector("#container");
const content = document.querySelector("#content");

// not sure if we need to close these if we have enough spacing top
// const innerItems = [...content.querySelectorAll(".inner-item")];
// innerItems.forEach((item) => {
// 	let clonedItems = item.cloneNode(true);
// 	clonedItems.classList.add("cloned");
// 	content.appendChild(clonedItems);
// });

let target = 1;
function autoScroll() {
	target = window.scrollY;

	// console.log(content.offsetHeight);
	// console.log(target);

	if (target <= 0) {
		target = content.offsetHeight / 2 - 1;
		window.scrollTo(0, target);
	} else if (target >= content.offsetHeight / 2) {
		target = 1;
		window.scrollTo(0, target);
	}

	target++;
	window.scrollTo(0, target);
	container.style.transform = `translateY(-${target}px)`;
	requestAnimationFrame(autoScroll);
}

document.addEventListener("DOMContentLoaded", () => {
	window.scrollTo(0, 1);
	autoScroll();
});
