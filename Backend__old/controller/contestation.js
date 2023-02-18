const contestationService = require('../service/contestion');

class ContestationController {
  async createContestation(req, res) {
    try {
      const id = await contestationService.createContestation(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllContestation(req, res) {
    try {
      const {dossier_id} = req.params;
      const Contestations = await contestationService.getAllContestation(dossier_id);
      res.status(201).json(Contestations);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneContestation(req, res) {
    try {
      const {id} = req.params;
      const Contestations = await contestationService.getOneContestation(id);
      if(Contestations)
      {
        res.status(201).json(Contestations);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeContestation(req, res) {
    try {
      const {id} = req.params;
      const count = await contestationService.removeContestation(id);
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

  async updateContestation(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Contestations = await contestationService.updateContestation(id,changes);
      if(Contestations)
      {
        res.status(201).json(Contestations);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findContestation(req, res) {
    try {
      const {dossier_id} = req.params;
      const item = await contestationService.findContestation(dossier_id);
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

module.exports = new ContestationController();