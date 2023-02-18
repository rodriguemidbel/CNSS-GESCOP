const demandeService = require('../service/demande');

class DemandeController {
  async createDemande(req, res) {
    try {
      const id = await demandeService.createDemande(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllDemande(req, res) {
    try {
      //const {dossier_id} = req.params;
      const Demandes = await demandeService.getAllDemande();
      res.status(201).json(Demandes);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneDemande(req, res) {
    try {
      const {id} = req.params;
      const Demandes = await demandeService.getOneDemande(id);
      if(Demandes)
      {
        res.status(201).json(Demandes);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeDemande(req, res) {
    try {
      const {id} = req.params;
      const count = await demandeService.removeDemande(id);
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

  async updateDemande(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Demandes = await demandeService.updateDemande(id,changes);
      if(Demandes)
      {
        res.status(201).json(Demandes);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findDemande(req, res) {
    try {
      const {marche_id} = req.params;
      const item = await demandeService.findDemande(marche_id);
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

  async countDemande(req, res) {
    try {
      const {marche_id} = req.params;
      const item = await demandeService.countDemande(marche_id);
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

module.exports = new DemandeController();