const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const time_id = request.headers.authorization;

        const plays = await connection('plays')
            .where('time_id' , time_id)
            .select('*');
        
        return response.json(plays);
    }

}