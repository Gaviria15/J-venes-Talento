const submenuLinks = document.querySelectorAll('.submenu');

submenuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el clic se propague al contenedor principal
    link.classList.toggle('active'); // Alternar la clase 'active' para mostrar u ocultar el submenú
  });
});

// Cierra los submenús si se hace clic fuera de ellos
document.addEventListener('click', function(event) {
  submenuLinks.forEach(link => {
    if (!link.contains(event.target)) {
      link.classList.remove('active');
    }
  });
});