import { useState } from "react";

function Contador() {
    const [valor, setValor] = useState(0);

    function somaClique() {
        setValor(valor + 1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>O valor é: {valor}</p>
            <button onClick={somaClique}>Adicionar 1</button>
        </div>
    )
}

export default Contador;