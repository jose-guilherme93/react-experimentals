

import React, { useState} from "react"

interface  PersonProps   {
    nome: string;
    cidade: string;
    idade:  number;
}

const array: PersonProps[] = [ 
  {
    nome: "roberto",
    idade: 23,
    cidade: "belo horizonte"
  },
  {
    nome: "clara maria",
    idade: 45,
    cidade: "turiaçu"
  },
  {
    nome: "Pessoa 3",
    idade: 67,
    cidade: "curitiba"
  },
  {
    nome: "joão",
    idade: 18,
    cidade: "bequimão"
  },
  {
    nome: "Pedro",
    idade: 32,
    cidade: "Cidade operária"
  },
  {
    nome: "fernanda",
    idade: 54,
    cidade: "cababeira"
  },
  {
    nome: "henrique",
    idade: 76,
    cidade: "rio de janeiro"
  },
  {
    nome: "Pessoa 8",
    idade: 21,
    cidade: "são paulo"
  },
  {
    nome: "carlos",
    idade: 43,
    cidade: "recife"
  },
  {
    nome: "carla",
    idade: 65,
    cidade: "perim mirim"
  },
   {
    nome: "marcos pedro",
    idade: 27,
    cidade: "alcântara"
   },
   {
     nome: "leticia",
     idade:49,
     cidade:"cafeteira"
   },
 
];



export default function Teste() {

    const [inputRadio, setInputRadio] = useState('')
    const [inputSearch, setInputSearch] = useState('')
    const handleState = (e:  React.ChangeEvent<HTMLInputElement>) => { 
       setInputSearch(e.currentTarget.value)
     
    }

    const arrayfilted = array.filter((itemDoArray) =>
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