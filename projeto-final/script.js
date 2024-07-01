
const popup = document.querySelector('#div-popup')
function fecharPopup() {
    popup.classList.toggle('oculta')
}
function fecharPopupFilme() {
    divPopupFilme.classList.toggle('oculta')
}

const divPopupFilme = document.querySelector('#div-popup-filme')
const botaoFecharPopupFilme = document.querySelector('#botao-fechar-filme')


let informacoesFilmes = []
const filme1 = document.querySelector('#filme-1')
const filme2 = document.querySelector('#filme-2')
const filme3 = document.querySelector('#filme-3')
const filme4 = document.querySelector('#filme-4')
const filme5 = document.querySelector('#filme-5')
const filme6 = document.querySelector('#filme-6')
const filme7 = document.querySelector('#filme-7')
const filme8 = document.querySelector('#filme-8')
const filme9 = document.querySelector('#filme-9')
const filme10 = document.querySelector('#filme-10')
const filme11 = document.querySelector('#filme-11')
const divMenu = document.querySelector('#div-adicionar-filme')



function enviarFilme(evento) {
    evento.preventDefault()

    const form = document.querySelector('form')
    const inputs = new FormData(form)

    const urlCapa = inputs.get('foto-da-capa')
    const titulo = inputs.get('titulo')
    const diretor = inputs.get('diretor')
    const dataLancamento = inputs.get('data-lancamento')
    const genero = inputs.get('genero')
    const sinopse = inputs.get('sinopse')

    informacoesFilmes.push(titulo, urlCapa, 'Título: ' + titulo, 'Diretor: ' + diretor, 'Ano de Lançamento: ' + dataLancamento, 'Gênero: ' + genero, 'Sinopse: ' + sinopse)

    const arrayConvertido = JSON.stringify(informacoesFilmes)
    localStorage.setItem('arraySalvo', arrayConvertido)

    switchCarregar()

    console.log(informacoesFilmes.length);
    console.log(informacoesFilmes);
}

if (localStorage.getItem('arraySalvo')) {
    informacoesFilmes = JSON.parse(localStorage.getItem('arraySalvo'))
}

function switchCarregar() {
    switch (true) {
        case informacoesFilmes.length >= 77:
            divMenu.innerHTML = (`<p>O total de filmes foi alcançado. Tente remover um filme.</p>`)
            filme11.style.backgroundImage = `url("${informacoesFilmes[71]}")`;
            if (informacoesFilmes[70]) {
                filme11.innerHTML = `${informacoesFilmes[70]}`
            }
        case informacoesFilmes.length >= 7:
            filme1.style.backgroundImage = `url("${informacoesFilmes[1]}")`;
            if (informacoesFilmes[0]) {
                filme1.innerHTML = `${informacoesFilmes[0]}`
            }
        case informacoesFilmes.length >= 14:
            filme2.style.backgroundImage = `url("${informacoesFilmes[8]}")`;
            if (informacoesFilmes[7]) {
                filme2.innerHTML = `${informacoesFilmes[7]}`
            }
        case informacoesFilmes.length >= 21:
            filme3.style.backgroundImage = `url("${informacoesFilmes[15]}")`;
            if (informacoesFilmes[14]) {
                filme3.innerHTML = `${informacoesFilmes[14]}`
            }
        case informacoesFilmes.length >= 28:
            filme4.style.backgroundImage = `url("${informacoesFilmes[22]}")`;
            if (informacoesFilmes[21]) {
                filme4.innerHTML = `${informacoesFilmes[21]}`
            }
        case informacoesFilmes.length >= 35:
            filme5.style.backgroundImage = `url("${informacoesFilmes[29]}")`;
            if (informacoesFilmes[28]) {
                filme5.innerHTML = `${informacoesFilmes[28]}`
            }
        case informacoesFilmes.length >= 42:
            filme6.style.backgroundImage = `url("${informacoesFilmes[36]}")`;
            if (informacoesFilmes[35]) {
                filme6.innerHTML = `${informacoesFilmes[35]}`
            }
        case informacoesFilmes.length >= 49:
            filme7.style.backgroundImage = `url("${informacoesFilmes[43]}")`;
            if (informacoesFilmes[42]) {
                filme7.innerHTML = `${informacoesFilmes[42]}`
            }
        case informacoesFilmes.length >= 56:
            filme8.style.backgroundImage = `url("${informacoesFilmes[50]}")`;
            if (informacoesFilmes[49]) {
                filme8.innerHTML = `${informacoesFilmes[49]}`
            }
        case informacoesFilmes.length >= 63:
            filme9.style.backgroundImage = `url("${informacoesFilmes[57]}")`;
            if (informacoesFilmes[56]) {
                filme9.innerHTML = `${informacoesFilmes[56]}`
            }
        case informacoesFilmes.length >= 70:
            filme10.style.backgroundImage = `url("${informacoesFilmes[64]}")`;
            if (informacoesFilmes[63]) {
                filme10.innerHTML = `${informacoesFilmes[63]}`
            }
        default:
            break
    }
}

function popupFilme(evento) {
    divPopupFilme.innerHTML = (`<button onclick="fecharPopupFilme()" class="fechar-popup">x</button>`)
    switch(evento.target.id) {
        case 'filme-1':
            if (informacoesFilmes[0]) {
                for(i=2;i<7;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                }
                divPopupFilme.classList.remove('oculta')
            }
            console.log(contador);
            break
        case 'filme-2':
            if (informacoesFilmes[7]) {
                for(i=9;i<14;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            break
        case 'filme-3':
            if (informacoesFilmes[14]) {
                for(i=16;i<21;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            break
        case 'filme-4':
            if (informacoesFilmes[21]) {
                for(i=23;i<28;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            break
        case 'filme-5':
            if (informacoesFilmes[28]) {
                for(i=30;i<35;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            break
        case 'filme-6':
            if (informacoesFilmes[35]) {
                for(i=37;i<42;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            break
        case 'filme-7':
            if (informacoesFilmes[42]) {
                for(i=44;i<49;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            break
        case 'filme-8':
            if (informacoesFilmes[49]) {
                for(i=51;i<56;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            break
        case 'filme-9':
            if (informacoesFilmes[56]) {
                for(i=58;i<63;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            break
        case 'filme-10':
            if (informacoesFilmes[63]) {
                for(i=65;i<70;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            break
        case 'filme-11':
            if (informacoesFilmes[70]) {
                for(i=72;i<77;i++) {
                    divPopupFilme.innerHTML += (`${informacoesFilmes[i]}<br>`)
                    divPopupFilme.classList.remove('oculta')
                }
            }
            break
        default:
            break
    }
}


function clearLocalStorage() {
    localStorage.clear()
}