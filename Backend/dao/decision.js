const db = require('../db/db');


class DecisionDAO {
  async createDecision(marche_id,nature_decision,montant_marche,montant_penalite,montant_guarantie,montant_decision,
    solde_marche,bordereau_liv,ref_fact,facture_def,decision,caution,autre_doc) {
    const [id] = await db('decisions')
      .insert({
        marche_id,
        nature_decision,
        montant_marche,
        montant_penalite,
        montant_guarantie,
        montant_decision,
        solde_marche,
        bordereau_liv,
        ref_fact,
        facture_def,
        decision,
        caution,
        autre_doc
      })
      .returning('id');

    return id;
  };

  

  async getAllDecision() {
    return await db('decisions');
  };

  async getOneDecision(id) {
    return await db('decisions').where({id}).first();
  };

  async removeDecision(id) {
    return await db('decisions').where({id}).del();
  };

  async updateDecision(id,changes) {
    return await db('decisions').where({id}).update(changes)
    .then(() =>{
      return db('decisions').where({id}).first();
    });
  };

 
}

module.exports = new DecisionDAO();