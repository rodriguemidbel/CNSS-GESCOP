const notificationDAO = require('../dao/notification');

class notificationService {
  createNotification(NotificationDto) {
    const { not_dossier_id,numero,date_notif,fournisseur_id,lot_id,fichiernot } = NotificationDto;
    return notificationDAO.createNotification(not_dossier_id,numero,date_notif,fournisseur_id,lot_id,fichiernot);
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