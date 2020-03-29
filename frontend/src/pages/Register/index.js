import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImag from '../../assets/logooficialUlt.png';

export default function Register(){
    const [nome, SetNome] = useState('');
    const [site, SetSite] = useState('');
    const [email, SetEmail] = useState('');
    const [contato, SetContato] = useState('');
    const [cidade, SetCidade] = useState('');
    const [uf, SetUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            site,
            email,
            contato,
            cidade,
            uf, 
        }

        try{
         const response = await api.post('times', data);

         alert(`Seu ID de acesso: ${response.data.id}`);

         history.push('/');
        }
        catch(err){
            alert("Erro no Cadastro, tente novamente.");
        }
    }

    return(
        <div className="register-conteiner">
            <div className="content">
                <section>
                    <img src={logoImag} alt="Logo"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e tenha todos os jogos do seu time gravados com todos os detalhes.</p>

                    <Link className="back-link" to="./">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Logon
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome do time"
                        value={nome}
                        onChange={e => SetNome(e.target.value)}
                    />
                    <input 
                        placeholder="site oficial"
                        value={site}
                        onChange={e => SetSite(e.target.value)}
                    />
                    <input type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e => SetEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Contato"
                        value={contato}
                        onChange={e => SetContato(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={cidade}
                            onChange={e => SetCidade(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => SetUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}