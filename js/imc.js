var titulo = document.querySelector(".titulo")
titulo.textContent = "Tabela Nutricionista"

var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {

    paciente = pacientes[i]

    var TdPeso = paciente.querySelector(".info-peso")

    var peso = TdPeso.textContent

    var TdAltura = paciente.querySelector(".info-altura")
    var altura = TdAltura.textContent

    var TdImc = paciente.querySelector(".info-imc")

    var validacaoPeso = validaPeso(peso)
    var validacaoAltura = validaAltura(altura)

    if (!validacaoPeso) {
        TdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")

    }
    if (!validacaoAltura) {
        TdImc.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido")

    }

    if (validacaoAltura && validacaoPeso) {
        var imc = calcImc(peso,altura)
        TdImc.textContent = imc
    }

}
function validaPeso(peso){
    if(peso>0 && peso <1000){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if (altura>0 && altura <= 3.0){
        return true
    }else{
        return false
    }
}

function calcImc(peso,altura){
    var imc = 0; 

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}



