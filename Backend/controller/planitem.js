const planitemService = require('../service/planitem');

class PlanitemController {
  
  

  async createPlanitem(req, res) {
    try {
      const id = await planitemService.createPlanitem(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllPlanitem(req, res) {
    try {
      const items = await planitemService.getAllPlanitem();
      res.status(201).json(items);
    } catch (err) {
      console.error(err);
    }
  };
  async getOnePlanitem(req, res) {
    try {
      const {id} = req.params;
      const items = await planitemService.getOnePlanitem(id);
      if(items)
      {
        res.status(201).json(items);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removePlanitem(req, res) {
    try {
      const {id} = req.params;
      const count = await planitemService.removePlanitem(id);
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

  async updatePlanitem(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const items = await planitemService.updatePlanitem(id,changes);
      if(items)
      {
        res.status(201).json(items);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findPlanitem(req, res) {
    try {
      const {annee} = req.params;
      const item = await planitemService.findPlanitem(annee);
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

  async findLigneByPlanID(req, res) {
    try {
      const {plan_id} = req.params;
      const item = await planitemService.findLigneByPlanID(plan_id);
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

  async findPlanitemByLoc(req, res) {
    try {
      const {plan_id,localisation_id} = req.params;
      const item = await planitemService.findPlanitemByLoc(plan_id,localisation_id);
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

module.exports = new PlanitemController();