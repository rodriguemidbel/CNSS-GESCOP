const db = require('../db/db');


class PenaliteDAO {
  async createPenalite(marche_id,date_pen,ref_marche,attributaire,montant_ht,delai,tx_pen,ref_ord,date_recep_tech,
    date_recep_prov,delai_reel,nbj_pen,montant_pen,decompte_pen,fichier) {
    const [id] = await db('penalites')
      .insert({
        marche_id,
        date_pen,
        ref_marche,
        attributaire,
        montant_ht,
        delai,
        tx_pen,
        ref_ord,
        date_recep_tech,
        date_recep_prov,
        delai_reel,
        nbj_pen,
        montant_pen,
        decompte_pen,
        fichier
      })
      .returning('id');

    return id;
  };


  async getAllPenalite() {
    return await db('penalites');
  };

  async getOnePenalite(id) {
    return await db('penalites').where({id}).first();
  };

  async removePenalite(id) {
    return await db('penalites').where({id}).del();
  };

  async updatePenalite(id,changes) {
    return await db('penalites').where({id}).update(changes)
    .then(() =>{
      return db('penalites').where({id}).first();
    });
  };

  async findPenalite(marche_id) {
    return await db('penalites')
    .select(
      'penalites.id as id',
      'penalites.marche_id as marche_id',
      'penalites.date_pen as date_pen',
      'penalites.ref_marche as ref_marche',
      'penalites.attributaire as attributaire',
      'penalites.montant_ht as montant_ht',
      'penalites.delai as delai',
      'penalites.tx_pen as tx_pen',
      'penalites.ref_ord as ref_ord',
      'penalites.date_recep_tech as date_recep_tech',
      'penalites.date_recep_prov as date_recep_prov',
      'penalites.delai_reel as delai_reel',
      'penalites.nbj_pen as nbj_pen',
      'penalites.montant_pen as montant_pen',
      'penalites.decompte_pen as decompte_pen',
      'penalites.fichier as fichier'
    )
    .where({marche_id})
  };

 
}

module.exports = new PenaliteDAO();