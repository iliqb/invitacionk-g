window.addEventListener("load", () => {
  const modal = document.querySelector(".modal-bienvenida");
  modal.style.display = "flex";
});
// Función para cerrar el modal
function cerrarModalWelcome() {
  const modal = document.querySelector(".modal-bienvenida");
  modal.style.display = "none";
}

// Función para cerrar el menú
function cerrarMenu() {
  const menu = document.querySelector(".estilos-menu");
  menu.style.display = "none";
}

// Función para cambiar el tema
function cambiarTema(tema) {
  document.body.className = tema; // Cambiar el tema del body
}
// cuenta regresiva
const fechaBoda = new Date("2025-11-01T00:00:00").getTime();
const cuenta = document.getElementById("cuenta-regresiva");

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaBoda - ahora;

  const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diferencia % (1000 * 60)) / 1000);

  cuenta.textContent = `${d} días ${h}h ${m}m ${s}s`;
}, 1000);

// musica
const musica = document.getElementById("musica");
const btnIngresar = document.getElementById("btn-ingresar");
const btnMusica = document.querySelector(".btn-musica");
const iconoMusica = btnMusica.querySelector("div"); // Ícono dentro del botón

btnIngresar.addEventListener("click", () => {
  cerrarModalWelcome();

  musica
    .play()
    .then(() => {
      console.log("Música reproduciéndose");
      btnMusica.classList.remove("pausa");
      iconoMusica.classList.remove("icono-silencio");
      iconoMusica.classList.add("icono-sonando");
    })
    .catch((error) => {
      console.log("No se pudo reproducir la música automáticamente:", error);
    });
});

btnMusica.addEventListener("click", reproducirMusica);

function reproducirMusica() {
  if (musica.paused) {
    musica
      .play()
      .then(() => {
        btnMusica.classList.remove("pausa");
        iconoMusica.classList.remove("icono-silencio");
        iconoMusica.classList.add("icono-sonando");
      })
      .catch((error) => {
        console.log("Error al reproducir:", error);
      });
  } else {
    musica.pause();
    btnMusica.classList.add("pausa");
    iconoMusica.classList.remove("icono-sonando");
    iconoMusica.classList.add("icono-silencio");
  }
}

function cerrarModalWelcome() {
  const modal = document.querySelector(".modal-bienvenida");
  if (modal) modal.style.display = "none";
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".event").forEach((event) => {
  observer.observe(event);
});
