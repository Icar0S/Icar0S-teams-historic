const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const times = await connection('times').select('*');
    
        return response.json(times);    
    },

    async create(request, respose){
        const {nome , site, email, contato, cidade, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); 
    
        await connection('times').insert({
            id,
            nome,
            site,
            email,
            contato,
            cidade,
            uf
        });
        return respose.json({ id });
    } 

};