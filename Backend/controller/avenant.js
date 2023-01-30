const avenantService = require('../service/avenant');

class AvenantController {
  async createAvenant(req, res) {
    try {
      const id = await avenantService.createAvenant(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };


  async getAllAvenant(req, res) {
    try {
      const Avenants = await avenantService.getAllAvenant();
      res.status(201).json(Avenants);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneAvenant(req, res) {
    try {
      const {id} = req.params;
      const Avenants = await avenantService.getOneAvenant(id);
      if(Avenants)
      {
        res.status(201).json(Avenants);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeAvenant(req, res) {
    try {
      const {id} = req.params;
      const count = await avenantService.removeAvenant(id);
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

  async updateAvenant(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Avenants = await avenantService.updateAvenant(id,changes);
      if(Avenants)
      {
        res.status(201).json(Avenants);
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

module.exports = new AvenantController();