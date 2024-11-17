function changeTheme() {
    const changeThemeButton = document.getElementById('changeTheme');
    if (changeThemeButton) {
        changeThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');

            // Select all elements with the 'container' class
            const containers = document.querySelectorAll('.container');
            containers.forEach(container => {
                container.classList.toggle('dark-theme');
            });

            // Save the current theme state to localStorage
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('darkTheme', isDark);
        });
    }
}

// Function to apply the saved theme on page load
function applySavedTheme() {
    const isDark = localStorage.getItem('darkTheme') === 'true';
    if (isDark) {
        document.body.classList.add('dark-theme');
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.classList.add('dark-theme');
        });
    }
}

export { changeTheme as c, applySavedTheme as a };

