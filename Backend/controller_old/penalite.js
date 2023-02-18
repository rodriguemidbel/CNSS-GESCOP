const penaliteService = require('../service/penalite');

class PenaliteController {
  async createPenalite(req, res) {
    try {
      const id = await penaliteService.createPenalite(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };


  async getAllPenalite(req, res) {
    try {
      const Penalites = await penaliteService.getAllPenalite();
      res.status(201).json(Penalites);
    } catch (err) {
      console.error(err);
    }
  };
  async getOnePenalite(req, res) {
    try {
      const {id} = req.params;
      const Penalites = await penaliteService.getOnePenalite(id);
      if(Penalites)
      {
        res.status(201).json(Penalites);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removePenalite(req, res) {
    try {
      const {id} = req.params;
      const count = await penaliteService.removePenalite(id);
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

  async updatePenalite(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Penalites = await penaliteService.updatePenalite(id,changes);
      if(Penalites)
      {
        res.status(201).json(Penalites);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findPenalite(req, res) {
    try {
      const {marche_id} = req.params;
      const Penalites = await penaliteService.findPenalite(marche_id);
      if(Penalites)
      {
        res.status(201).json(Penalites);
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

module.exports = new PenaliteController();