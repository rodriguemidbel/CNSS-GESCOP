const notificationService = require('../service/notification');

class NotificationController {
  async createNotification(req, res) {
    try {
      const id = await notificationService.createNotification(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllNotification(req, res) {
    try {
      const {not_dossier_id} = req.params;
      const Notifications = await notificationService.getAllNotification(not_dossier_id);
      res.status(201).json(Notifications);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneNotification(req, res) {
    try {
      const {id} = req.params;
      const Notifications = await notificationService.getOneNotification(id);
      if(Notifications)
      {
        res.status(201).json(Notifications);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeNotification(req, res) {
    try {
      const {id} = req.params;
      const count = await notificationService.removeNotification(id);
      if(count > 0)
      {
        res.status(201).json({message : 'Successfuly deleted'});
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async updateNotification(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Notifications = await notificationService.updateNotification(id,changes);
      if(Notifications)
      {
        res.status(201).json(Notifications);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findNotification(req, res) {
    try {
      const {not_dossier_id} = req.params;
      const item = await notificationService.findNotification(not_dossier_id);
      if(item)
      {
        res.status(201).json(item);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async countNotification(req, res) {
    try {
      const {annee} = req.params;
      const item = await notificationService.countNotification(annee);
      if(item)
      {
        res.status(201).json(item);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  
}

module.exports = new NotificationController();