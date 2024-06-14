const gouda = document.querySelector('h1')
const html = document.querySelector('html')
let graus = 0

gouda.onclick = function () {
    graus += 15
    html.style.filter = (`hue-rotate(${graus}deg)`)
    console.log(graus);
    if (graus == 360) {
        graus = 0
    }
}