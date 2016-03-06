
exports.up = function(knex, Promise) {
  knex.schema.createTable('people', function(table) {
    table.increments();
    table.string('name');
    table.string('hobby');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('people');
};
