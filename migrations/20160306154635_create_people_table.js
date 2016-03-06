
exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', function(table) {
    table.increments();
    table.string('name');
    column.unique('name');
    table.string('hobby');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people');
};
