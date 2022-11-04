const db = require('../db/db');

class VentefrsDAO {
  async createVentefrs(vente_id,fournisseur_id,chef_file) {
    const [id] = await db('ventefrs')
      .insert({
        vente_id,
        fournisseur_id,
        chef_file
      })
      .returning('id');
    return id;
  };

  
  async getAllVentefrs(vente_id) {
    return await db('ventefrs')
    .join('fournisseurs','fournisseurs.id','ventefrs.fournisseur_id')
    .select(
        'fournisseurs.raison_sociale as raison_sociale',
        'ventefrs.id as id',
        'ventefrs.fournisseur_id as fournisseur_id',
        'ventefrs.vente_id as vente_id',
        'ventefrs.asf as asf',
        'ventefrs.asc as asc',
        'ventefrs.ajt as ajt',
        'ventefrs.drtss as drtss',
        'ventefrs.rccm as rccm',
        'ventefrs.cnf as cnf',
        'ventefrs.caut as caut',
        'ventefrs.chef_file as chef_file'
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