function calcular() {
    let nome = document.getElementById('nome')
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let imc
    let res = document.getElementById('res')

    if (peso.value.length == 0 || altura.value.length == 0) {
        alert('[ERRO] Digite os dados corretamente!')
        altura.value = ""
        peso.value = ""
    } else {
        peso = parseFloat(peso.value)
        altura = parseFloat(altura.value)

        imc = (peso / (altura ** 2)) * 10000
        res.innerHTML = `O IMC do paciente ${nome.value} é: ${imc.toFixed(2)}`
        if (imc < 18.5) {
            res.innerHTML += `<br>${nome.value}, segundo os dados da tabela, você está abaixo do peso !`
        } else if (imc <= 24.9) {
            res.innerHTML += `<br>${nome.value}, segundo os dados da tabela, você está no peso ideal !`
        } else if (imc <= 29.9) {
            res.innerHTML += `<br>${nome.value}, segundo os dados da tabela, você está acima do peso !`
        } else if (imc <= 34.9) {
            res.innerHTML += `<br>${nome.value}, segundo os dados da tabela, você está na Obesidade I !`
        } else if (imc <= 39.9) {
            res.innerHTML += `<br>${nome.value}, segundo os dados da tabela, você está na Obesidade II ! `
        } else if (imc >= 40) {
            res.innerHTML += `<br>${nome.value}, segundo os dados da tabela, você está na Obesidade III ! `
        }
    }
}