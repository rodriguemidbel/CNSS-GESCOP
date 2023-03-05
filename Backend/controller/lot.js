const lotService = require('../service/lot');

class LotController {
  async createLot(req, res) {
    try {
      //console.log(req.body);
      const id = await lotService.createLot(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllLot(req, res) {
    try {
      //const {dossier_id} = req.params;
      const Lots = await lotService.getAllLot();
      res.status(201).json(Lots);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneLot(req, res) {
    try {
      const {id} = req.params;
      const Lots = await lotService.getOneLot(id);
      if(Lots)
      {
        res.status(201).json(Lots);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeLot(req, res) {
    try {
      const {id} = req.params;
      const count = await lotService.removeLot(id);
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

  async updateLot(req, res) {
    try {
      //console.log(req.body);
      
      const {id} = req.params;
      const changes = req.body;

      const Lots = await lotService.updateLot(id,changes);
      if(Lots)
      {
        res.status(201).json(Lots);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findLot(req, res) {
    try {
      const {dossier_id} = req.params;
      const item = await lotService.findLot(dossier_id);
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

  async sumMontantLot(req, res) {
    try {
      const {dossier_id} = req.params;
      const item = await lotService.sumMontantLot(dossier_id);
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

  async countLot(req, res) {
    try {
      const {num_lot} = req.params;
      const item = await lotService.countLot(num_lot);
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

module.exports = new LotController();