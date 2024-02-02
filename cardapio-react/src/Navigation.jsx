export function Navigation(props) {
    return (
      <div className="navegacao">
        <input
          type="radio"
          name="categoria"
          id="pratosPrincipais"
          onChange={() => props.atualizarPaginaSelecionada(0)}
          defaultChecked
        />
        <label htmlFor="pratosPrincipais">Pratos principais</label>
  
        <input
          type="radio"
          name="categoria"
          id="sobremesas"
          onChange={() => props.atualizarPaginaSelecionada(1)}
        />
        <label htmlFor="sobremesas">Sobremesas</label>
  
        <input
          type="radio"
          name="categoria"
          id="bebidas"
          onChange={() => props.atualizarPaginaSelecionada(2)}
        />
        <label htmlFor="bebidas">Bebidas</label>
      </div>
    );
  }