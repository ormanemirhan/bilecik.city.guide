const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Tema durumunu kontrol et
const savedTheme = localStorage.getItem('theme') || 'light';
if(savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '🌙';
}

// Tıklandığında tema değiştir
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '🌙' : '🌞';
});