import './App.css'
import Home from './paginas/home/Home'
import Contador from './paginas/contador/Contador'
import Tarefa from './paginas/tarefa/Tarefa'

function App() {

  return (
    <>
      <Home titulo="Esse é um componente properties"
        texto="Agora já estamos trabalhando com properties - componente chamado com sucesso" />

      <Home titulo="Testando"
        texto="Texto teste do properties" />

      <Contador />
      <Tarefa />
    </>
  )
}

export default App