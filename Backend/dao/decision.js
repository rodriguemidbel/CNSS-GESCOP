const db = require('../db/db');
var commonUtils = require('../common/common.utils');


class DecisionDAO {
  async createDecision(marche_id,date_decision,nature_decision,ref_marche,ref_ordre,recep_tech,
    recep_prov,montant_marche,montant_penalite,montant_guarantie,retenue_src,retenue_arcop,
    retenue_cotisation,montant_decision,solde_marche,bordereau_liv,ref_fact,facture_def,
    decision,caution,autre_doc) {
    const [id] = await db('decisions')
      .insert({
        marche_id,
        date_decision : date_decision,
        nature_decision,
        ref_marche,
        ref_ordre,
        recep_tech,
        recep_prov,
        montant_marche,
        montant_penalite,
        montant_guarantie,
        retenue_src,
        retenue_arcop,
        retenue_cotisation,
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

  async findDecision(marche_id) {
    return await db('decisions')
    .select(
      'decisions.id as id',
      'decisions.marche_id as marche_id',
      'decisions.nature_decision as nature_decision',
      'decisions.date_decision as date_decision',
      'decisions.ref_marche as ref_marche',
      'decisions.ref_ordre as ref_ordre',
      'decisions.recep_tech as recep_tech',
      'decisions.recep_prov as recep_prov',
      'decisions.montant_marche as montant_marche',
      'decisions.montant_penalite as montant_penalite',
      'decisions.montant_guarantie as montant_guarantie',
      'decisions.retenue_src as retenue_src',
      'decisions.retenue_arcop as retenue_arcop',
      'decisions.retenue_cotisation as retenue_cotisation',
      'decisions.montant_decision as montant_decision',
      'decisions.decision as decision',
      'decisions.bordereau_liv as bordereau_liv',
      'decisions.ref_fact as ref_fact',
      'decisions.facture_def as facture_def',
      'decisions.decision as decision',
      'decisions.caution as caution',
      'decisions.autre_doc as autre_doc',
      'decisions.facture_def as facture_def',
    )
    .where({marche_id})
  };

 
}

module.exports = new DecisionDAO();