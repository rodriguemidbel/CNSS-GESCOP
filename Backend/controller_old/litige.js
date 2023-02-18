const litigeService = require('../service/litige');

class LitigeController {
  async createLitige(req, res) {
    try {
      const id = await litigeService.createLitige(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllLitige(req, res) {
    try {
      //const {dossier_id} = req.params;
      const Litiges = await litigeService.getAllLitige();
      res.status(201).json(Litiges);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneLitige(req, res) {
    try {
      const {id} = req.params;
      const Litiges = await litigeService.getOneLitige(id);
      if(Litiges)
      {
        res.status(201).json(Litiges);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeLitige(req, res) {
    try {
      const {id} = req.params;
      const count = await litigeService.removeLitige(id);
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

  async updateLitige(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Litiges = await litigeService.updateLitige(id,changes);
      if(Litiges)
      {
        res.status(201).json(Litiges);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findLitige(req, res) {
    try {
      const {dossier_id} = req.params;
      const item = await litigeService.findLitige(dossier_id);
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

  async sumMontantLitige(req, res) {
    try {
      const {dossier_id} = req.params;
      const item = await litigeService.sumMontantLitige(dossier_id);
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

  async countLitige(req, res) {
    try {
      const {num_Litige} = req.params;
      const item = await litigeService.countLitige(num_Litige);
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

module.exports = new LitigeController();