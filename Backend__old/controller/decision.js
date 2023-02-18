const decisionService = require('../service/decision');

class DecisionController {
  async createDecision(req, res) {
    try {
      const id = await decisionService.createDecision(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  
  async getAllDecision(req, res) {
    try {
      const Decisions = await decisionService.getAllDecision();
      res.status(201).json(Decisions);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneDecision(req, res) {
    try {
      const {id} = req.params;
      const Decisions = await decisionService.getOneDecision(id);
      if(Decisions)
      {
        res.status(201).json(Decisions);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeDecision(req, res) {
    try {
      const {id} = req.params;
      const count = await decisionService.removeDecision(id);
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

  async updateDecision(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Decisions = await decisionService.updateDecision(id,changes);
      if(Decisions)
      {
        res.status(201).json(Decisions);
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

module.exports = new DecisionController();