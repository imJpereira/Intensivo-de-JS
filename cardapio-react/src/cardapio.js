import enroladinhoMignonImg from './assets/pratos/enroladinho-mignon.jpeg';
import casal20Img from './assets/pratos/casal-20.jpeg';
import burguerPicanhaImg from './assets/pratos/burguer-picanha.jpeg';
import fishChipsImg from './assets/pratos/fish-chips.jpeg';
import risotoCamaraoTrufadoImg from './assets/pratos/risoto-camarao-trufado.jpeg';

import brownieImg from './assets/sobremesas/brownie.jpeg';
import cocadaFornoImg from './assets/sobremesas/cocada-forno.jpeg';
import petitGateauImg from './assets/sobremesas/petit-gateau.jpeg';

import aguaSemGasImg from './assets/bebidas/agua-sem-gas.jpeg';
import aguaComGasImg from './assets/bebidas/agua-com-gas.jpeg';
import cocaColaImg from './assets/bebidas/coca-cola.jpeg';
import guaranaImg from './assets/bebidas/guarana.jpeg';
import heinekenImg from './assets/bebidas/heineken.jpeg';


function Prato(nome, preco, imagem, descricao) {
  this.nome = nome,
  this.preco = preco,
  this.imagem = imagem,
  this.descricao = descricao
}

const enroladinhoMignon = new Prato('Enroladinho de Mignon', 'R$ 64,90', enroladinhoMignonImg, 'Finíssimas fatias de filé mignon enroladas no parmesão',);
const casal20 = new Prato('Casal 20', 'R$ 29,00', casal20Img, 'Casal perfeito pão de alho caseiro e linguiça toscana grill',);
const burguerPicanha = new Prato('Burguer de Picanha', 'R$ 44,90', burguerPicanhaImg, 'Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon');
const fishChips =  new Prato('Fish and Chips', 'R$ 79,90', fishChipsImg, 'Iscas de Peixe Empanada na Farinha Panko e Flocos de Milho e Batata Frita Palito');
const risotoCamaraoTrufado = new Prato('Risoto de Camarão Trufado', 'R$ 72,90', risotoCamaraoTrufadoImg, 'Arroz Arbóreo, camarões salteados no azeite trufado e crocantes de panko');

const brownie = new Prato('Brownie', 'R$ 32,90', brownieImg, 'Delicioso brownie caseiro, sorvete de creme, calda quente de chocolate');
const cocadaForno = new Prato('Cocada de Forno', 'R$ 32,90', cocadaFornoImg, 'Cremosa cocada de coco torrado, doce de leite argentino e sorvete de creme');
const petitGateau = new Prato('Petit Gateau', 'R$ 34,90', petitGateauImg, 'Bolo quente recheado com ganache de chocolate, leite condensado e castanha de caju');


const aguaSemGas = new Prato('Água sem gás', 'R$ 6,90', aguaSemGasImg, '310ml');
const aguaComGas = new Prato('Água com gás', 'R$ 7,90', aguaComGasImg, '310ml');
const cocaCola = new Prato('Coca-Cola', 'R$ 7,90', cocaColaImg, '290ml');
const guarana = new Prato('Guaraná Antártica', 'R$ 7,90', guaranaImg, '350ml')
const heineken = new Prato('Heineken', 'R$ 15,90', heinekenImg, '355ml');

export const pratosPrincipais = [
  burguerPicanha,
  enroladinhoMignon,
  casal20,
  fishChips,
  risotoCamaraoTrufado,
];

export const sobremesas = [brownie, cocadaForno, petitGateau];

export const bebidas = [aguaSemGas, aguaComGas, cocaCola, guarana, heineken];
