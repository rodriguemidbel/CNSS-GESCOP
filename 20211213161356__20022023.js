exports.up = function(knex) {
  return knex.schema.createTable('analitems', (table) => {
      table.increments('id');
      table.integer('analyse_id').references('id').inTable('analyses').notNullable();
      table.integer('lot_id');
      table.integer('soumissionnaire_id');
      table.string('soumissionnaire');
      table.integer('off_mnt');
      table.integer('off_mnt_min');
      table.integer('off_mnt_max');
      table.integer('conformite');
      table.string('motif');
      table.string('observation');
      table.string('statut');
      table.timestamps(true, false);
    })

};

exports.down = function(knex) {
  return knex.schema.dropTable('analitems');
};


