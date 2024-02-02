export function Navigation(props) {
    return <div className="navegacao">
        <input type="radio" name="" id="" /><label htmlFor="" onClick={() => props.atualizarPaginaSelecionada(0)} defaultChecked>Pratos principais</label>
        <input type="radio" name="" id="" /><label htmlFor="" onClick={() => props.atualizarPaginaSelecionada(1)}>Sobremesas</label>
        <input type="radio" name="" id="" /><label htmlFor="" onClick={() => props.atualizarPaginaSelecionada(2)}>Bebidas</label>
    </div>
}