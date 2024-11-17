document.getElementById('changeTheme').addEventListener('click', () => {
	document.body.classList.toggle('dark-theme');
	document.querySelector('.container').classList.toggle('dark-theme');
});