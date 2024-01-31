const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const tituloProduto = document.getElementById('titulo-produto')
const miniatura0 = document.getElementById('0-imagem-miniatura');
const miniatura1 = document.getElementById('1-imagem-miniatura');
const miniatura2 = document.getElementById('2-imagem-miniatura');
const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');


function Cor(nome, pasta) {
    this.nome = nome;
    this.pasta = pasta;
}

const verdeCipreste = new Cor('Verde-cipreste', 'imagens-verde-cipreste');
const azulInverno = new Cor('Azul-inverno', 'imagens-azul-inverno');
const meiaNoite = new Cor('Meia-noite', 'imagens-meia-noite');
const estelar = new Cor('Estelar', 'imagens-estelar');
const rosaClaro = new Cor('Rosa-claro', 'imagens-rosa-claro');

const cores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

let imagemSelecionada = '1';

function trocarImagem() {
    const opcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = opcaoSelecionada.charAt(0);
    imagemVisualizacao.src = `./imagens/opcoes-cores/${cores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
};

const tamanhos = ['41mm', '45mm'];
let tamanhoSelecionado = 1;

function trocarTamanho() {
    const tamanhoSelecionadoID = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = tamanhoSelecionadoID.charAt(0);

    if (tamanhoSelecionado == 0) {
        imagemVisualizacao.classList.add('caixa-pequena');
        tituloProduto.innerText = `Pulseira loop esportiva ${cores[corSelecionada].nome} para caixa de ${tamanhos[tamanhoSelecionado]}`
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
        tituloProduto.innerText = `Pulseira loop esportiva ${cores[corSelecionada].nome} para caixa de ${tamanhos[tamanhoSelecionado]}`
    }
}

let corSelecionada = 1;

function trocarCor() {
    const corSelecionadaID = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = corSelecionadaID.charAt(0);

    tituloProduto.innerText = `Pulseira loop esportiva ${cores[corSelecionada].nome} para caixa de ${tamanhos[tamanhoSelecionado]}`;
    nomeCorSelecionada.innerText = `Cor - ${cores[corSelecionada].nome}`;

    miniatura0.src = `./imagens/opcoes-cores/${cores[corSelecionada].pasta}/imagem-0.jpeg`;
    miniatura1.src = `./imagens/opcoes-cores/${cores[corSelecionada].pasta}/imagem-1.jpeg`;
    miniatura2.src = `./imagens/opcoes-cores/${cores[corSelecionada].pasta}/imagem-2.jpeg`;

    imagemVisualizacao.src = `./imagens/opcoes-cores/${cores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`
}

