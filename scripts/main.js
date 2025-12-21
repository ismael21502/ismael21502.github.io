document.addEventListener('DOMContentLoaded', ()=> {
    initCopyEmail();
    initDownloadCV();
})

function initCopyEmail() {
    const copyBtn = document.querySelector("[data-copy-email]");
    if (!copyBtn) return;

    copyBtn.addEventListener("click", copyEmail);
}

function copyEmail() {
    navigator.clipboard.writeText("ismael21502@gmail.com").then(function () {
        alert('Email copiado correctamente');
    }).catch(function (error) {
        console.error('Error al copiar el texto: ', error);
    });
}