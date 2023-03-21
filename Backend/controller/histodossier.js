const HistodossService = require('../service/histodossier');

class HistodossController {
  async createHistodoss(req, res) {
    try {
      const id = await HistodossService.createHistodoss(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllHistodoss(req, res) {
    try {
      const histo = await HistodossService.getAllHistodoss();
      res.status(201).json(histo);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneHistodoss(req, res) {
    try {
      const {id} = req.params;
      const histo = await HistodossService.getOneHistodoss(id);
      if(histo)
      {
        res.status(201).json(histo);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeHistodoss(req, res) {
    try {
      const {id} = req.params;
      const count = await HistodossService.removeHistodoss(id);
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

  async updateHistodoss(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const histo = await HistodossService.updateHistodoss(id,changes);
      if(histo)
      {
        res.status(201).json(histo);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  
  async findHistodoss(req, res) {
    try {
      const {numero_doss} = req.params;
      const item = await HistodossService.findHistodoss(numero_doss);
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

module.exports = new HistodossController();