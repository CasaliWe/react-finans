import React from 'react'

//CSS
import styles from "./Task.module.css"




const Task = ({ deletar, taskFinal}) => {


  
  return (
    <div className={styles.nota}>       
            <span>{taskFinal.txtDes}</span>
            <span>{taskFinal.valorInput}</span>
            <span style={taskFinal.tipo == 'entrada' ? ({color: 'green'}):({color: 'red'})}><i className="fas fa-arrow-up"></i></span>
            <p><i onClick={(e)=>deletar(e.target)} className="fas fa-trash" id={taskFinal.id}></i></p> 
    </div>
  )
}

export default Task