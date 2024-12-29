
function toggleMode() {
    const body = document.body;
    const title = document.getElementById('title');
    const image = document.getElementById('mode-image');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        title.textContent = 'Dark Mode';
        image.src = 'dark-mode.png';
        image.alt = 'Dark Mode';
    } else {
        title.textContent = 'Light Mode';
        image.src = 'light-mode.png';
        image.alt = 'Light Mode';
    }
}
