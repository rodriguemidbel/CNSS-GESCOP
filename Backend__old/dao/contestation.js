const db = require('../db/db');

class ContestationDAO {
  async createAvi(resultat_id,ref_conv,date_conv,structure_conv,statut_contest,commentaire,date_retour_not,decision,lettre_conv) {
    const [id] = await db('contestions')
      .insert({
        resultat_id,
        ref_conv,
        date_conv,
        structure_conv,
        statut_contest,
        commentaire,
        date_retour_not,
        decision,
        lettre_conv
      })
      .returning('id');

    return id;
  };

  /*async getAllDossier() {
    return await db('contestions');
  };*/
  async getAllAvi(resultat_id) {
    return await db('contestions')
      .join('resultats', 'resultats.id', 'contestions.resultat_id')
      .select(
        'resultats.id as resultatID',
        'contestions.id as id',
        'contestions.ref_conv as ref_conv',
        'contestions.date_conv as date_conv',
        'contestions.structure_conv as structure_conv',
        'contestions.statut_contest as statut_contest',
        'contestions.commentaire as commentaire',
        'contestions.date_retour_not as date_retour_not',
        'contestions.decision as decision',
        'contestions.lettre_conv as lettre_conv'
      )
      .where({resultat_id})
  };

  async getOneAvi(id) {
    return await db('contestions').where({id}).first();
  };

  async removeAvi(id) {
    return await db('contestions').where({id}).del();
  };

  async updateAvi(id,changes) {
    return await db('contestions').where({id}).update(changes)
    .then(() =>{
      return db('contestions').where({id}).first();
    });
  };

  async findAvi(resultat_id) {
    return await db('contestions')
    .join('resultats', 'resultats.id', 'contestions.resultat_id')
    .select(
      'resultats.id as resultatID',
      'contestions.id as id',
      'contestions.ref_conv as ref_conv',
      'contestions.date_conv as date_conv',
      'contestions.structure_conv as structure_conv',
      'contestions.statut_contest as statut_contest',
      'contestions.commentaire as commentaire',
      'contestions.date_retour_not as date_retour_not',
      'contestions.decision as decision',
      'contestions.lettre_conv as lettre_conv'
    )
    .where({resultat_id})
  };

 
}

module.exports = new ContestationDAO();