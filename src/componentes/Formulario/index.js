import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    label="Nome"
                    obrigatorio={true}
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Cargo"
                    obrigatorio={true} 
                    placeholder="Digite seu cargo"
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time" obrigatorio={true} 
                    itens={times}
                    valor = {time}
                    aoAlterado = {setTime}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario