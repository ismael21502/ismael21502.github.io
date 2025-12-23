
document.addEventListener("DOMContentLoaded", () => {
    initCopyEmail();
    
    // initDownloadCV(); // si ya existe o la crearás
});

function initCopyEmail() {
    const copyBtn = document.querySelector("[data-copy-email]");
    if (!copyBtn) return;

    copyBtn.addEventListener("click", copyEmail);
}

function copyEmail() {
    const copyBtn = document.querySelector("[data-copy-email]");
    navigator.clipboard.writeText("ismael21502@gmail.com").then( () => {
        copyBtn.classList.add("copied");

        setTimeout(() => {
            copyBtn.classList.remove("copied");
        }, 1000);
    }).catch(function (error) {
        console.error('Error al copiar el texto: ', error);
    });
}