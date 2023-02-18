const ordrepriseService = require('../service/ordreprise');

class OrdrepriseController {
  async createOrdreprise(req, res) {
    try {
      const id = await ordrepriseService.createOrdreprise(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllOrdreprise(req, res) {
    try {
      //const {dossier_id} = req.params;
      const Ordreprises = await ordrepriseService.getAllOrdreprise();
      res.status(201).json(Ordreprises);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneOrdreprise(req, res) {
    try {
      const {id} = req.params;
      const Ordreprises = await ordrepriseService.getOneOrdreprise(id);
      if(Ordreprises)
      {
        res.status(201).json(Ordreprises);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeOrdreprise(req, res) {
    try {
      const {id} = req.params;
      const count = await ordrepriseService.removeOrdreprise(id);
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

  async updateOrdreprise(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Ordreprises = await ordrepriseService.updateOrdreprise(id,changes);
      if(Ordreprises)
      {
        res.status(201).json(Ordreprises);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findOrdreprise(req, res) {
    try {
      const {marche_id} = req.params;
      const item = await ordrepriseService.findOrdreprise(marche_id);
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

  async countOrdreprise(req, res) {
    try {
      const {annee} = req.params;
      const item = await ordrepriseService.countOrdreprise(annee);
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

module.exports = new OrdrepriseController();