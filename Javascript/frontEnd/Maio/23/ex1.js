let convite = function(nomeConvidado, data, horario, local, nomeNoivos) {
    alert(`Prezado(a) ${nomeConvidado}.\nVocê está convidado(a) para o casamento de ${nomeNoivos}!\n${local} no dia ${data} às ${horario}.`)
}

convite(prompt('Escreva o nome do convidado:'), prompt('Escreva a data: (DD/MM)'), prompt('Escreva o horário: (HH:MM)'), prompt('Escreva o local:'), prompt('Escreva o nome dos noivados:'))