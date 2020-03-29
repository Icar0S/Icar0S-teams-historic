
exports.up = function(knex) {
    return knex.schema.createTable('plays', function (table) {
        table.increments('id');

        table.string('confronto').notNullable();
        table.string('campeonato').notNullable();
        table.string('descricao').notNullable();
        table.integer('placar_casa').unsigned().notNullable();
        table.integer('placar_fora').unsigned().notNullable();
        table.string('estadio').notNullable();
        table.decimal('publico').notNullable();
        table.string('renda').notNullable();

        table.string('time_id').notNullable();

        table.foreign('time_id').references('id').inTable('times');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('plays');
};
