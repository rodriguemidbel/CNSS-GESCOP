const db = require('../db/db');
var commonUtils = require('../common/common.utils');


class ReceptionDAO {
  async createReception(typreception_id,marche_id,fournisseur_id,date_recept,membre,
    autre,pv_recept) {
    const [id] = await db('receptions')
      .insert({
        typreception_id,
        marche_id,
        fournisseur_id,
        date_recept  : date_recept,
        membre,
        autre,
        pv_recept
      })
      .returning('id');

    return id;
  };

  async getAllReception() {
    return await db('receptions')
    .join('typreceptions', 'typreceptions.id', 'receptions.typreception_id')
    .join('marches', 'marches.id', 'receptions.marche_id')
    .join('dossiers', 'dossiers.id', 'lots.dossier_id')
    .join('fournisseurs', 'fournisseurs.id', 'receptions.fournisseur_id')
    .select(
      'dossiers.id as dossierID',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'marches.id as marche_id',
      'marches.num_ref as num_ref',
      'marches.objet as objet',
      'fournisseurs.id as fournisseurID',
      'fournisseurs.raison_sociale as raison_sociale',
      'typreceptions.libelle as typreception',
      'receptions.id as id',
      'receptions.date_recept as date_recept',
      'receptions.membre as membre',
      'receptions.autre as autre',
      'receptions.pv_recept as pv_recept'
      )
      .orderBy('receptions.id', 'asc');
  };

  async getOneReception(id) {
    return await db('receptions').where({id}).first();
  };

  async removeReception(id) {
    return await db('receptions').where({id}).del();
  };

  async updateReception(id,changes) {

    return await db('receptions').where({id}).update(changes)
    .then(() =>{
      return db('receptions').where({id}).first();
    });
  };

  async findReception(marche_id) {
    return await db('receptions')
    .join('typreceptions', 'typreceptions.id', 'receptions.typreception_id')
    .join('marches', 'marches.id', 'receptions.marche_id')
    .join('fournisseurs', 'fournisseurs.id', 'marches.fournisseur_id')
    .join('dossiers', 'dossiers.id', 'marches.dossier_id')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .select(
      'plans.annee as annee',
      'planitems.budget as budget',
      'marches.dossier_id as dossier_id',
      'marches.num_ref as num_ref',
      'marches.objet as objet',
      'marches.montant as montant',
      'marches.delai as delai',
      'fournisseurs.telephone1 as telephone1',
      'fournisseurs.telephone2 as telephone2',
      'fournisseurs.adresse as adresse',
      'fournisseurs.raison_sociale as raison_sociale',
      'fournisseurs.rccm as rccm',
      'fournisseurs.ifu as ifu',
      'fournisseurs.num_employeur as num_employeur',
      'fournisseurs.titre_resp as titre_resp',
      'fournisseurs.nom_prenom_resp as nom_prenom_resp',
      'typreceptions.libelle as type_reception',
      'receptions.id as id',
      'receptions.date_recept as date_recept',
      'receptions.membre as membre',
      'receptions.autre as autre',
      'receptions.pv_recept as pv_recept'
    )
    .where({marche_id})
  };

   /*----------------*/
   async countReception(marche_id) {
    return await db('receptions')
    .join('marches', 'marches.id', 'receptions.marche_id')
    .count('receptions.id as nbr')
    .where({marche_id})
  };

 
 
}

module.exports = new ReceptionDAO();