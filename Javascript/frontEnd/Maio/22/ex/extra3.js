let nums = []
let maior
let menor

for(let i=0;nums.length<5;i++) {
    nums.push(Number(prompt(`Digite o ${nums.length + 1}º número:`)))
    if(i == 0) {
        maior = nums[i]
        menor = nums[i]
    }
    maiorNum(nums[i], maior)
    menorNum(nums[i], menor)
}

function maiorNum(num, numMaior) {
    if(num > numMaior) {
        maior = num
    }
    return maior
}

function menorNum(num, numMenor) {
    if(num < numMenor) {
        menor = num
    }
    return menor
}

alert(`Maior Número: ${maior}\nMenor Número: ${menor}`)