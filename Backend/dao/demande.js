const db = require('../db/db');
var commonUtils = require('../common/common.utils');


class DemandeDAO {
  async createDemande(marche_id,ordreserv_id,date_demande,motif,courrier) {
    const [id] = await db('recepdemandes')
      .insert({
        marche_id,
        ordreserv_id,
        date_demande : commonUtils.formatOracleDate2(date_demande),
        motif,
        courrier
      })
      .returning('id');

    return id;
  };

  async getAllDemande() {
    return await db('recepdemandes')
    .join('marches', 'marches.id', 'recepdemandes.marche_id')
    .join('dossiers', 'dossiers.id', 'marches.dossier_id')
    .join('fournisseurs', 'fournisseurs.id', 'marches.fournisseur_id')
    .select(
      'dossiers.id as dossierID',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'marches.id as marche_id',
      'marches.num_ref as num_ref',
      'marches.objet as objet',
      'fournisseurs.id as fournisseurID',
      'fournisseurs.raison_sociale as raison_sociale',
      'recepdemandes.id as id',
      'recepdemandes.date_demande as date_demande',
      'recepdemandes.motif as motif'
     
      )
      .orderBy('recepdemandes.id', 'asc');
  };

  async getOneDemande(id) {
    return await db('recepdemandes').where({id}).first();
  };

  async removeDemande(id) {
    return await db('recepdemandes').where({id}).del();
  };

  async updateDemande(id,changes) {

    changes['date_demande'] = commonUtils.formatOracleDate2(changes['date_demande']);

    return await db('recepdemandes').where({id}).update(changes)
    .then(() =>{
      return db('recepdemandes').where({id}).first();
    });
  };

  async findDemande(marche_id) {
    return await db('recepdemandes')
    .join('marches', 'marches.id', 'recepdemandes.marche_id')
    .join('dossiers', 'dossiers.id', 'marches.dossier_id')
    .join('fournisseurs', 'fournisseurs.id', 'marches.fournisseur_id')
    .select(
      'dossiers.id as dossierID',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'marches.id as marche_id',
      'marches.num_ref as num_ref',
      'marches.objet as objet',
      'fournisseurs.id as fournisseurID',
      'fournisseurs.raison_sociale as raison_sociale',
      'recepdemandes.id as id',
      'recepdemandes.date_demande as date_demande',
      'recepdemandes.motif as motif',
      'recepdemandes.courrier as courrier'
      )
    .where({marche_id})
  };

   /*----------------*/
   async countDemande(marche_id) {
    return await db('recepdemandes')
    .join('marches', 'marches.id', 'recepdemandes.marche_id')
    .count('recepdemandes.id as nbr')
    .where({marche_id})
  };

 
 
}

module.exports = new DemandeDAO();