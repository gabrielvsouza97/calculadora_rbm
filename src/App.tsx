import React, { ReactElement, useState } from 'react';
import './App.css';
import Numpad from './components/Numpad';
import Display from './components/Display';
import { stringify } from 'querystring';


function App() {
  const [display,setDisplay] = useState("");

  function exibeDisplay(resultado: string){


    let valorInserir = verificaUltimoDigito(resultado);
    setDisplay(valorInserir);
  }

  function calculadora(lastText : string)
  {
    //Verificando qual o que preciso fazer
    switch (lastText){
      case "C":
        setDisplay("");
        break;
      case "D":
        setDisplay(retiraTexto());
        break;
      case "=":
        setDisplay(realizaCalculo());
        break;
      default:
        exibeDisplay(lastText);
        break;

    }
  }
  function retiraTexto(){
    let novoTexto = display.substring(0, display.length -1);
    return novoTexto;

  }

  function realizaCalculo(){
    let stringSanitizada = sanitizaString(display);
    let calculo = Math.round((eval(stringSanitizada) + Number.EPSILON ) * 100 ) / 100;
    let stringcalc = calculo+"";
    return stringcalc.replaceAll(".",",");
  }

  function sanitizaString(stringSuja: string){
    let stringLimpa = stringSuja.replaceAll("x","*");
    stringLimpa = stringLimpa.replaceAll(",", ".");

    return stringLimpa;
  }

  function verificaUltimoDigito(resultado :string){
    const sinais = ["+","-","/","x"];
    const ultimoDigito = display.substring(display.length-1);
    if(sinais.includes(resultado) && sinais.includes(ultimoDigito)){
      return display.substring(0, display.length -1) + resultado;
    } else {
      return display + resultado;
    }
  }
  return (
    <main>
      <span className='App'>
       <Display>{display}</Display>
        <Numpad onClick={(resultado:string) => {calculadora(resultado)}}/>
      </span>
    </main>
  );
}

export default App;
