const resiliationService = require('../service/resiliation');

class ResiliationController {
  async createResiliation(req, res) {
    try {
      const id = await resiliationService.createResiliation(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };


  async getAllResiliation(req, res) {
    try {
      const Resiliations = await resiliationService.getAllResiliation();
      res.status(201).json(Resiliations);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneResiliation(req, res) {
    try {
      const {id} = req.params;
      const Resiliations = await resiliationService.getOneResiliation(id);
      if(Resiliations)
      {
        res.status(201).json(Resiliations);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeResiliation(req, res) {
    try {
      const {id} = req.params;
      const count = await resiliationService.removeResiliation(id);
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

  async updateResiliation(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Resiliations = await resiliationService.updateResiliation(id,changes);
      if(Resiliations)
      {
        res.status(201).json(Resiliations);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findResiliation(req, res) {
    try {
      const {marche_id} = req.params;
      const Resiliations = await resiliationService.findResiliation(marche_id);
      if(Resiliations)
      {
        res.status(201).json(Resiliations);
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

module.exports = new ResiliationController();