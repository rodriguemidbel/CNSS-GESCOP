const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class AnalyseDAO {
  async createAnalyse(dossier_id,date_effec_ana,libelle,lot_id,attributaire,montant_init,
   montant_corri,montant_min_init,montant_min_corri,montant_max_init,montant_max_corri,
    duree_execution) {
      const [id] = await db('analyses')
      .insert({
        dossier_id,
        date_effec_ana : commonUtils.formatOracleDate2(date_effec_ana),
        libelle,
        lot_id,
        attributaire,
        montant_init,
        montant_corri,
        montant_min_init,
        montant_min_corri,
        montant_max_init,
        montant_max_corri,
        duree_execution
      })
      .returning('id');

      return id;
  };

 /* async getAllDossier() {
    return await db('analyses');
  };*/
  async getAllAnalyse(dossier_id) {
    return await db('analyses')
      .join('dossiers', 'dossiers.id', 'analyses.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'analyses.id as id',
        'analyses.date_effec_ana as date_effec_ana',
        'analyses.libelle as libelle',
        'analyses.lot_id as lot_id',
        'analyses.attributaire as attributaire',
        'analyses.montant_init as montant_init',
        'analyses.montant_corri as montant_corri',
        'analyses.montant_min_init as montant_min_init',
        'analyses.montant_min_corri as montant_min_corri',
        'analyses.montant_max_init as montant_max_init',
        'analyses.montant_max_corri as montant_max_corri',
        'analyses.duree_execution as duree_execution'
        
      )
      .where({dossier_id})
  };

  async getOneAnalyse(id) {
    return await db('analyses').where({id}).first();
  };

  async removeAnalyse(id) {
    return await db('analyses').where({id}).del();
  };

  async updateAnalyse(id,changes) {

    changes['date_effec_ana'] = commonUtils.formatOracleDate2(changes['date_effec_ana']);

    return await db('analyses').where({id}).update(changes)
    .then(() =>{
      return db('analyses').where({id}).first();
    });
  };

  async findAnalyse(dossier_id) {
    return await db('analyses')
    .join('dossiers', 'dossiers.id', 'analyses.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'analyses.id as id',
        'analyses.date_effec_ana as date_effec_ana',
        'analyses.libelle as libelle',
        'analyses.lot_id as lot_id',
        'analyses.attributaire as attributaire',
        'analyses.montant_init as montant_init',
        'analyses.montant_corri as montant_corri',
        'analyses.montant_min_init as montant_min_init',
        'analyses.montant_min_corri as montant_min_corri',
        'analyses.montant_max_init as montant_max_init',
        'analyses.montant_max_corri as montant_max_corri',
        'analyses.duree_execution as duree_execution'
      )
      .where({dossier_id})
      .orderBy('analyses.date_effec_ana','asc')
  };

  async findAnalyseByLot(lot_id) {
    return await db('analyses')
    .join('fournisseurs','fournisseurs.id','analyses.attributaire')
    .join('lots','lots.id','analyses.lot_id')
    .select(
      'lots.id as lotID',
      'lots.num_lot as num_lot',
      'lots.intitule_lot as intitule_lot',
      'lots.montant_lot as montant_lot',
      'fournisseurs.id as fourID',
      'fournisseurs.raison_sociale as raison_sociale',
      'analyses.id as id',
      'analyses.date_effec_ana as date_effec_ana',
      'analyses.libelle as libelle',
      'analyses.lot_id as lot_id',
      'analyses.attributaire as attributaire',
      'analyses.montant_init as montant_init',
      'analyses.montant_corri as montant_corri',
      'analyses.montant_min_init as montant_min_init',
      'analyses.montant_min_corri as montant_min_corri',
      'analyses.montant_max_init as montant_max_init',
      'analyses.montant_max_corri as montant_max_corri',
      'analyses.duree_execution as duree_execution'
    )
    .where({lot_id})
    
  };

 
}

module.exports = new AnalyseDAO();