//HOOKS
import React, { useRef, useEffect } from 'react'

//CSS
import styles from "./Form.module.css"



const Form = ({setAtualizarBanco, attBanco, setTaskFinal, valorInput, setValorInput, saldo, setSaldo, tipo, setTipo, entrada, setEntrada, saida, setSaida, txtDes, setTxtDes }) => {

    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()

    var random = Math.floor(Math.random() * 100000) 





    const handleSubmit = () => {
        if (txtDes == '' || valorInput == '' || tipo == '' || tipo == '#') {
            focarNoInputVazio();
        } else {
             if (tipo == 'entrada') {
                 setEntrada(parseFloat(valorInput))
                 setSaldo((parseFloat(saldo) + parseFloat(valorInput)).toFixed(2))
                 setTaskFinal((prev)=>[...prev, {txtDes, valorInput, tipo, id: random}])
                 setAtualizarBanco(true)
             } else if (tipo == 'saida') {
                 setSaida(parseFloat(valorInput))
                 setSaldo((parseFloat(saldo) - parseFloat(valorInput)).toFixed(2))
                 setTaskFinal((prev)=>[...prev, {txtDes, valorInput, tipo, id: random}])
                 setAtualizarBanco(true)
             }
        }
    }


    const focarNoInputVazio = (() => {
        if (txtDes == '') {
            inputRef1.current.focus()
        } else if (valorInput == '') {
            inputRef2.current.focus()
        } else if (tipo == '') {
            inputRef3.current.focus()
        } else if (tipo == '#') {
            inputRef3.current.focus()
        }
    })







    return (
        <section className={styles.form}>
            <div className={styles.inputs}>
                <input maxLength={20} ref={inputRef1} type="text" placeholder='Descrição' onChange={(e) => setTxtDes(e.target.value)} value={txtDes} />
                <input ref={inputRef2} type="number" placeholder='Valor' onChange={(e) => setValorInput(parseFloat(e.target.value).toFixed(2))} />
            </div>

            <select ref={inputRef3} onChange={(e) => setTipo(e.target.value)} className={styles.select}>
                <option value="#">Tipo</option>
                <option value="saida">Saída</option>
                <option value="entrada">Entrada</option>
            </select>

            <button onClick={handleSubmit}>Adicionar</button>
        </section>
    )
}

export default Form