const notificationDAO = require('../dao/notification');

class notificationService {
  createNotification(NotificationDto) {
    const { not_dossier_id,offre_id,numero,objet,date_notif,fournisseur_id,lot_id } = NotificationDto;
    return notificationDAO.createNotification(not_dossier_id,offre_id,numero,objet,date_notif,fournisseur_id,lot_id);
  };
  getAllNotification(not_dossier_id) {
    return notificationDAO.getAllNotification(not_dossier_id);
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

  findNotification(not_dossier_id){
      return notificationDAO.findNotification(not_dossier_id)
  }

  countNotification(annee){
    return notificationDAO.countNotification(annee)
}
  
}

module.exports = new notificationService();