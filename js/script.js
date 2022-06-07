function exibirFormulario() {
    //exibindo formulário para criar uma nova tarefa
    document.getElementById("form1").style.display="block";
}

function criarNovaTarefa() {
    //pegando valores
    var titulo = document.getElementById("titulo");
    var descricao = document.getElementById("descricao");
    var listagem = document.getElementById("listagem");

    if(titulo.value == "" || descricao.value == "") {
        window.alert('Preencha os campos corretamente!');
        return;
    }

    //criando elemento na tela
    listagem.innerHTML+=`<div class='item'>
                            <img src='img/del.png' onclick='apagarTarefa(this)'>
                            <h2>${titulo.value}</h2>
                            <p>${descricao.value}</p>
                        </div>`;

    //limpando campos
    titulo.value = "";
    descricao.value = "";
}

function apagarTarefa(btn) {
    //pegando elemento "pai" do botão
    var item = btn.parentNode;

    //removendo elemento
    item.parentNode.removeChild(item);
}