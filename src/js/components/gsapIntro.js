import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function intro() {
	console.log("intro running");
	const introTl = gsap.timeline({
		defaults: {
			duration: 0.5,
		},
	});
	introTl.fromTo(
		"body",
		{
			opacity: 0,
			backgroundColor: "#fff",
		},
		{
			opacity: 1,
			backgroundColor: "#6871FF",
		}
	);
	introTl.to("header", {
		opacity: 1,
	});
	introTl.to(
		"footer",
		{
			opacity: 1,
		},
		"<"
	);
	introTl.to("main", {
		opacity: 1,
	});
	introTl.to(
		"#fixed-text",
		{
			opacity: 1,
		},
		"<"
	);
}

function textOne() {
	console.log("textOneTl running");
	var textOneTl = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: "#trigger",
			start: "top center",
			end: () => `+=${window.innerHeight}px`,
			scrub: true,
		},
	});
	textOneTl.to("#text-1", {
		opacity: 1,
	});
	textOneTl.fromTo(
		"body",
		{
			backgroundColor: "#6871FF",
		},
		{
			backgroundColor: "#CCAFF3",
		},
		"<"
	);
	textOneTl.to("#text-1", {
		opacity: 0,
	});
}
function textTwo() {
	console.log("textTwoTl running");
	var textTwoTl = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: "#trigger",
			start: () => `top+=${window.innerHeight} center`,
			end: () => `+=${window.innerHeight}px`,
			scrub: true,
		},
	});
	textTwoTl.to("#text-2", {
		opacity: 1,
	});
	textTwoTl.fromTo(
		"body",
		{
			backgroundColor: "#CCAFF3",
		},
		{
			backgroundColor: "#93CC9C",
		},
		"<"
	);
	textTwoTl.to("#text-2", {
		opacity: 0,
	});
	textTwoTl.fromTo(
		"body",
		{
			backgroundColor: "#73854B",
		},
		{
			backgroundColor: "#6871FF",
		},
		"<"
	);
}

document.addEventListener("DOMContentLoaded", () => {
	intro();
	textOne();
	textTwo();
});
