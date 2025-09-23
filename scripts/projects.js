// --- Elementos principales ---
const overlay = document.querySelector(".overlay");
const closeOverlayButton = document.querySelector(".closeOverlay");
const indicatorsContainer = document.querySelector(".slidesIndicatorsContainer");
const carouselImages = document.querySelectorAll(".carouselImage");
const track = document.querySelector(".imagesTrack");
const overlayImage = document.querySelector("#overlayImage");

// --- Funciones auxiliares ---
function openOverlay(imageUrl) {
    overlay.style.display = "flex";
    overlayImage.src = imageUrl;
}

function closeOverlay() {
    overlay.style.display = "none";
}

// --- Lógica del carrusel ---
indicatorsContainer.addEventListener("click", function (event) {
    const clickedIndicator = event.target;

    // Ignorar clics fuera de los indicadores
    if (!clickedIndicator.classList.contains("slidesIndicator")) return;

    // Obtener lista de indicadores e índice clickeado
    const indicators = Array.from(indicatorsContainer.querySelectorAll(".slidesIndicator"));
    const index = indicators.indexOf(clickedIndicator);
    console.log("Índice clickeado:", index);

    // Actualizar indicador activo
    const currentActiveIndicator = indicatorsContainer.querySelector(".active");
    if (currentActiveIndicator) currentActiveIndicator.classList.remove("active");
    clickedIndicator.classList.add("active");

    // Definir gap
    const gap = index === 0 ? "0px" : "10px";

    // Mover track
    track.style.transform = `translateX(calc(-${100 * index}% - ${gap}))`;
});

// --- Lógica del overlay ---
carouselImages.forEach((img) => {
    img.addEventListener("click", function () {
        openOverlay(this.src);
    });
});

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeOverlay(); // solo cerrar si se hace clic en el fondo
});

closeOverlayButton.addEventListener("click", closeOverlay);
