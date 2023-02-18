const groupementService = require('../service/groupement');

class GroupementController {
  async createGroupement(req, res) {
    try {
      const id = await groupementService.createGroupement(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };

  async getAllGroupement(req, res) {
    try {
      const Groupements = await groupementService.getAllGroupement();
      res.status(201).json(Groupements);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneGroupement(req, res) {
    try {
      const {id} = req.params;
      const Groupements = await groupementService.getOneGroupement(id);
      if(Groupements)
      {
        res.status(201).json(Groupements);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeGroupement(req, res) {
    try {
      const {id} = req.params;
      const count = await groupementService.removeGroupement(id);
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

  async updateGroupement(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Groupements = await groupementService.updateGroupement(id,changes);
      if(Groupements)
      {
        res.status(201).json(Groupements);
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

module.exports = new GroupementController();