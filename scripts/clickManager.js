menu = document.querySelector("#menu");
email = document.querySelector("#email");
overlay = document.querySelector("#overlay");
navItems = document.querySelectorAll(".navItem")
console.log(navItems[0])

// function mailClick(){
//     if (email.classList.contains('visible')) {
//         email.classList.remove('visible');
//         setTimeout(() => email.style.display = 'none', 100); // Tiempo debe coincidir con el de la transición
//     } else {
//         email.style.display = 'flex';
//         setTimeout(() => email.classList.add('visible'), 10); // Pequeño retraso para permitir la aplicación de estilos
//     }
// }
function showMenu(show){
    console.log(show)
    if(show){
        overlay.style.display = "block";
        menu.classList.add('visible');
    }
    else{
        overlay.style.display = "none";
        menu.classList.remove('visible');
    }
}
function copyEmail(){
    navigator.clipboard.writeText("ismael21502@gmail.com").then(function() {
        alert('Email copiado correctamente');
    }).catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
}
function navItemClick(number){
    navItems.forEach(navItem => {
        navItem.classList.remove('active');
    });
    navItems[number].classList.add('active');
}