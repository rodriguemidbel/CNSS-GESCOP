exports.up = function(knex) {
  return knex.schema.createTable('usergroups', (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('description');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('localisations', (table) => {
      table.increments('id');
      table.string('dr_no').notNullable();
      table.string('sigle');
      table.string('libelle').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('users', (table) => {
      table.increments('id');
      table.integer('usergroup_id').references('id').inTable('usergroups').notNullable();
      table.string('matricule');
      table.string('name').notNullable();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('fonction');
      table.integer('localisation_id').references('id').inTable('localisations');
      table.string('service');
      table.string('telephone');
      table.string('email');
      table.string('adresse');
      table.boolean('statut').defaultTo(true);
      table.boolean('isconnected');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('fonctionalites', (table) => {
      table.increments('id');
      table.string('libelle').notNullable();
      table.string('description');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('privileges', (table) => {
      table.increments('id');
      table.integer('usergroup_id').references('id').inTable('usergroups').notNullable();
      table.integer('fonctionalite_id').references('id').inTable('fonctionalites').notNullable();
      table.boolean('view').defaultTo(false);
      table.boolean('add').defaultTo(false);
      table.boolean('edit').defaultTo(false);
      table.boolean('remove').defaultTo(false);
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('logs', (table) => {
      table.increments('id');
      table.integer('user_id').references('id').inTable('users').notNullable();
      table.string('action').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('modes', (table) => {
      table.increments('id');
      table.string('libelle').notNullable();
      table.string('description');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('modepaiements', (table) => {
      table.increments('id');
      table.string('libelle').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('fournisseurs', (table) => {
      table.increments('id');
      table.string('numero');
      table.string('raison_sociale').notNullable();
      table.string('rccm');
      table.string('ifu');
      table.string('num_employeur');
      table.string('telephone1');
      table.string('telephone2');
      table.string('adresse');
      table.string('email');
      table.string('domaine');
      table.string('activite');
      table.string('titre_resp');
      table.string('nom_prenom_resp');
      table.string('type');
      table.boolean('select').defaultTo(false);
      table.boolean('chef').defaultTo(false);
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('budgets', (table) => {
      table.increments('id');
      table.string('libelle').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('types', (table) => {
      table.increments('id');
      table.string('libelle').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('plans', (table) => {
      table.increments('id');
      table.integer('annee').notNullable();
      table.string('libelle');
      table.string('date_plan').notNullable();
      table.string('statut');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('histoplans', (table) => {
      table.increments('id');
      table.integer('plan_id').references('id').inTable('plans').notNullable();
      table.string('statut').notNullable();
      table.integer('created_by');
      table.timestamps(true);
    })
    .createTable('planitems', (table) => {
      table.increments('id');
      table.integer('plan_id').references('id').inTable('plans').notNullable();
      table.integer('num_ordre');
      table.string('budget');
      table.string('imputation');
      table.integer('montant_estime').notNullable();
      table.integer('montant_depense');
      table.integer('credit');
      table.string('designation').notNullable();
      table.integer('nbr_lot');
      table.integer('mode').references('id').inTable('modes').notNullable();
      table.string('date_lanc');
      table.string('date_reel_lanc');
      table.string('date_remise');
      table.string('date_reel_remise');
      table.integer('temp');
      table.integer('temp_reel');
      table.string('date_prob_demarrage');
      table.string('date_reel_demarrage');
      table.integer('delai_exe');
      table.integer('delai_reel_exe');
      table.string('date_prob_fin');
      table.string('date_reel_fin');
      table.string('gestionnaire');
      table.integer('type_id').references('id').inTable('types').notNullable();
      table.integer('localisation_id').references('id').inTable('localisations').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('dossiers', (table) => {
      table.increments('id');
      table.integer('planitem_id').references('id').inTable('planitems').notNullable();
      table.string('numero_doss').notNullable();
      table.string('intitule_doss').notNullable();
      table.string('date_trans_sign');
      table.string('date_retour_sign');
      table.string('date_trans_dgcmef');
      table.string('taux_reception');
      table.string('niveau_traitement');
      table.string('taux_avencement');
      table.string('dossier');
      table.string('statut');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('lots', (table) => {
      table.increments('id');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('num_lot').notNullable();
      table.string('intitule_lot').notNullable();
      table.integer('montant_lot').notNullable();
      table.integer('montant_vente');
      table.string('statut');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('ventes', (table) => {
      table.increments('id');
      table.integer('vent_dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('num_vente').notNullable();
      table.integer('fournisseur_id').references('id').inTable('fournisseurs');
      table.integer('lot_id').references('id').inTable('lots').notNullable();
      table.string('date_vente').notNullable();
      table.string('montant').notNullable();
      table.boolean('vent_statut');
      table.integer('grpent');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    
    .createTable('caisses', (table) => {
      table.increments('id');
      table.string('num_recu').notNullable();
      table.string('date_recu').notNullable();
      table.integer('vente_id').references('id').inTable('ventes').notNullable();
      table.integer('modepaiement_id').references('id').inTable('modepaiements').notNullable();
      table.integer('user_id').references('id').inTable('users');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('avis', (table) => {
      table.increments('id');
      table.string('num_publi').notNullable();
      table.string('date_envoi');
      table.string('date_publi').notNullable();
      table.string('fichier');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('pubavis', (table) => {
      table.increments('id');
      table.string('num_bordereau');
      table.string('date_bordereau');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('observation');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('caminvs', (table) => {
      table.increments('id');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('date_cam').notNullable();
      table.string('heure_cam').notNullable();
      table.string('lieu_cam');
      table.string('membre_cam');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('scaminvs', (table) => {
      table.increments('id');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('date_scam').notNullable();
      table.string('heure_scam').notNullable();
      table.string('lieu_scam');
      table.string('membre_scam');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('offres', (table) => {
      table.increments('id');
      table.integer('off_dossier_id').references('id').inTable('dossiers').notNullable();
      table.integer('fournisseur_id').references('id').inTable('fournisseurs').notNullable();
      table.integer('lot_id').references('id').inTable('lots').notNullable();
      table.string('date_depot');
      table.string('heure_depot');
      table.string('nom_prenom_dep');
      table.string('telephone_dep');
      table.string('montant_offre');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('offrefrs', (table) => {
      table.increments('id');
      table.integer('offre_id').references('id').inTable('offres');
      table.integer('fournisseur_id').references('id').inTable('fournisseurs');
      table.boolean('asf').defaultTo(false);
      table.boolean('asc').defaultTo(false);
      table.boolean('ajt').defaultTo(false);
      table.boolean('drtss').defaultTo(false);
      table.boolean('rccm').defaultTo(false);
      table.boolean('cnf').defaultTo(false);
    })
    .createTable('proceverbs', (table) => {
      table.increments('id');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('date_convocation');
      table.string('date_transpv_sign');
      table.string('date_retourpv_sign');
      table.string('date_transpv_dgcmef');
      table.string('pv');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('deliberations', (table) => {
      table.increments('id');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('date_convocation');
      table.string('date_transpv_sign');
      table.string('date_retourpv_sign');
      table.string('date_transpv_dgcmef');
      table.string('lot_id');
      table.string('attributaire');
      table.boolean('attr_statut').defaultTo(false);
      table.string('attributaire2');
      table.boolean('attr_statut2').defaultTo(false);
      table.string('attributaire3');
      table.boolean('attr_statut3').defaultTo(false);
      table.string('montant_initiale');
      table.string('montant_corrige');
      table.string('duree_execution');
      table.string('typedelib');
      table.string('pvdeliberation');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('analyses', (table) => {
      table.increments('id');
      table.string('libelle');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('date_effec_ana');
      table.string('date_trans_dgcmef');
      table.string('observation');
      table.string('rapport');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('resultats', (table) => {
      table.increments('id');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('date_par_res').notNullable();
      table.string('num_par_res').notNullable();
      table.string('attributaire');
      table.string('litige');
      table.string('fichierpub');
      table.string('fichierlitige');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('litiges', (table) => {
      table.increments('id');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.integer('lot_id').references('id').inTable('lots').notNullable();
      table.string('motif');
      table.string('decision').notNullable();
      table.string('date_ord');
      table.integer('fournisseur_id').references('id').inTable('fournisseurs').notNullable();;
      table.string('resultat');
      table.string('plainte');
      table.string('fichier');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('pubresultats', (table) => {
      table.increments('id');
      table.string('num_bordereau');
      table.string('date_bordereau');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('notifications', (table) => {
      table.increments('id');
      table.integer('not_dossier_id').references('id').inTable('dossiers').notNullable();
      table.integer('offre_id').references('id').inTable('offres').notNullable();
      table.string('numero');
      table.string('objet');
      table.string('date_notif');
      table.integer('fournisseur_id').references('id').inTable('fournisseurs').notNullable();
      table.integer('lot_id').references('id').inTable('lots').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('marches', (table) => {
      table.increments('id');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('num_ref').notNullable();
      table.string('objet').notNullable();
      table.integer('notification_id').references('id').inTable('notifications').notNullable();
      table.integer('fournisseur_id').references('id').inTable('fournisseurs').notNullable();
      table.integer('lot_id').references('id').inTable('lots').notNullable();
      table.integer('montant').notNullable();
      table.string('montant_lettre');
      table.integer('delai').notNullable();
      table.string('delai_lettre');
      table.string('date_rem_sign');
      table.string('date_retour_sign');
      table.string('date_trans_visa');
      table.string('date_retour_visa');
      table.string('date_envoi_appro');
      table.string('date_appro');
      table.string('date_notif');
      table.string('date_rem_enr');
      table.string('date_retour_enr');
      table.string('marche');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('cautions', (table) => {
      table.increments('id');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('soumissionaire');
      table.string('banque');
      table.string('montant_caution');
      table.string('date_caution');
      table.string('date_trans');
      table.string('date_lettre');
      table.string('date_recp_lettre');
      table.string('caution');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('sites', (table) => {
      table.increments('id');
      table.integer('marche_id').references('id').inTable('marches').notNullable();
      table.string('date_rem_site').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('typordres', (table) => {
      table.increments('id');
      table.string('libelle').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('ordreservs', (table) => {
      table.increments('id');
      table.integer('marche_id').references('id').inTable('marches').notNullable();
      table.integer('typordre_id').references('id').inTable('typordres').notNullable();
      table.string('ref');
      table.string('objet');
      table.integer('fournisseur_id').references('id').inTable('fournisseurs').notNullable();
      table.string('date_notif');
      table.string('date_demarrage');
      table.string('charge_notif');
      table.string('charge_notif_dist');
      table.string('ordre');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('courriers', (table) => {
      table.increments('id');
      table.integer('dossier_id').references('id').inTable('dossiers').notNullable();
      table.string('objet');
      table.string('date_courrier');
      table.string('fichier');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('typreceptions', (table) => {
      table.increments('id');
      table.string('libelle').notNullable();
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('recepdemandes', (table) => {
      table.increments('id');
      table.integer('marche_id').references('id').inTable('marches').notNullable();
      table.integer('ordreserv_id').references('id').inTable('marches').notNullable();
      table.string('date_demande');
      table.string('date_recep_cou');
      table.string('motif');
      table.string('courrier');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('receptions', (table) => {
      table.increments('id');
      table.integer('typreception_id').references('id').inTable('typreceptions').notNullable();
      table.integer('marche_id').references('id').inTable('marches').notNullable();
      table.integer('fournisseur_id').references('id').inTable('fournisseurs');
      table.string('date_recept');
      table.string('heure_recept');
      table.string('membre');
      table.string('autre');
      table.string('pv_recept');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('signataires', (table) => {
      table.increments('id');
      table.string('nom');
      table.string('prenom');
      table.string('titre');
      table.string('distinction');
      table.integer('localisation_id').references('id').inTable('localisations').notNullable();
      table.boolean('cam').defaultTo(false);
      table.boolean('sct').defaultTo(false);
      table.boolean('pv').defaultTo(false);
      table.boolean('ordre').defaultTo(false);
      table.boolean('actif').defaultTo(false);
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('seuilmodes', (table) => {
      table.increments('id');
      table.integer('type_id').references('id').inTable('types').notNullable();
      table.string('mode').notNullable();
      table.integer('min');
      table.integer('max');
      table.integer('created_by');
      table.integer('modified_by');
      table.timestamps(true, false);
    })
    .createTable('ventefrs', (table) => {
      table.increments('id');
      table.integer('vente_id').references('id').inTable('ventes').notNullable();
      table.integer('fournisseur_id').references('id').inTable('fournisseurs').notNullable();
      table.boolean('chef_file').defaultTo(false);
      table.integer('offre_id').references('id').inTable('offres');
      table.boolean('asf').defaultTo(false);
      table.boolean('asc').defaultTo(false);
      table.boolean('ajt').defaultTo(false);
      table.boolean('drtss').defaultTo(false);
      table.boolean('rccm').defaultTo(false);
      table.boolean('cnf').defaultTo(false);
      table.boolean('caut').defaultTo(false);
    })
    .createTable('delibfrs', (table) => {
      table.increments('id');
      table.integer('delib_id').references('id').inTable('deliberations').notNullable();
      table.integer('fournisseur_id').references('id').inTable('fournisseurs').notNullable();
      table.boolean('statut').defaultTo(false);
    })
    
};

exports.down = function(knex) {
  return knex.schema.dropTable('users').dropTable('usergroups')
  .dropTable('modes')
  .dropTable('modepaiements')
  .dropTable('fournisseurs')
  .dropTable('entreprises')
  .dropTable('budgets')
  .dropTable('types')
  .dropTable('localisations')
  .dropTable('plans')
  .dropTable('planitems')
  .dropTable('dossiers')
  .dropTable('lots')
  .dropTable('avis')
  .dropTable('ventes')
  .dropTable('caisses')
  .dropTable('caminvs')
  .dropTable('scaminvs')
  .dropTable('offres')
  .dropTable('proceverbs')
  .dropTable('deliberations')
  .dropTable('analyses')
  .dropTable('resultats')
  .dropTable('cautions')
  ,dropTable('notifications')
  .dropTable('marches')
  .dropTable('courriers')
  .dropTable('sites')
  .dropTable('typordres')
  .dropTable('ordreservs')
  .dropTable('typreceptions')
  .dropTable('receptions')
  .droptable('histoplans')
  .droptable('fonctionalites')
  .droptable('privileges')
  .droptable('signataires')
  .droptable('seuilmodes');
};


