const offrefrsService = require('../service/Offrefrs');

class OffrefrsController {
  async createOffrefrs(req, res) {
    try {
      const id = await offrefrsService.createOffrefrs(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllOffrefrs(req, res) {
    try {
      const {offre_id} = req.params;
      const offrefrs = await offrefrsService.getAllOffrefrs(offre_id);
      res.status(201).json(offrefrs);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneOffrefrs(req, res) {
    try {
      const {id} = req.params;
      const offrefrs = await offrefrsService.getOneOffrefrs(id);
      if(offrefrs)
      {
        res.status(201).json(offrefrs);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeOffrefrs(req, res) {
    try {
      const {id} = req.params;
      const count = await offrefrsService.removeOffrefrs(id);
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

  async updateOffrefrs(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const offrefrs = await offrefrsService.updateOffrefrs(id,changes);
      if(offrefrs)
      {
        res.status(201).json(offrefrs);
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

module.exports = new OffrefrsController();