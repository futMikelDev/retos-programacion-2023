function tablaDeMultiplicar (num) {
    const multiplicador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i <= multiplicador.length - 1; i++) {
        console.log(`${num} X ${multiplicador[i]} = ${num * multiplicador[i]}`)
    }
}
