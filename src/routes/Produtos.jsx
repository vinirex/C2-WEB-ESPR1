import {useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Produtos(){

    //HOOK- useParams vai pegar o id quando editar
    let {id} = useParams();
    
    //HOOK-useState manipula o estado da variavel(add ou alterar)
    const [novoproduto, setNovoProduto]= useState({
        id,
        nome:"",
        descricao:"",
        valor:"",
    });

    //Função handleChange

    const handleChange=(e)=>{
        //...(spred) pega os dados antigos e junta com os dados novos
        setNovoProduto({...novoproduto,[e.target.name]:e.target.value})
    }

    //variavel metodo para adicionar ou alterar

    let metodo="post"
    if(id){
        metodo="put"
    }

    //Função handleSubmit
    const  handleSubmit =(e)=>{
        //previne qualquer ação do form
        e.preventDefault();
        fetch(`http://localhost:5000/produto/${id ? id:""}
        `,{
            method:metodo,
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(novoproduto),
        }).then(()=>{
            window.location="/ListaProdutos"
        })
    }

    //criando o efeito colateral para atualizar a pagina em tempo real

    useEffect(()=>{
    
        if(id){
            fetch(`http://localhost:5000/produto/${id}`)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                setNovoProduto(data)
            })
        }

    },[id]); //retorno callback


    return(
        <>
            <form onSubmit={handleSubmit}>
                
                <input
                type="text"
                name="nome"
                value={novoproduto.nome}
                placeholder="Digite o nome do produto"
                onChange={handleChange}                
                />

                <input
                type="text"
                name="descricao"
                value={novoproduto.descricao}
                placeholder="Digite a descrição do produto"
                onChange={handleChange}                
                />

                <input
                type="text"
                name="valor"
                value={novoproduto.valor}
                placeholder="Digite o valor do produto"
                onChange={handleChange}                
                />

                <button type="submit">Cadastrar</button>
                <Link to="/ListaProduto">Voltar</Link>
            </form>
        
        </>
    )
}
