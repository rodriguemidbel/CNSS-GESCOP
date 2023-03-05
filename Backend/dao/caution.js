const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class CautionDAO {
  async createCaution(dossier_id,marche_id,ref_marche,soumissionaire,nature_caution,date_caution,banque,montant_caution,
    date_trans,date_lettre,date_recp_lettre,lettre_confirmation,lettre_demande,caution) {
    const [id] = await db('cautions')
      .insert({
        dossier_id,
        marche_id,
        ref_marche,
        soumissionaire,
        nature_caution,
        date_caution : commonUtils.formatOracleDate2(date_caution),
        banque,
        montant_caution,
        date_trans,
        date_lettre,
        date_recp_lettre,
        lettre_confirmation,
        lettre_demande,
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
        'cautions.caution as caution',
        'cautions.lettre_demande as lettre_demande',
        'cautions.lettre_confirmation as lettre_confirmation'
      )
      
  };

  async getOneCaution(id) {
    return await db('cautions').where({id}).first();
  };

  async removeCaution(id) {
    return await db('cautions').where({id}).del();
  };

  async updateCaution(id,changes) {

    changes['date_caution'] = commonUtils.formatOracleDate2(changes['date_caution']);

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
        'cautions.caution as caution',
        'cautions.lettre_demande as lettre_demande',
        'cautions.lettre_confirmation as lettre_confirmation'
      )
      .where({dossier_id})
  };

 
}

module.exports = new CautionDAO();