import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImag from '../../assets/logooficialUlt.png';

import './styles.css';

export default function NewPlay(){
    const [confronto, setConfronto] = useState();
    const [campeonato, setCampeonato] = useState();
    const [descricao, setDescricao] = useState();
    const [placar_casa, setPlacar_casa] = useState();
    const [placar_fora, setPlacar_fora] = useState();
    const [estadio, setEstadio] = useState();
    const [publico, setPublico] = useState();   
    const [renda, setRenda] = useState();

    const history = useHistory();

    const timeId = localStorage.getItem('timeId');//Auth

    async function handleNewPlay(e){
        e.preventDefault();

        const data = {
            confronto,
            campeonato, 
            descricao,
            placar_casa,
            placar_fora,
            estadio,
            publico,
            renda,
        }

        try {
            await api.post('/plays', data, {
                headers:{
                    Authorization: timeId,
                }
            });

            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar partida, tente novamente.');
        }
    }

    return(
        <div className="new-play-conteiner">
            <div className="content">
                <section>
                    <img src={logoImag} alt="Logo"/>

                    <h1>Cadastrar nova partida</h1>
                    <p>Faça seu cadastro com todos os detalhes, preencha todos os campos atenciosamente.</p>

                    <Link className="back-link" to="../profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewPlay}>
                    <input 
                        placeholder="Adversário do confronto"
                        value={confronto}
                        onChange={e => setConfronto(e.target.value)}
                    />
                    <input 
                        placeholder="Campeonato Disputado"
                        value={campeonato}
                        onChange={e => setCampeonato(e.target.value)}
                    />
                    <textarea  
                        placeholder="Descrição"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input 
                        placeholder="Gols do time da casa"
                        value={placar_casa}
                        onChange={e => setPlacar_casa(e.target.value)}
                    />
                    <input 
                        placeholder="Gols do time da visitante"
                        value={placar_fora}
                        onChange={e => setPlacar_fora(e.target.value)}
                    />
                    <input 
                        placeholder="Estádio da partida"
                        value={estadio}
                        onChange={e => setEstadio(e.target.value)}
                    />
                    <input 
                        placeholder="Público Total"
                        value={publico}
                        onChange={e => setPublico(e.target.value)}
                    />
                    <input 
                        placeholder="Renda do jogo em Reais"
                        value={renda}
                        onChange={e => setRenda(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}