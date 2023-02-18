const signaService = require('../service/signataire');

class SignataireController {
  async createSignataire(req, res) {
    try {
      const id = await signaService.createSignataire(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllSignataire(req, res) {
    try {
      const {dossier_id} = req.params;
      const Signataires = await signaService.getAllSignataire(dossier_id);
      res.status(201).json(Signataires);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneSignataire(req, res) {
    try {
      const {id} = req.params;
      const Signataires = await signaService.getOneSignataire(id);
      if(Signataires)
      {
        res.status(201).json(Signataires);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeSignataire(req, res) {
    try {
      const {id} = req.params;
      const count = await signaService.removeSignataire(id);
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

  async updateSignataire(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Signataires = await signaService.updateSignataire(id,changes);
      if(Signataires)
      {
        res.status(201).json(Signataires);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findSignataire(req, res) {
    try {
      const {localisation_id} = req.params;
      const item = await signaService.findSignataire(localisation_id);
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

module.exports = new SignataireController();