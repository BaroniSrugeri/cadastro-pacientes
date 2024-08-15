document.getElementById('cad-form').addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome"); addTodo(nome.value);
    nome.value = "";
    const idade = document.getElementById("idade"); addTodo(idade.value);
    idade.value = "";
    const sexo = document.getElementById("sexo"); addTodo(sexo.value);
    sexo.value = "";
    const endereco = document.getElementById("endereco"); addTodo(endereco.value);
    endereco.value = "";
    const telefone = document.getElementById("telefone"); addTodo(telefone.value);
    telefone.value = "";
    const email = document.getElementById("email"); addTodo(email.value);
    email.value = "";
    const cpf = document.getElementById("cpf"); addTodo(cpf.value);
    cpf.value = "";
    const histmed = document.getElementById("histmed"); addTodo(histmed.value);
    histmed.value = "";
});
function addTodo(tarefa) {
    const form = document.getElementById("cad-form");
    const listItem = document.createElement("table");
    listItem.textContent = dados;
    form.appendChild(listItem);
}