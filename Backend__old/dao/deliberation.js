const db = require('../db/db');

class DeliberationDAO {
  async createDeliberation(dossier_id,date_delib,date_transpv_sign,date_retourpv_sign,date_transpv_dgcmef,
         typedelib,pvdeliberation) {
    const [id] = await db('deliberations')
      .insert({
        dossier_id,
        date_delib,
        date_transpv_sign,
        date_retourpv_sign,
        date_transpv_dgcmef,
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
        'deliberations.date_delib as date_delib',
        'deliberations.date_transpv_sign as date_transpv_sign',
        'deliberations.date_retourpv_sign as date_retourpv_sign',
        'deliberations.date_transpv_dgcmef as date_transpv_dgcmef',
        'deliberations.typedelib as typedelib',
        'deliberations.pvdeliberation as pvdeliberation'
      )
      .orderBy('deliberations.date_delib','asc')
     
      
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
      'deliberations.date_delib as date_delib',
      'deliberations.date_transpv_sign as date_transpv_sign',
      'deliberations.date_retourpv_sign as date_retourpv_sign',
      'deliberations.date_transpv_dgcmef as date_transpv_dgcmef',
      'deliberations.typedelib as typedelib',
      'deliberations.pvdeliberation as pvdeliberation'
    )
    .where({dossier_id})
    .orderBy('deliberations.date_delib','asc')
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