const db = require('../db/db');

class DeliberationDAO {
  async createDeliberation(dossier_id,date_convocation,date_transpv_sign,date_retourpv_sign,date_transpv_dgcmef,
         lot_id,attributaire,attr_statut,attributaire2,attr_statut2,attributaire3,attr_statut3,montant_initiale,montant_corrige,duree_execution,typedelib,pvdeliberation) {
    const [id] = await db('deliberations')
      .insert({
        dossier_id,
        date_convocation,
        date_transpv_sign,
        date_retourpv_sign,
        date_transpv_dgcmef,
        lot_id,
        attributaire,
        attr_statut,
        attributaire2,
        attr_statut2,
        attributaire3,
        attr_statut3,
        montant_initiale,
        montant_corrige,
        duree_execution,
        typedelib,
        pvdeliberation
      })
      .returning('id');

    return id;
  };

  async getAllDeliberation() {
    return await db('deliberations')
      .join('dossiers', 'dossiers.id', 'deliberations.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'deliberations.id as id',
        'deliberations.date_convocation as date_convocation',
        'deliberations.date_transpv_sign as date_transpv_sign',
        'deliberations.date_retourpv_sign as date_retourpv_sign',
        'deliberations.date_transpv_dgcmef as date_transpv_dgcmef',
        'deliberations.typedelib as typedelib',
        'deliberations.pvdeliberation as pv'
        
      )
      
  };

  async getOneDeliberation(id) {
    return await db('deliberations').where({id}).first();
  };

  async removeDeliberation(id) {
    return await db('deliberations').where({id}).del();
  };

  async updateDeliberation(id,changes) {
    return await db('deliberations').where({id}).update(changes)
    .then(() =>{
      return db('deliberations').where({id}).first();
    });
  };

  async findDeliberation(dossier_id) {
    return await db('deliberations')
    .join('dossiers', 'dossiers.id', 'deliberations.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'deliberations.id as id',
        'deliberations.date_convocation as date_convocation',
        'deliberations.date_transpv_sign as date_transpv_sign',
        'deliberations.date_retourpv_sign as date_retourpv_sign',
        'deliberations.date_transpv_dgcmef as date_transpv_dgcmef',
        'deliberations.typedelib as typedelib',
        'deliberations.pvdeliberation as pv'
        
      )
      .where({dossier_id})
  };

  
  async findDelibByLotID(lot_id) {
    return await db('deliberations')
    .join('dossiers', 'dossiers.id', 'deliberations.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'deliberations.id as id',
        'deliberations.lot_id as lot_id',
        'deliberations.date_convocation as date_convocation',
        'deliberations.date_transpv_sign as date_transpv_sign',
        'deliberations.date_retourpv_sign as date_retourpv_sign',
        'deliberations.date_transpv_dgcmef as date_transpv_dgcmef',
        'deliberations.typedelib as typedelib',
        'deliberations.pvdeliberation as pv',
        'deliberations.duree_execution as duree_execution',
        'deliberations.montant_initiale as montant_initiale',
        'deliberations.montant_corrige as montant_corrige'
        
      )
      .where({lot_id})
  };


 
}

module.exports = new DeliberationDAO();