import React, {useState} from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api'; //CONCTION

import './styles.css';

import logoImag from '../../assets/logooficialUlt.png';
import capaImage from '../../assets/soccer-team-5.png';

export default function Logon(){
    const [id, SetId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});

            localStorage.setItem('timeId', id);
            localStorage.setItem('timeNome', response.data.nome);

            history.push('/profile');
        }catch{
            alert('Falhao no login, tente novamente.');
        }
    }

    return (
        <div className="logon-conteiner">
            <section className="form">
                <img src={logoImag} alt="Logo" />

                <form onSubmit={handleLogin}>
                    <h1> Faça seu Logon </h1>

                    <input 
                        placeholder="Seu ID"
                        value={id}
                        onChange={e => SetId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="./register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>
            <img src={capaImage} alt="Capa" />
        </div>
    );
}