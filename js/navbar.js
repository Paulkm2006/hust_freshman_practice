let a = 0;
const o = document.querySelector("nav");

function c() {
	window.addEventListener("scroll", () => {
		let r = window.scrollY;
		if (r > a) {
			o.classList.remove("nav-in", "nav-out");
			o.classList.add("nav-out");
		} else {
			o.classList.add("nav-in", "nav-out");
			o.classList.remove("nav-out");
		}
		a = r;
	});
}

function u() {
	document.querySelector("nav").innerHTML = `
		<span class="nav-label">Paul's Webpage</span>
		<div class="nav-button">
			<a href="index.html">Home</a>
			<a href="about.html">About</a>
			<a href="projects.html">Projects</a>
			<a href="contact.html">Contact</a>
		</div>
	`;
	c();
	document.querySelector("footer").innerHTML = `
		<h6>©2024 Paul</h6>
	`;
}

export { u as i };