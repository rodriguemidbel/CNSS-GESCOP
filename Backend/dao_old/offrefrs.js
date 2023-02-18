const db = require('../db/db');

class OffrefrsDAO {
  async createOffrefrs(offre_id,fournisseur_id) {
    const [id] = await db('offrefrs')
      .insert({
        offre_id,
        fournisseur_id
      })
      .returning('id');

    return id;
  };

  async getAllOffrefrs(offre_id) {
    return await db('offrefrs')
    .join('offres','offres.id','offrefrs.offre_id')
    .join('fournisseurs','fournisseurs.id','offrefrs.fournisseur_id')
    .select(
        'fournisseurs.id as fourID',
        'fournisseurs.nom_four as nom_four',
        'offrefrs.id as id',
        'offrefrs.asf as asf',
        'offrefrs.asc as asc',
        'offrefrs.ajt as ajt',
        'offrefrs.drtss as drtss',
        'offrefrs.rccm as rccm',
        'offrefrs.cnf as cnf'
    )
    .where({offre_id})
  };
  async getOneOffrefrs(id) {
    return await db('offrefrs').where({id}).first();
  };

  async removeOffrefrs(id) {
    return await db('offrefrs').where({id}).del();
  };

  async updateOffrefrs(id,changes) {
    return await db('offrefrs').where({id}).update(changes)
    .then(() =>{
      return db('offrefrs').where({id}).first();
    });
  };



 
}

module.exports = new OffrefrsDAO();