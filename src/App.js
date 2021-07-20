import { json } from 'body-parser';
import React, { useEffect, useState } from 'react';
import './style.css'
function App() {
  const [Preco, setPreco] = useState([
    {id:1949, cliente: 'Arautho', fator: 71.07},
    {id: 311, cliente: 'Beggiauto', fator: 70.48}
  ]);

  useEffect(() => {

    function loadApi(){
//      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      
//      fetch(url)
//      .then((r)=> r.json())
//      .then((json)=> {
//        console.log(json);
//        setPreco(json)
//      })

    }

    loadApi();

  }, []);

  return (
    <div className="container">
      <header>
        <strong>Termosinter Preços</strong>
    </header>

    {Preco.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.cliente}</strong>
            <strong>{item.fator}</strong>
          </article>
        )


    })}

    </div>
  );
}

export default App;
