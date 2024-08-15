const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const sexo = document.getElementById("sexo");
const endereco = document.getElementById("endereco");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const histmed = document.getElementById("histmed");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    checkForm();
  })
  
  email.addEventListener("blur", () => {
    checkInputEmail();
  })
  
  
  nome.addEventListener("blur", () => {
    checkInputUsername();
  })
  
  

function checkInputNome() {
    const nome = nome.value;

    if (usernameValue === "") {
        errorInput(nome, "Preencha com seu nome!")
    } else {
        const formItem = nome.parentElement;
        formItem.className = "form_container"
    }

}

function checkInputIdade() {
    const idade = idade.value;

    if (usernameValue === "") {
        errorInput(idade, "Selecione a sua data de nascimento")
    } else {
        const formItem = idade.parentElement;
        formItem.className = "form_container"
    }

}
function checkInputSexo() {
    const sexo = sexo.value;

    if (usernameValue === "") {
        errorInput(sexo, "Selecione seu sexo!")
    } else {
        const formItem = sexo.parentElement;
        formItem.className = "form_container"
    }

}
function checkInputEndereco() {
    const endereco = endereco.value;

    if (usernameValue === "") {
        errorInput(endereco, "Coloque seu endereço")
    } else {
        const formItem = endereco.parentElement;
        formItem.className = "form_container"
    }

}
function checkInputTelefone() {
    const telefone = telefone.value;

    if (usernameValue === "") {
        errorInput(telefone, "Preencha com seu telefone!")
    } else {
        const formItem = telefone.parentElement;
        formItem.className = "form_container"
    }

}
function checkInputEmail() {
    const email = email.value;

    if (usernameValue === "") {
        errorInput(email, "Preencha com seu email!")
    } else {
        const formItem = telefone.parentElement;
        formItem.className = "form_container"
    }

}
function checkInputCPF() {
    const cpf = cpf.value;

    if (usernameValue === "") {
        errorInput(cpf, "Preencha com seu cpf!")
    } else {
        const formItem = cpf.parentElement;
        formItem.className = "form_container"
    }

}
function checkInputHistMed() {
    const histmed = histmed.value;

    if (usernameValue === "") {
        errorInput(histmed, "Preencha com seu histórico médico!")
    } else {
        const formItem = histmed.parentElement;
        formItem.className = "form_container"
    }

}

function addTodo(tarefa) {
    const form = document.getElementById("cad-form");
    const listItem = document.createElement("table");
    listItem.textContent = dados;
    form.appendChild(listItem);
}

function checkInputConfirmarSenha(){
    const senha = senha.value;
    const confirmarsenha = confirmarsenha.value;
  
    if(confirmarsenha === ""){
      errorInput(confirmarsenha, "A confirmação de senha é obrigatória.")
    }else if(confirmarsenha !== senha){
      errorInput(confirmarsenha, "As senhas não são iguais.")
    }else{
      const formItem = confirmarsenha.parentElement;
      formItem.className = "form-content"
    }
  
  
  }

function checkForm() {
    checkInputName();
    checkInputEmail();
    checkInputSenha();
    checkInputConfirmarSenha();

    const formItems = form.querySelectorAll(".form_container")

    const isValid = [...formItems].every((item) => {
        return item.className === "form_container"
    });

    if (isValid) {
        alert("CADASTRADO COM SUCESSO!")
    }

}
function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
  
    textMessage.innerText = message;
  
    formItem.className = "form-content error"
  
  }
