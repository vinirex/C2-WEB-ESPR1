import {Link} from 'react-router-dom'
import {GrFormEdit} from 'react-icons/gr'
import { GrTrash } from "react-icons/gr"
import { useState, useEffect} from 'react'

export default function Produtos(){

/* Hook-useState recebe a variavel e também modifica seu estado */
 const[produto,setProduto]=useState([])

 /*Hook--useEffect realizar um efeito colateral, nesse exemplo ele vai pegar 
 a Api e converter para jspon e mostrar na tela */

 useEffect(()=>{
    fetch("http://localhost:5000/produto/")
    .then((resp)=>{
        return resp.json();
    }).then((resp)=>{
        setProduto(resp)
    })
    /*tratamento de erros */
    .catch((error)=>{
        console.log(error)
    })
 },[]) /*retorno callback */

/*para apagar nesse exemplo deixe o id com o valor em string "id":"1" */
 const handleDelete =(id)=>{
    fetch(`http://localhost:5000/produto/${id}`,{
      
    method:'delete',

    })
    .then(()=>{
        window.location.reload();
        console.log(id);
    })
 }


    return(
        <section className="produtos">
            <h1>LISTA DE PRODUTOS</h1>

            <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
            {produto.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td>
                  {' '}
                  {/*Link para chamar a tela de editar produtos */}
                  <Link>
                    <GrFormEdit />
                  </Link>{' '}
                  | {/*Link para chamar a tela de excluir produtos */}
                  <Link>
                  <button onClick={handleDelete.bind(this, item.id)}>
                  <GrTrash />
                  </button >
                   
                    {/*espaço entre os links '' */}
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </section>
    )
}