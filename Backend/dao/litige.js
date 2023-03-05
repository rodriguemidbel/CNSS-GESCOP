const db = require('../db/db');

class LitigeDAO {
  async createLitige(dossier_id,lot_id,motif,decision,date_ord,fournisseur_id,resultat,plainte,fichier) {
    const [id] = await db('litiges')
      .insert({
        dossier_id,
        lot_id,
        motif,
        decision,
        date_ord,
        fournisseur_id,
        resultat,
        plainte,
        fichier
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('litiges');
  };*/
  async getAllLitige(dossier_id) {
    return await db('litiges')
      .join('dossiers', 'dossiers.id', 'litiges.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'litiges.id as id',
        'litiges.lot_id as lot_id',
        'litiges.motif as motif',
        'litiges.decision as decision',
        'litiges.date_ord as date_ord',
        'litiges.fournisseur_id as fournisseur_id',
        'litiges.resultat as resultat',
        'litiges.fichier as fichier'
      )
      .where({dossier_id})
  };

  async getOneLitige(id) {
    return await db('litiges').where({id}).first();
  };

  async removeLitige(id) {
    return await db('litiges').where({id}).del();
  };

  async updateLitige(id,changes) {
    return await db('litiges').where({id}).update(changes)
    .then(() =>{
      return db('litiges').where({id}).first();
    });
  };

  async findLitige(dossier_id) {
    return await db('litiges')
    .join('dossiers', 'dossiers.id', 'litiges.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'litiges.id as id',
        'litiges.lot_id as lot_id',
        'litiges.motif as motif',
        'litiges.decision as decision',
        'litiges.date_ord as date_ord',
        'litiges.fournisseur_id as fournisseur_id',
        'litiges.resultat as resultat',
        'litiges.plainte as plainte',
        'litiges.fichier as fichier'
        )
      .where({dossier_id})
  };

 
}

module.exports = new LitigeDAO();