import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { getObjetos } from '../serviços/objetos';
import CardObjeto from '../componentes/CardObjeto';

const ConteinerPesquisa = styled.section`
    width: 80vw;                    /* Define a largura do elemento "main" como 80% da largura do contêiner pai */
    height: calc(100%);             /* Define a altura da navegação como 100% da altura do contêiner pai */
    display: flex;
    flex-direction: column;
    align-items: center;            /* Centraliza os itens verticalmente no contêiner pai */
    gap: 3vh;
    h1{
        font-size:3vw;
        margin: 0;
        padding: 0;
    }    
`

const InputPesquisa = styled.input`
    background: transparent;
    border: 3px solid darkgrey;
    padding:20px 140px;
    border-radius:10px;
    width:60%;
    font-size: 25px;
`

const Titulo = styled.h1`
    color : ${props => props.cor || '#000000'};
    font-size: ${props => props.tamanhoFonte || '20px'};
    font-weight:bold;
`

function PesquisaObjeto() {
    
    const [ObjetosEncontrados, setObjetosEncontrados] = useState([]);   
    const [objetos, setObjetos] = useState([])

    useEffect(() => {
        fetchObjetos()
    }, [])

    async function fetchObjetos() {
        const objetosDaAPI = await getObjetos()
        setObjetos(objetosDaAPI)
    }

    return (
        <ConteinerPesquisa>
            <Titulo cor={"#0a3792"} tamanhoFonte={"50px"}>
                Pesquise os Objetos aqui
            </Titulo>

            <InputPesquisa
                placeholder='Digite o nome do objeto'
                onChange={evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoBusca = objetos.filter(objeto => objeto.nome.includes(textoDigitado))
                    setObjetosEncontrados(resultadoBusca)
                }}
            />
            {
                ObjetosEncontrados.map(objeto => (
                    <CardObjeto
                        nome = {objeto.nome}
                        tipo = {objeto.tipo}
                        tamanho = {objeto.tamanho}
                    />
                ))                
            }
        </ConteinerPesquisa>
    )
}
export default PesquisaObjeto;