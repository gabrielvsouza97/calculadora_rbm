import React, { useState } from "react";

type btnProps = {
    onClick: (valor:string) => void;
  };

export default function Button(props : btnProps){

    const btn = Object( {
        "C": "Clear",
        "D": "Delete"
    });
    let botoes = "";

    for(const button in btn){
        botoes += createElement(button)
    }
    function createElement(chave : string){
        let ob = document.createElement("button");
        ob.setAttribute("onClick","{()=>{retornaValor(\""+chave+"\");}");
        ob.innerText = btn[chave];
        return ob;
    }
    function retornaValor(texto:string){
        props.onClick(texto);
    }

    return (
    <div className="numpad">
        {botoes}
          {/* <button onClick={()=>{retornaValor("C");}} className='btn-function'>AC</button>
          <button onClick={()=>{retornaValor("D");}} className='btn-function'>DEL</button>
          <button onClick={()=>{retornaValor("/");}} className='btn-function' >/</button>
          <button onClick={()=>{retornaValor("7");}}>7</button>
          <button onClick={()=>{retornaValor("8");}}>8</button>
          <button onClick={()=>{retornaValor("9");}}>9</button>
          <button onClick={()=>{retornaValor("x");}} className='btn-function'>x</button>
          <button onClick={()=>{retornaValor("4");}}>4</button>
          <button onClick={()=>{retornaValor("5");}}>5</button>
          <button onClick={()=>{retornaValor("6");}}>6</button>
          <button onClick={()=>{retornaValor("-");}} className='btn-function'>-</button>
          <button onClick={()=>{retornaValor("1");}}>1</button>
          <button onClick={()=>{retornaValor("2");}}>2</button>
          <button onClick={()=>{retornaValor("3");}}>3</button>
          <button onClick={()=>{retornaValor("+");}} className='btn-function'>+</button>
          <button onClick={()=>{retornaValor("0");}}>0</button>
          <button onClick={()=>{retornaValor(",");}}>,</button>
          <button onClick={()=>{retornaValor("=");}} className='btn-function'>=</button> */}

    </div>





    )

}