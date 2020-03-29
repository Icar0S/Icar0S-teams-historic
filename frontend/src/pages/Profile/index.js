import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoImag from '../../assets/logooficialUlt.png';

export default function Profile(){
    const [plays, setPlays] = useState([]);

    const history = useHistory();
    const timeId = localStorage.getItem('timeId');
    const timeNome = localStorage.getItem('timeNome');
    

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: timeId,
            }
        }).then(resonse => {
            setPlays(resonse.data);
        })
    }, [timeId]);

    async function handleDeletePlay(id){
        try{
            await api.delete(`/plays/${id}`, {
                headers:{
                 Authorization: timeId,
                }
            });

            setPlays(plays.filter(plays => plays.id !== id))

        }catch{
            alert('Error ao deletar partida, tente novamente');
        }
    }

    async function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return(
        <div className="profile-conteiner">
            <header>
                <img src={logoImag} alt="Logo"/>
                <span>Bem vindo, {timeNome}</span>

                <Link className="button" to="/plays/new">Cadastrar novas partidas</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Partidas Cadastradas</h1>

            <ul>
                {plays.map(play => (
                    <li key={play.id}>
                    <strong>Confronto</strong>
                    <p>{play.confronto}</p>

                    <strong>Campeonato</strong>
                    <p>{play.campeonato}</p>

                    <strong>Descrição</strong>
                    <p>{play.descricao}</p>

                    <strong>Gols Casa</strong>
                    <p>{play.placar_casa}</p>

                    <strong>Gols Fora</strong>
                    <p>{play.placar_fora}</p>

                    <strong>Estádio</strong>
                    <p>{play.estadio}</p>

                    <strong>Público Total</strong>
                    <p>{play.publico}</p>

                    <strong>Renda da Partida</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(play.renda)}</p>

                    <button onClick={() => handleDeletePlay(play.id)} type="button">
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}