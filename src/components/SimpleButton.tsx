import React,{ReactNode} from "react";

type btnProps = {
    onClick: (texto:string) => void;
    value: string;
    estilo?: string;
    children?: ReactNode;
  };

export default function SimpleButton(props: btnProps){
  let valorExibido = props.children ?? props.value;
  function retornaValor(texto:string){
    props.onClick(texto);
}
 
  return <button onClick={() => {retornaValor(props.value)}} className={props.estilo} value={props.value}>{valorExibido}</button>
}