const db = require('../db/db');

class SignataireDAO {
  async createSignataire(nom,prenom,titre,distinction,localisation_id,cam,sct,pv,ordre,actif) {
    const [id] = await db('signataires')
      .insert({
        nom,
        prenom,
        titre,
        distinction,
        localisation_id,
        cam,
        sct,
        pv,
        ordre,
        actif
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('signataires');
  };*/
  async getAllSignataire() {
    return await db('signataires')
      .join('localisations', 'localisations.id', 'signataires.localisation_id')
      .select(
        'signataires.id as id',
        'signataires.nom as nom',
        'signataires.prenom as prenom',
        'signataires.titre as titre',
        'signataires.distinction as distinction',
        'signataires.localisation_id as localisation_id',
        'signataires.cam as cam',
        'signataires.sct as sct',
        'signataires.pv as pv',
        'signataires.ordre as ordre',
        'signataires.actif as actif',
        'localisations.dr_no as dr_no',
        'localisations.sigle as sigle'
      )
  };

  async getOneSignataire(id) {
    return await db('signataires').where({id}).first();
  };

  async removeSignataire(id) {
    return await db('signataires').where({id}).del();
  };

  async updateSignataire(id,changes) {
    return await db('signataires').where({id}).update(changes)
    .then(() =>{
      return db('signataires').where({id}).first();
    });
  };

  async findSignataire(localisation_id) {
    return await db('signataires')
      .join('localisations', 'localisations.id', 'signataires.localisation_id')
      .select(
        'signataires.id as id',
        'signataires.nom as nom',
        'signataires.prenom as prenom',
        'signataires.titre as titre',
        'signataires.distinction as distinction',
        'signataires.localisation_id as localisation_id',
        'signataires.cam as cam',
        'signataires.sct as sct',
        'signataires.pv as pv',
        'signataires.ordre as ordre',
        'signataires.actif as actif',
        'localisations.dr_no as dr_no',
        'localisations.sigle as sigle'
      )
      .where({localisation_id,actif : 1})
  };

 
}

module.exports = new SignataireDAO();