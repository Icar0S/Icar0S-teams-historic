import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    conteiner:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 2,
    },

    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: 15,
    },

    headerText:{
        fontSize: 15,
        color:'#737380',
    },

    headerTextBold:{
        fontWeight: 'bold',
    }, 

    title:{
        fontSize:30,
        marginBottom: 15,
        marginTop: 35,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description:{
        fontSize:16,
        lineHeight: 24,
        color:'#737380',   
    },

    playsList:{
        marginTop: 32,
    },

    plays:{
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#eaeaea', /*NAO FUNCIONA*/
        marginBottom: 16,
    },

    playsProperty:{
        fontSize:15,
        color: "#737380",
        fontWeight: 'bold',
    },

    playsValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#13131a',
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    
    detailsButtonText:{
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold',
    },


});