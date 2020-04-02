import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    conteiner:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 1,
    },

    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },

    plays:{
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FFF', 
        marginBottom: 16,
        marginTop: 15
    },

    playsProperty:{
        fontSize:17,
        color: '#737380',
        //fontWeight: 'bold',
    },

    playsValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: "black",
        fontWeight: 'bold',
    },

    contatoBox:{
        padding: 15,
        borderRadius: 10,
        color: 'black', /*NAO FUNCIONA*/
        marginBottom: 16,
    },

    playSave:{
        fontWeight: "bold",
        fontSize: 15,
        color:'#13131a',
        lineHeight:30,
    },

    playDesc:{
        fontSize:15,
        color: "#737380",
        marginTop: 16,
    },

    playAction:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action:{
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 40,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})