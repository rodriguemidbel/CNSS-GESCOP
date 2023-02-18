exports.up = function(knex) {
  return knex.schema.createTable('resiliations', (table) => {
      table.increments('id');
      table.integer('marche_id').references('id').inTable('marches').notNullable();
      table.string('ref_decision');
      table.string('date_decision');
      table.string('fichier');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('penalites', (table) => {
      table.increments('id');
      table.integer('marche_id').references('id').inTable('marches').notNullable();
      table.string('date_pen');
      table.string('ref_marche');
      table.string('attributaire');
      table.integer('montant_ht');
      table.integer('delai');
      table.integer('tx_pen');
      table.string('ref_ord');
      table.integer('date_recep_tech');
      table.integer('date_recep_prov');
      table.integer('delai_reel');
      table.integer('nbj_pen');
      table.integer('montant_pen');
      table.integer('decompte_pen');
      table.string('fichier');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('decisions', (table) => {
      table.increments('id');
      table.integer('marche_id').references('id').inTable('marches').notNullable();
      table.string('date_decision');
      table.string('nature_decision');
      table.string('ref_marche');
      table.string('ref_ordre');
      table.string('recep_tech');
      table.string('recep_prov');
      table.integer('montant_marche');
      table.integer('montant_penalite');
      table.integer('montant_guarantie');
      table.integer('retenue_src');
      table.integer('retenue_arcop');
      table.integer('retenue_cotisation');
      table.integer('montant_decision');
      table.integer('solde_marche');
      table.string('bordereau_liv');
      table.string('ref_fact');
      table.string('facture_def');
      table.string('decision');
      table.string('caution');
      table.string('autre_doc');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('reglements', (table) => {
      table.increments('id');
      table.integer('marche_id').references('id').inTable('marches').notNullable();
      table.string('ref_marche');
      table.string('ref_decision');
      table.string('attributaire');
      table.string('date_reglement');
      table.string('montant_decision');
      table.string('atd');
      table.string('fichier');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    
};

exports.down = function(knex) {
  return knex.schema.dropTable('resiliations')
  .dropTable('penalites')
  .dropTable('decisions')
  .dropTable('reglements');
};


