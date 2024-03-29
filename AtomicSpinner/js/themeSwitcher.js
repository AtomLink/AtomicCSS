// These additional codes have nothing to do with the main code.

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    const themeStylesheet = document.getElementById('themeStylesheet');
    themeStylesheet.href = isDarkTheme ? 'css/dark-theme.css' : 'css/light-theme.css';
}
const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', toggleTheme);