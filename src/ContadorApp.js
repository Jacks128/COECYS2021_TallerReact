import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ContadorApp = ({value}) => {
    const [contador,setContador]=useState(value);

   const handleAdd =()=>{
    console.log('+1')
    setContador(contador+1);
   }

   const handleSusbtract=()=>{
       setContador(contador-1);
   }

   const handleReset=()=>{
    setContador(value);
}
    return (
        <div>
            <h1>Mi primer Contador</h1>
            <h2>{contador}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSusbtract}>-1</button>

        </div>
    )
}

ContadorApp.propTypes = {
    value:PropTypes.number
}

export default ContadorApp
