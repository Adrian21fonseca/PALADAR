const abrir_menu = document.querySelector ("#btn-abrir")
const cerrar_menu = document.querySelector ("#btn-cerrar")
const navegador = document.querySelector ("#navegador")

abrir_menu.addEventListener("click" , () => {
    navegador.classList.add("visible")
})

cerrar_menu.addEventListener("click" , () => {
    navegador.classList.remove("visible")
})