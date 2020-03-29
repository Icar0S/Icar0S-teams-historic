const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('plays').count();

        //console.log(count);

        const plays = await connection('plays')
            .join('times', 'times.id', '=', 'plays.time_id')
            .limit(5)
            .offset((page - 1 )* 5)
            .select(['plays.*',
             'times.nome',
             'times.site',
             'times.email',
             'times.contato',
             'times.cidade',
             'times.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(plays);
    },

    async create(request, response){
        const {confronto, campeonato, descricao, placar_casa, placar_fora, estadio, publico, renda} = request.body;
        const time_id = request.headers.authorization;

        const [id] = await connection('plays').insert({
            confronto,
            campeonato,
            descricao,
            placar_casa,
            placar_fora,
            estadio,
            publico,
            renda,
            time_id,
        });
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const time_id = request.headers.authorization;

        const plays = await connection('plays')
            .where('id' , id)
            .select('time_id')
            .first();


        if(!plays){
            return response.status(404).json({ error: ' not found.'});
        }

        if(plays.time_id != time_id){
            return response.status(402).json({ error: 'not permitted'});
        }
        
        await connection('plays').where('id', id).delete();
        
        return response.status(204).send();
    }
}