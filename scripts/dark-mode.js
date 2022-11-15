const themeButton = document.querySelector('#theme-button');
const body = document.querySelector('.body');
function toggleTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  localStorage.setItem('theme', newTheme);
  themeButton.classList.toggle('dark');
}
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('preload');
  toggleTheme();
  setTimeout(() => {
    body.classList.remove('preload');
  }, 1000);
}
themeButton.addEventListener('click', toggleTheme);