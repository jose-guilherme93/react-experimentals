

import React, { useState} from "react"
import { PersonProps, fakeApi } from "@/data/inputSearchData"




export default function Teste() {

    const [inputRadio, setInputRadio] = useState('')
    const [inputSearch, setInputSearch] = useState('')
    
    const handleState = (e:  React.ChangeEvent<HTMLInputElement>) => { 
       setInputSearch(e.currentTarget.value)
     
    }

    const arrayfilted = fakeApi.filter((itemDoArray) =>
    String(itemDoArray[inputRadio as keyof PersonProps]).includes(inputSearch)
  );

    const handleIputRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputRadio(e.currentTarget.value)
    }
     
    return ( 
    
    <>
        <input type="text" value={inputSearch} onChange={handleState} />
        
        <form className=" m-4 flex gap-1 items-center">
            <h3 className="text-lg font-bold">pesquisar por:</h3>

            <input 
                className="input input-bordered" 
                type="radio" 
                value='nome' 
                onChange={handleIputRadio} 
                id="nome" name="inputRadioProp" />
            <label
                htmlFor="nome">
                nome
            </label>

            <input 
                type="radio" 
                value='cidade' 
                onChange={handleIputRadio}  
                name="inputRadioProp"  
                id="cidade"/>
            <label 
                htmlFor="cidade">
                cidade
            </label>

            <input 
                type="radio" 
                value='idade' 
                onChange={handleIputRadio}
                name="inputRadioProp"
                id="idade" />
            <label 
                htmlFor="idade">
                idade
            </label>

        </form>
        {inputRadio && (
  arrayfilted.map((item: PersonProps) => (
    <li className="list-none odd:bg-zinc-100 ml-4" key={item.nome}>
      {inputRadio === 'nome' ? item.nome : inputRadio === 'idade' ? item.idade : item.cidade}
    </li>
  ))
)}

        
    </>


    )
}