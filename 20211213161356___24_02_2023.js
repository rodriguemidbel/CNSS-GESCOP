exports.up = function(knex) {
  return knex.schema.createTable('cautions', (table) => {
    table.increments('id');
    table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
    table.integer('marche_id');
    table.string('ref_marche');
    table.string('nature_caution');
    table.string('soumissionaire');
    table.string('banque');
    table.string('montant_caution');
    table.string('date_caution');
    table.string('date_trans');
    table.string('date_lettre');
    table.string('date_recp_lettre');
    table.string('lettre_confirmation');
    table.string('lettre_demande');
    table.string('caution');
    table.integer('created_by');
    table.integer('modified_by');
    table.timestamps(true, false);
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('cautions');
};


