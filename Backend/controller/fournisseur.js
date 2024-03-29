const fournisseurService = require('../service/fournisseur');

class FournisseurController {
  async createFournisseur(req, res) {
    try {

      //console.log(req.body);

      const id = await fournisseurService.createFournisseur(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllFournisseur(req, res) {
    try {
      const fournisseurs = await fournisseurService.getAllFournisseur();
      res.status(201).json(fournisseurs);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneFournisseur(req, res) {
    try {
      const {id} = req.params;
      const Fournisseurs = await fournisseurService.getOneFournisseur(id);
      if(Fournisseurs)
      {
        res.status(201).json(Fournisseurs);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeFournisseur(req, res) {
    try {
      const {id} = req.params;
      const count = await fournisseurService.removeFournisseur(id);
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

  async updateFournisseur(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Fournisseurs = await fournisseurService.updateFournisseur(id,changes);
      if(Fournisseurs)
      {
        res.status(201).json(Fournisseurs);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findFrs(req, res) {
    try {
      const {ifu,rccm} = req.params;
      const item = await fournisseurService.findFrs(ifu,rccm);
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

  async findFournisseur(req, res) {
    try {
      const {annee} = req.params;
      const item = await fournisseurService.findFournisseur(annee);
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

  async getAllEntreprise(req, res) {
    try {
      //const {ifu,rccm} = req.params;
      const item = await fournisseurService.getAllEntreprise();
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

  async getAllGroupement(req, res) {
    try {
      //const {ifu,rccm} = req.params;
      const item = await fournisseurService.getAllGroupement();
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

module.exports = new FournisseurController();