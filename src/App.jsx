//CSS
import './App.css'

//COMPOONENTS
import Header from './components/Header'
import Main from './components/Main'

//HOOKS
import { useState, useEffect } from 'react'




function App() {


  const [entrada, setEntrada] = useState(0)
  const [saida, setSaida] = useState(0)
  const [saldo, setSaldo] = useState(0)

  const [txtDes, setTxtDes] = useState("")
  const [valorInput, setValorInput] = useState(0)
  const [tipo, setTipo] = useState("")

  const [taskFinal, setTaskFinal] = useState([])




  useEffect(() => {

    if (JSON.parse(localStorage.getItem('taskFinal'))) {
      setTaskFinal(JSON.parse(localStorage.getItem('taskFinal')))
      setSaldo(JSON.parse(localStorage.getItem('saldo')))
      setEntrada(JSON.parse(localStorage.getItem('entrada')))
      setSaida(JSON.parse(localStorage.getItem('saida')))
    } else {
      localStorage.setItem('taskFinal', JSON.stringify(taskFinal))
      localStorage.setItem('entrada', JSON.stringify(entrada))
      localStorage.setItem('saida', JSON.stringify(saida))
      localStorage.setItem('saldo', JSON.stringify(saldo))
    }

  }, [])

  
  



  return (
    <div className="App">
      <Header />
      <Main taskFinal={taskFinal} setTaskFinal={setTaskFinal} valorInput={valorInput} setValorInput={setValorInput} tipo={tipo} setTipo={setTipo} txtDes={txtDes} setTxtDes={setTxtDes} entrada={entrada} setEntrada={setEntrada} saida={saida} setSaida={setSaida} saldo={saldo} setSaldo={setSaldo} />
    </div>
  )
}

export default App
