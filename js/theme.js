function changeTheme() {
    const changeThemeButton = document.getElementById('changeTheme');
    if (changeThemeButton) {
        changeThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            document.querySelector('.container').classList.toggle('dark-theme');
            document.querySelector('#frontcontent').classList.toggle('dark-mode'); // Added line to toggle dark mode for frontcontent
        });
    }
}
export { changeTheme as c };

