function sumar() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").innerText = resultado;
}

function restar() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const resultado = num1 - num2;
    document.getElementById("resultado").innerText = resultado;
}

function multiplicar() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const resultado = num1 * num2;
    document.getElementById("resultado").innerText = resultado;
}

function dividir() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    if (num2 !== 0) {
        const resultado = num1 / num2;
        document.getElementById("resultado").innerText = resultado;
    } else {
        document.getElementById("resultado").innerText = "Error: División por cero";
    }
}