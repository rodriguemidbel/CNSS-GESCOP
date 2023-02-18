const db = require('../db/db');

class CautionDAO {
  async createCaution(dossier_id,soumissionaire,date_caution,banque,montant_caution,date_trans,date_lettre,date_recp_lettre,caution) {
    const [id] = await db('cautions')
      .insert({
        dossier_id,
        soumissionaire,
        date_caution,
        banque,
        montant_caution,
        date_trans,
        date_lettre,
        date_recp_lettre,
        caution
      })
      .returning('id');

    return id;
  };

  async getAllCaution() {
    return await db('cautions')
      .join('dossiers', 'dossiers.id', 'cautions.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'cautions.id as id',
        'cautions.soumissionaire as soumissionaire',
        'cautions.date_caution as date_caution',
        'cautions.banque as banque',
        'cautions.montant_caution as montant_caution',
        'cautions.date_trans as date_trans',
        'cautions.date_lettre as date_lettre',
        'cautions.date_recp_lettre as date_recp_lettre',
        'cautions.caution as caution'
      )
      
  };

  async getOneCaution(id) {
    return await db('cautions').where({id}).first();
  };

  async removeCaution(id) {
    return await db('cautions').where({id}).del();
  };

  async updateCaution(id,changes) {
    return await db('cautions').where({id}).update(changes)
    .then(() =>{
      return db('cautions').where({id}).first();
    });
  };

  async findcautions(dossier_id) {
    return await db('cautions')
    .join('dossiers', 'dossiers.id', 'cautions.dossier_id')
    .select(
      'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'cautions.id as id',
        'cautions.soumissionaire as soumissionaire',
        'cautions.date_caution as date_caution',
        'cautions.banque as banque',
        'cautions.montant_caution as montant_caution',
        'cautions.date_trans as date_trans',
        'cautions.date_lettre as date_lettre',
        'cautions.date_recp_lettre as date_recp_lettre',
        'cautions.caution as caution'
      )
      .where({dossier_id})
  };

 
}

module.exports = new CautionDAO();