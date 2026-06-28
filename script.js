// Seleciona os elementos do HTML
const inputPesquisa = document.querySelector('.pesquisa input');
const botaoPesquisa = document.querySelector('.pesquisa button');
const cardsProdutos = document.querySelectorAll('.card');

// Função que faz a filtragem
function filtrarProdutos() {
    const termoBusca = inputPesquisa.value.toLowerCase().trim();

    cardsProdutos.forEach(card => {
        // Pega o texto do título (h2) de cada produto
        const tituloProduto = card.querySelector('h2').textContent.toLowerCase();

        // Se o título contiver o termo buscado, mostra o card, senão esconde
        if (tituloProduto.includes(termoBusca)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Escuta o clique no botão de lupa
botaoPesquisa.addEventListener('click', filtrarProdutos);

// Também funciona se o usuário apertar "Enter" dentro do campo de texto
inputPesquisa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        filtrarProdutos();
    }
});