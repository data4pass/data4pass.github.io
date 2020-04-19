const headerAnim = () => {
    let nav = document.querySelector("header")
    let scroll = this.scrollY
    console.log(scroll)
    scroll > 20 ? nav.style.backgroundColor = "#222" : nav.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
}
const clearForm = () => {
    document.querySelector("#nameInput").value = ""
    document.querySelector("#emailInput").value = ""
    document.querySelector("#messageInput").value = ""
}
const warn = () => {
    let dangerBox = document.querySelector(".danger")
    dangerBox.style.display = "block"
    const handler = () => dangerBox.style.display = "none"
    setTimeout(handler, 15000)
}
window.addEventListener("scroll", headerAnim , false)