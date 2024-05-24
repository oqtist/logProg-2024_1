let nums = []

while (nums.length < 10) {
    nums.push(Number(prompt(`Digite o ${nums.length + 1}º número:`)))
}

let verifyImpares = nums.every(function (nums) {
    return nums % 2 != 0
})

if(verifyImpares == false) {
    alert('Nem todos os números são ímpares.')
} else {
    alert('Todos os números são ímpares.')
}

console.log(verifyImpares);