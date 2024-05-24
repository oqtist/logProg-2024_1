let nums = []

while (nums.length < 10) {
    nums.push(Number(prompt(`Digite o ${nums.length + 1}º número:`)))
}

let quadrado = nums.map((nums) => nums ** 2)

alert(`Array:\n${nums.join('\n')}\nArray²:\n${quadrado.join('\n')}`)