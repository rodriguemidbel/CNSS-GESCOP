const histoplanService = require('../service/histoplan');

class PlanController {
  async createHistoplan(req, res) {
    try {
      const id = await histoplanService.createHistoplan(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllHistoPlan(req, res) {
    try {
      const plans = await histoplanService.getAllHistoPlan();
      res.status(201).json(plans);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneHistoPlan(req, res) {
    try {
      const {id} = req.params;
      const plans = await histoplanService.getOneHistoPlan(id);
      if(plans)
      {
        res.status(201).json(plans);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeHistoPlan(req, res) {
    try {
      const {id} = req.params;
      const count = await histoplanService.removeHistoPlan(id);
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

  async updateHistoPlan(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const plans = await histoplanService.updateHistoPlan(id,changes);
      if(plans)
      {
        res.status(201).json(plans);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  
  async findHistoPlan(req, res) {
    try {
      const {annee} = req.params;
      const item = await histoplanService.findHistoPlan(annee);
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

module.exports = new PlanController();