import React from 'react'

//CSS
import styles from "./Main.module.css"

//COMPONENTS
import Form from './Form'
import Task from './Task'

//HOOKS
import { useState, useEffect } from 'react'





const Main = ({ taskFinal, setTaskFinal, valorInput, setValorInput, tipo, setTipo, txtDes, setTxtDes, entrada, setEntrada, saida, setSaida, saldo, setSaldo }) => {

     const [listaVazia, setListaVazia] = useState(false)
     
     const [atualizarBanco, setAtualizarBanco] = useState(false)


     const deletar = (e) => {
          setTaskFinal(taskFinal.filter((task) => { return task.id != e.id }))

          taskFinal.map((task) => {
               if (task.id == e.id) {
                    if (task.tipo == 'entrada') {
                         setSaida(task.valorInput)
                         setSaldo((parseFloat(saldo) - parseFloat(task.valorInput)).toFixed(2))
                         setAtualizarBanco(true);
                    } else if (task.tipo == 'saida') {
                         setEntrada(task.valorInput)
                         setSaldo((parseFloat(saldo) + parseFloat(task.valorInput)).toFixed(2))
                         setAtualizarBanco(true);
                    }
               }
          })
     }

     useEffect(() => {
          if (taskFinal == '') {
               setListaVazia(true)
          } else {
               setListaVazia(false)
          }
     }, [taskFinal])




     const attBanco = ()=>{
          localStorage.setItem('taskFinal', JSON.stringify(taskFinal))
          localStorage.setItem('entrada', JSON.stringify(entrada))
          localStorage.setItem('saida', JSON.stringify(saida))
          localStorage.setItem('saldo', JSON.stringify(saldo))
     } 

     useEffect(()=>{
          if(atualizarBanco == true){
               attBanco();
               setAtualizarBanco(false)
          }
     }, [atualizarBanco])



     return (
          <main className={styles.main}>
               <section className={styles.valores}>
                    <div>
                         <p className={styles.up}><span>Entrada</span> <i className="fas fa-arrow-up"></i></p>
                         <h1>R$ {entrada}</h1>
                    </div>
                    <div>
                         <p className={styles.down}><span>Saída</span> <i className="fas fa-arrow-down"></i></p>
                         <h1>R$ {saida}</h1>
                    </div>
                    <div>
                         <p className={styles.money}><span>Saldo</span> <i className="fas fa-money-bill"></i></p>
                         <h1>R$ {saldo}</h1>
                    </div>
               </section>


               <Form setAtualizarBanco={setAtualizarBanco} attBanco={attBanco} setTaskFinal={setTaskFinal} valorInput={valorInput} setValorInput={setValorInput} saldo={saldo} setSaldo={setSaldo} tipo={tipo} setTipo={setTipo} entrada={entrada} setEntrada={setEntrada} saida={saida} setSaida={setSaida} txtDes={txtDes} setTxtDes={setTxtDes} />


               <section className={styles.task}>
                    <div className={styles.header_task}>
                         <span>Descrição</span>
                         <span className={styles.valor_span}>Valor</span>
                         <span className={styles.tipo_span}>Tipo</span>
                    </div>


                    {listaVazia == true ? <p className={styles.movimentacao}>Sem movimentações!</p> : taskFinal.map((task, i) => (
                         <Task deletar={deletar} key={i} taskFinal={task} />
                    ))}
               </section>
          </main>
     )
}

export default Main