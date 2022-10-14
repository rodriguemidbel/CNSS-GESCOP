const dossierService = require('../service/dossier');


class DossierController {

  async createDossier(req, res) {
    try {
      const id = await dossierService.createDossier(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
   
  };
  async getAllDossier(req, res) {
    try {
      const Dossiers = await dossierService.getAllDossier();
      res.status(201).json(Dossiers);
    } catch (err) {
      console.error(err);
    }
  };

  async getOneDossier(req, res) {
    try {
      const {id} = req.params;
      const Dossiers = await dossierService.getOneDossier(id);
      if(Dossiers)
      {
        res.status(201).json(Dossiers);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  /*----*/
 
  /*---*/
  async removeDossier(req, res) {
    try {
      const {id} = req.params;
      const count = await dossierService.removeDossier(id);
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

  async updateDossier(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Dossiers = await dossierService.updateDossier(id,changes);
      if(Dossiers)
      {
        res.status(201).json(Dossiers);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findDossier(req, res) {
    try {
      const {annee} = req.params;
      const item = await dossierService.findDossier(annee);
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

  async findDossierByType(req, res) {
    try {
      const {annee,type_id} = req.params;
      const item = await dossierService.findDossierByType(annee,type_id);
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


  async countDossier(req, res) {
    try {
      const {annee} = req.params;
      const item = await dossierService.countDossier(annee);
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
  /*---------------------------*/
  

  
}

module.exports = new DossierController();