const paiementService = require('../service/paiement');

class PaiementController {
  async createPaiement(req, res) {
    try {
      const id = await paiementService.createPaiement(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllPaiement(req, res) {
    try {
      const {dossier_id} = req.params;
      const Paiements = await paiementService.getAllPaiement(dossier_id);
      res.status(201).json(Paiements);
    } catch (err) {
      console.error(err);
    }
  };
  async getOnePaiement(req, res) {
    try {
      const {id} = req.params;
      const Paiements = await paiementService.getOnePaiement(id);
      if(Paiements)
      {
        res.status(201).json(Paiements);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removePaiement(req, res) {
    try {
      const {id} = req.params;
      const count = await paiementService.removePaiement(id);
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

  async updatePaiement(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Paiements = await paiementService.updatePaiement(id,changes);
      if(Paiements)
      {
        res.status(201).json(Paiements);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findPaiement(req, res) {
    try {
      const {dossier_id} = req.params;
      const item = await paiementService.findPaiement(dossier_id);
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

module.exports = new PaiementController();