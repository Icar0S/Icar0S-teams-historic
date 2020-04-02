import React , {useEffect, useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';

import Logo from '../../assets/logo10.png'; //LOGO
import styles from './styles';

import api from '../../services/api';

export default function Plays(){
    const [plays, setPlays] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navagation = useNavigation();

    function navagateToDetail(play){
        navagation.navigate('Detail', {play});
    }

    async function loadPlays(){
        if(loading){
            return;
        }

        if(total > 0 && plays.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('plays', {
            params: {page}
        });

        setPlays([... plays, ... response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadPlays();
    }, []);

    return(
        <View style={styles.conteiner} >
            <View style={styles.header}>
                <Image source={Logo}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> {total} partidas </Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem Vindo!</Text>
            <Text style={styles.description}>Confira o histórico de cada jogo do seu time.</Text>

            <FlatList 
                data={plays}
                style={styles.playsList}
                keyExtractor={plays => String(plays.id)}
                showsVerticalScrollIndicator={true}
                onEndReache={loadPlays}
                onEndReachedThreshold={0.2}
                renderItem={({item: play})=>(
                    <View style={styles.plays} >
                        <Text style={styles.playsProperty}> Time:</Text>
                        <Text style={styles.playsValue}>{play.nome}</Text>

                        <Text style={styles.playsProperty}> Confronto:</Text>
                        <Text style={styles.playsValue}>{play.confronto}</Text>

                        <Text style={styles.playsProperty}> Descrição:</Text>
                        <Text style={styles.playsValue}>{play.descricao}</Text>

                        <Text style={styles.playsProperty}> Gols -> Time da Casa:</Text>
                        <Text style={styles.playsValue}>{play.placar_casa}</Text>

                        <Text style={styles.playsProperty}> Gols-> Time Visitante:</Text>
                        <Text style={styles.playsValue}>{play.placar_fora}</Text>

                        <Text style={styles.playsProperty}> Estádio:</Text>
                        <Text style={styles.playsValue}> {play.estadio}</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={()=>navagateToDetail(play)}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={17} color='#E02041'/>
                        </TouchableOpacity> 
                    </View>
                )}
            />
        </View>
    );
}