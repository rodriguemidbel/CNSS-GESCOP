const AnalitemService = require('../service/analitem');

class AnalitemController {
  async createAnalitem(req, res) {
    try {
      const id = await AnalitemService.createAnalitem(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllAnalitem(req, res) {
    try {
      const {analyse_id} = req.params;
      const Analitems = await AnalitemService.getAllAnalitem(analyse_id);
      res.status(201).json(Analitems);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneAnalitem(req, res) {
    try {
      const {id} = req.params;
      const Analitems = await AnalitemService.getOneAnalitem(id);
      if(Analitems)
      {
        res.status(201).json(Analitems);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeAnalitem(req, res) {
    try {
      const {id} = req.params;
      const count = await AnalitemService.removeAnalitem(id);
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

  async updateAnalitem(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Analitems = await AnalitemService.updateAnalitem(id,changes);
      if(Analitems)
      {
        res.status(201).json(Analitems);
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

module.exports = new AnalitemController();