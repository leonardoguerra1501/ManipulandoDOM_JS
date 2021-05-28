var botaoADicionar = document.querySelector("#adicionar-paciente");

botaoADicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-add")

    var paciente = obtemPacienteDoFormulario(form)

    var pacienteTr = montaTr(paciente)

    var erro = validaPaciente(paciente)

    
    console.log(erro)
    
    if (erro.length > 0){
        exibeMensagensDeErro(erro)
        return      
        
    }
    
    //Adicionando a linha na tabela 
    var tabela = document.querySelector("#tabela-pacientes")
    
    tabela.appendChild(pacienteTr)
    
    form.reset()
    
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML ="" 

    
    

})

function exibeMensagensDeErro (erros){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML ="" 

    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
        
    });

}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }
    return paciente

}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    //Estruturando a linha do paciente
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"))

    return pacienteTr

}

function montaTd(dado,classe){
    var td = document.createElement("td")
    td.classList.add(classe)
    td.textContent = dado

    return td
}
function validaPaciente(paciente){
    
    var erros =[]
    
    if (paciente.nome.length == 0) erros.push("Nome inválido")
    if (!validaPeso(paciente.peso)) erros.push("Peso inváldo")
    if (!validaAltura(paciente.altura)) erros.push("Altura inválida")
    if (paciente.gordura.length == 0) erros.push("Gordura inválda")

   
    return erros

}