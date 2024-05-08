const form = document.getElementById('form-agenda');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
})


function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato  = document.getElementById('numero-contato')
}

let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;

    linhas += linha

    function atualizaTabela(){
        const corpoTabela = document.querySelector('tbody'); 
        corpoTabela.innerHTML = linhas;
    }   