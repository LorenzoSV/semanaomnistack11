/**
 * npx knex migrate:make (nomedaTabela)
 * npx knex migrate:latest
 */
exports.up = function(knex) {
  return  knex.schema.createTable('incidents', function (table){
        table.string('title').primary();
        table.string('description').notNullable();
        table.string('value').notNullable(); 
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
        
        }); 
    };
    
    exports.down = function(knex) {
      return knex.schema.dropTable('incidents');
    };
    