
exports.up = function(knex) {
   return knex.schema.createTable('times', function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('site').notNullable();
        table.string('email').notNullable();
        table.string('contato').notNullable();
        table.string('cidade').notNullable();
        table.string('uf', 2).notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('times');
};
