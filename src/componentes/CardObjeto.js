import styled from 'styled-components'

const CardObjetoStyled = styled.div`
    display: flex;
    align-items: center;            /* Centraliza os itens verticalmente no contêiner pai */
    width: 80%;
    height: clamp(200px,200px + 1vh, 15vh); 
    border-radius:10px;
    background-color:darkgrey;
    gap:1vw;
    box-shadow: 
        5px 5px 0px 0px rgba(0, 0, 0, 0.2),
        5px 5px 0px 0px rgba(0, 0, 0, 0.2);
    img{        
        height: 90%;
        margin-left:1%
    }
`
const InfoObjeto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    height: 90%;
    width: 90%; 
    h2{           
        color: red;
        font-weight: bold;
        font-size: clamp(1em, 1em + 1vw, 2.5em);
    }
    h3{        
        font-size: clamp(0.8em, 0.8em + 1vw, 2em);
    }
`

function CardObjeto({nome,tipo, tamanho}){
    return(
        
        <CardObjetoStyled>
            <InfoObjeto>
                <h2>{nome}</h2>
                <h3><b>Carga horária:</b> {tipo}</h3>
                <h3><b>Período:</b> {tamanho}</h3>
            </InfoObjeto>
        </CardObjetoStyled>
    )
}
export default CardObjeto;