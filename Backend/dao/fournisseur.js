const db = require('../db/db');

class FournisseurDAO {
  async createFournisseur(raison_sociale,rccm,ifu,num_employeur,telephone1,telephone2,adresse,email,domaine,activite,titre_resp,nom_prenom_resp,type) {
    const [id] = await db('fournisseurs')
      .insert({
        raison_sociale,
        rccm,
        ifu,
        num_employeur,
        telephone1,
        telephone2,
        adresse,
        email,
        domaine,
        activite,
        titre_resp,
        nom_prenom_resp,
        type
      })
      .returning('id');

    return id;
  };

  async getAllFournisseur() {
    return await db('fournisseurs');
  };

  async getOneFournisseur(id) {
    return await db('fournisseurs').where({id}).first();
  };

  async removeFournisseur(id) {
    return await db('fournisseurs').where({id}).del();
  };

  async updateFournisseur(id,changes) {
    return await db('fournisseurs').where({id}).update(changes)
    .then(() =>{
      return db('fournisseurs').where({id}).first();
    });
  };

  async findFrs(ifu,rccm){
    return await db('fournisseurs')
    .select(
      'fournisseurs.raison_sociale as raison_sociale',
      'fournisseurs.rccm as rccm',
      'fournisseurs.ifu as ifu')
    .where({ifu,rccm});
};

 
}

module.exports = new FournisseurDAO();