// Toggle between dark and light mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Optionally, change button text
    const btn = document.getElementById('toggleBtn');
    if (body.classList.contains('dark-mode')) {
        btn.textContent = 'Switch to Light Mode';
    } else {
        btn.textContent = 'Switch to Dark Mode';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('toggleBtn');
    btn.addEventListener('click', toggleMode);
});
