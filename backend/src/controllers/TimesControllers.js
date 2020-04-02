const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const times = await connection('times').select('*');
    
        return response.json(times);    
    },

    async create(request, respose){
        const {nome , site, email, contato, cidade, uf} = request.body;

        const id = generateUniqueId();
    
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