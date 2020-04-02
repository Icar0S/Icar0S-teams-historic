import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import Logo from '../../assets/logo10.png'; //LOGO
import styles from './styles';



export default function Detail() {
    const navagate = useNavigation();
  

    const route = useRoute();

    const play = route.params.play;

    const menssage = 'Olá Ceara SC, gostaria de mais informações sobre o confronto "Fortaleza" pelo campeonato "Brasileirão A 2019 "';
    const [url, setUrl] = useState("http://cearasc.com")

    function navagateBack() {
        navagate.goBack();
    }

    function sendSite() {
        Linking.openURL(url)
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Registrador do confronto: Fortaleza',
            recipients: ['ceara@sportingclub.com.br'],
            body: menssage,
        })
    }


    return (
        <View style={styles.conteiner} >
            <View style={styles.header}>
                <Image source={Logo} />

                <TouchableOpacity onPress={navagateBack}>
                    <Feather name="arrow-left" size={28} color={"#E02041"} />
                </TouchableOpacity>
            </View>
            <ScrollView >
                <View style={styles.plays}>
                    <Text style={[styles.playsProperty, { marginTop: 0 }]} > Time:</Text>
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

                    <Text style={styles.playsProperty}> Público Total:</Text>
                    <Text style={styles.playsValue}> {play.publico}</Text>

                    <Text style={styles.playsProperty}> Renda do Jogo:</Text>
                    <Text style={styles.playsValue}>
                        {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(play.renda)}
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.contatoBox}>
                <Text style={styles.playSave}>Salve mais essa partida historica !</Text>
                <Text style={styles.playSave}>Acrescente mais esse jogo emocionante.</Text>

                <Text style={styles.playDesc}>Entre em Contato:</Text>

                <View style={styles.playAction} >
                    <TouchableOpacity style={styles.action} onPress={sendSite}>
                        <Text style={styles.actionText}>Site</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}