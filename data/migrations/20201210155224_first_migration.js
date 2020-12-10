
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
      table.increments('recipe_id');
      table.string('name', 128);
    })
    .createTable('ingredients', table => {
      table.increments('ingredient_id');
      table.string('name', 128);
    })
    .createTable('steps', table => {
      table.increments('step_id');
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id').inTable('recipes')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
      table.string('description', 128);
      table.string('step_number', 2);
    })
    .createTable('step_ingredients', table => {
      table.increments('id');
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id').inTable('ingredients')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
      table.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id').inTable('steps')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
      table.string('quantity', 128);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
