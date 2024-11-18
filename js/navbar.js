import { c as t } from "./theme.js";

let a = 0;
const o = document.querySelector("nav");

function u() {
    document.querySelector("nav").innerHTML = `
        <span class="nav-label">Paul's Webpage</span>
            <div class="nav-button">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="hobbies.html">Hobby</a>
                <a href="projects.html">Projects</a>
                <a href="contact.html">Contact</a>
                <button id="changeTheme">
                    <img src="img/contrast-filled-svgrepo-com.svg" alt="Change Theme" />
                </button>
            </div>
    `;
    t(); // Initialize theme toggle
    document.querySelector("footer").innerHTML = `
        <h6>©2024 Paul</h6>
    `;
}

export { u as i };