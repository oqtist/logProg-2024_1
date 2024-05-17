    let lista = []
    let listaDisp = document.getElementById('ex1-lista')

    for(i=0;i<15;i++) {
        lista.push(`${i + 1}`)
    }
    
    listaDisp.innerHTML = (`${lista.join('\n')}`)

    function ex1corrigir() {
        lista.splice(5,10)
        listaDisp.innerHTML = (`${lista.join('\n')}\n:)`)
    }