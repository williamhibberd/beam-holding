const container = document.querySelector("#container");
const content = document.querySelector("#content");
const innerItems = [...content.querySelectorAll(".inner-item")];

innerItems.forEach((item) => {
	let clonedItems = item.cloneNode(true);
	content.appendChild(clonedItems);
});

// Set scroll dimensions
function init() {
	// document.body.style.height = `${content.getBoundingClientRect().height}px`;
}
window.addEventListener("resize", init);

let target = 1;

function foo() {
	target = window.scrollY;

	console.log(content.offsetHeight);
	console.log(target);

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
	requestAnimationFrame(foo);
}

init();

document.addEventListener("DOMContentLoaded", () => {
	window.scrollTo(0, window.innerHeight * 0.3);
	foo();
});
