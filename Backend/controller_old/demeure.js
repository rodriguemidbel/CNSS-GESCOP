const DemeureService = require('../service/demeure');

class DemeureController {
  async createDemeure(req, res) {
    try {
      const id = await DemeureService.createDemeure(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };

  
  async getAllDemeure(req, res) {
    try {
      const Demeures = await DemeureService.getAllDemeure();
      res.status(201).json(Demeures);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneDemeure(req, res) {
    try {
      const {id} = req.params;
      const Demeures = await DemeureService.getOneDemeure(id);
      if(Demeures)
      {
        res.status(201).json(Demeures);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeDemeure(req, res) {
    try {
      const {id} = req.params;
      const count = await DemeureService.removeDemeure(id);
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

  async updateDemeure(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Demeures = await DemeureService.updateDemeure(id,changes);
      if(Demeures)
      {
        res.status(201).json(Demeures);
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

module.exports = new DemeureController();