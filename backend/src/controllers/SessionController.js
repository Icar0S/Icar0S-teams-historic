const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id} = request.body;

        const time = await connection('times')
            .where('id', id)
            .select('nome')
            .first();
        if(!time){
            return response.status(400).json({ error: 'No Time found whith this ID'})
        }

        return response.json(time);
    }
}