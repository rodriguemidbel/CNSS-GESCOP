const reglementService = require('../service/reglement');

class ReglementController {
  async createReglement(req, res) {
    try {
      const id = await reglementService.createReglement(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };


  async getAllReglement(req, res) {
    try {
      const Reglements = await reglementService.getAllReglement();
      res.status(201).json(Reglements);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneReglement(req, res) {
    try {
      const {id} = req.params;
      const Reglements = await reglementService.getOneReglement(id);
      if(Reglements)
      {
        res.status(201).json(Reglements);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeReglement(req, res) {
    try {
      const {id} = req.params;
      const count = await reglementService.removeReglement(id);
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

  async updateReglement(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Reglements = await reglementService.updateReglement(id,changes);
      if(Reglements)
      {
        res.status(201).json(Reglements);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findReglement(req, res) {
    try {
      const {marche_id} = req.params;
      const Reglements = await reglementService.findReglement(marche_id);
      if(Reglements)
      {
        res.status(201).json(Reglements);
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

module.exports = new ReglementController();