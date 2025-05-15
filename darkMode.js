const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.classList.toggle('dark');
  
  // Guardar preferencia en localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});

// Cargar preferencia al inicio
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  toggleBtn.classList.add('dark');
}