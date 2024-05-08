const form = document.getElementById('form-agenda');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById ('nome-contato');
    const inputNumeroContato = document.getElementById ('numero-contato');
    
    
    contatos.push(inputNomeContato.value);
    numeros.push(inputNumeroContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}`;
    linha += `<td>${inputNumeroContato.value}`;
    linha += '</tr>';

    linhas += linha

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
