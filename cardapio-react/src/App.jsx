import { useState } from 'react'
import Restaurante from './assets/restaurante.webp'
import { Navigation } from './navigation.jsx'
import { ItemCardapio } from './ItemCardapio.jsx'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio.js'


export function App(){
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

    return  <>
      <img src={Restaurante} className='capa' alt="" />
      <Navigation atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>

      <div className='menu'>
        {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/>)}
      </div>
    </>
}