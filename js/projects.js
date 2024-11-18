import { i as initializeNavbar } from "./navbar.js";
import { a as applySavedTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
	initializeNavbar();
	applySavedTheme();
});