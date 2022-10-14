const notificationDAO = require('../dao/notification');

class notificationService {
  createNotification(NotificationDto) {
    const { dossier_id,offre_id,numero,objet,date_notif,fournisseur_id,lot_id } = NotificationDto;
    return notificationDAO.createNotification(dossier_id,offre_id,numero,objet,date_notif,fournisseur_id,lot_id);
  };
  getAllNotification(dossier_id) {
    return notificationDAO.getAllNotification(dossier_id);
  };
  getOneNotification(id) {
    return notificationDAO.getOneNotification(id);
  };
  removeNotification(id) {
    return notificationDAO.removeNotification(id);
  };
  updateNotification(id,changes) {
    return notificationDAO.updateNotification(id,changes);
  };

  findNotification(dossier_id){
      return notificationDAO.findNotification(dossier_id)
  }

  countNotification(annee){
    return notificationDAO.countNotification(annee)
}
  
}

module.exports = new notificationService();