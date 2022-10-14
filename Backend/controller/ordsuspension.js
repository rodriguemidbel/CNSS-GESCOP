const ordsuspenService = require('../service/ordsuspension');

class OrdsuspenController {
  async createOrdsuspen(req, res) {
    try {
      const id = await ordsuspenService.createOrdsuspen(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllOrdsuspen(req, res) {
    try {
      //const {dossier_id} = req.params;
      const Ordsuspens = await ordsuspenService.getAllOrdsuspen();
      res.status(201).json(Ordsuspens);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneOrdsuspen(req, res) {
    try {
      const {id} = req.params;
      const Ordsuspens = await ordsuspenService.getOneOrdsuspen(id);
      if(Ordsuspens)
      {
        res.status(201).json(Ordsuspens);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeOrdsuspen(req, res) {
    try {
      const {id} = req.params;
      const count = await ordsuspenService.removeOrdsuspen(id);
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

  async updateOrdsuspen(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Ordsuspens = await ordsuspenService.updateOrdsuspen(id,changes);
      if(Ordsuspens)
      {
        res.status(201).json(Ordsuspens);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findOrdsuspen(req, res) {
    try {
      const {marche_id} = req.params;
      const item = await ordsuspenService.findOrdsuspen(marche_id);
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

  async countOrdsuspen(req, res) {
    try {
      const {marche_id} = req.params;
      const item = await ordsuspenService.countOrdsuspen(marche_id);
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

module.exports = new OrdsuspenController();