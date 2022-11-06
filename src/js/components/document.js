export default function document() {
	return {
		show: false,

		init() {
			this.$nextTick(() => {
				this.show = true;
			});
		},
	};
}

// https://www.youtube.com/watch?v=iNcvKWHwrBI
// https://github.com/conorbailey90/infinite-gallery/blob/main/app.js

// const content = document.querySelector("body");
// const scrollable = document.querySelector("body");

// let target = 1;
// let reverse = false;

// function scroll() {
// 	target = window.scrollY;

// 	if (target <= 0) {
// 		target = content.offsetHeight / 2 - 1;
// 		window.scrollTo(0, target);
// 	} else if (target >= content.offsetHeight / 2) {
// 		target = 1;
// 		window.scrollTo(0, target);
// 	}

// 	if (reverse) {
// 		target--;
// 	} else {
// 		target++;
// 	}
// 	window.scrollTo(0, target);
// 	scrollable.style.transform = `translateY(-${target}px)`;
// 	requestAnimationFrame(scroll);
// 	console.log(target);
// }

// scroll();
