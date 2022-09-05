import React, { useState } from "react";
import SimpleButton from "./SimpleButton";

type btnProps = {
    onClick: (valor:string) => void;
  };

export default function Button(props : btnProps){
    function retornaValor(texto:string){
        props.onClick(texto);
    }

    return (
    <div className="numpad">
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} estilo={"btn-function"} value={"C"}>{"AC"}</SimpleButton>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} estilo={"btn-function"} value={"D"}>{"Del"}</SimpleButton>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} estilo={"btn-function"} value={"/"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={"7"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={"8"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={"9"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} estilo={"btn-function"} value={"x"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={"4"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={"5"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={"6"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} estilo={"btn-function"} value={"-"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={"1"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={"2"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={"3"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} estilo={"btn-function"} value={"+"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={"0"}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} value={","}/>
        <SimpleButton onClick={(resultado : string) =>retornaValor(resultado)} estilo={"btn-function"} value={"="}/>
    </div>





    )

}