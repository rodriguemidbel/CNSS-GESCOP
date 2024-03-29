const offreService = require('../service/offre');

class OffreController {
  async createOffre(req, res) {
    try {

      console.log(req.body);
      
      const id = await offreService.createOffre(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllOffre(req, res) {
    try {
      const {off_dossier_id} = req.params;
      const Offres = await offreService.getAllOffre(off_dossier_id);
      res.status(201).json(Offres);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneOffre(req, res) {
    try {
      const {id} = req.params;
      const Offres = await offreService.getOneOffre(id);
      if(Offres)
      {
        res.status(201).json(Offres);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeOffre(req, res) {
    try {
      const {id} = req.params;
      const count = await offreService.removeOffre(id);
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

  async updateOffre(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Offres = await offreService.updateOffre(id,changes);
      if(Offres)
      {
        res.status(201).json(Offres);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findOffre(req, res) {
    try {
      const {off_dossier_id} = req.params;
      const item = await offreService.findOffre(off_dossier_id);
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

  async getOffreById(req, res) {
    try {
      const {id} = req.params;
      const item = await offreService.getOffreById(id);
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

  async getOffreByLotID(req, res) {
    try {
      const {lot_id} = req.params;
      const item = await offreService.getOffreByLotID(lot_id);
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

  async getAttributaire(req, res) {
    try {
      const {lot_id,fournisseur_id} = req.params;
      const item = await offreService.getAttributaire(lot_id,fournisseur_id);
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

module.exports = new OffreController();