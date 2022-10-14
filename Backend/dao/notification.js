const db = require('../db/db');

class NotificationDAO {
  async createNotification(dossier_id,offre_id,numero,objet,date_notif,fournisseur_id,lot_id) {
    const [id] = await db('notifications')
      .insert({
        dossier_id,
        offre_id,
        numero,
        objet,
        date_notif,
        fournisseur_id,
        lot_id
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('notifications');
  };*/
  async getAllNotification(dossier_id) {
    return await db('notifications')
    .join('dossiers', 'dossiers.id', 'notifications.dossier_id')
    .join('fournisseurs', 'fournisseurs.id', 'notifications.fournisseur_id')
    .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'fournisseurs.raison_sociale as raison_sociale',
        'notifications.id as id',
        'notifications.offre_id as offre_id',
        'notifications.numero as numero',
        'notifications.objet as objet',
        'notifications.date_notif as date_notif',
        'notifications.fournisseur_id as fournisseur_id',
        'notifications.lot_id as lot_id'
    )
    .where({dossier_id})
  };

  async getOneNotification(id) {
    return await db('notifications').where({id}).first();
  };

  async removeNotification(id) {
    return await db('notifications').where({id}).del();
  };

  async updateNotification(id,changes) {
    return await db('notifications').where({id}).update(changes)
    .then(() =>{
      return db('notifications').where({id}).first();
    });
  };

  async findNotification(dossier_id) {
    return await db('notifications')
    .join('dossiers', 'dossiers.id', 'notifications.dossier_id')
    .join('fournisseurs', 'fournisseurs.id', 'notifications.fournisseur_id')
    .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'fournisseurs.raison_sociale as raison_sociale',
        'notifications.id as id',
        'notifications.offre_id as offre_id',
        'notifications.numero as numero',
        'notifications.objet as objet',
        'notifications.date_notif as date_notif',
        'notifications.fournisseur_id as fournisseur_id',
        'notifications.lot_id as lot_id'
    )
    .where({dossier_id})
  };

  async countNotification(annee) {
    return await db('notifications')
    .join('dossiers', 'dossiers.id', 'notifications.dossier_id')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .count('dossiers.id as nbr')
    .where({annee})
  };

 
}

module.exports = new NotificationDAO();