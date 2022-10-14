const db = require('../db/db');

class VentefrsDAO {
  async createVentefrs(vente_id,lot_id,fournisseur_id,grpent) {
    const [id] = await db('ventefrs')
      .insert({
        vente_id,
        lot_id,
        fournisseur_id,
        grpent
      })
      .returning('id');
    return id;
  };

  
  async getAllVentefrs(vente_id) {
    return await db('ventefrs')
    .select(
        'ventefrs.id as fourID',
        'ventefrs.vente_id as vente_id',
        'ventefrs.lot_id as lot_id',
        'ventefrs.fournisseur_id as fournisseur_id',
        'ventefrs.groupement_id as groupement_id',
        'ventefrs.asf as asf',
        'ventefrs.asc as asc',
        'ventefrs.ajt as ajt',
        'ventefrs.drtss as drtss',
        'ventefrs.rccm as rccm',
        'ventefrs.cnf as cnf',
        'ventefrs.caut as caut'
    )
    .where({vente_id})
  };

  async getOneVentefrs(id) {
    return await db('ventefrs').where({id}).first();
  };

  async removeVentefrs(id) {
    return await db('ventefrs').where({id}).del();
  };

  async updateVentefrs(id,changes) {
    return await db('ventefrs').where({id}).update(changes)
    .then(() =>{
      return db('ventefrs').where({id}).first();
    });
  };

}

module.exports = new VentefrsDAO();