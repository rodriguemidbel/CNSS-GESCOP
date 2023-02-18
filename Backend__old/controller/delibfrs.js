const delibFrsService = require('../service/delibfrs');

class DelibFrsController {
  async createDelibFrs(req, res) {
    try {
      const id = await delibFrsService.createDelibFrs(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllDelibFrs(req, res) {
    try {

      const {delib_id} = req.params;
      const DelibFrs = await delibFrsService.getAllDelibFrs(delib_id);
      res.status(201).json(DelibFrs);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneDelibFrs(req, res) {
    try {
      const {id} = req.params;
      const DelibFrs = await delibFrsService.getOneDelibFrs(id);
      if(DelibFrs)
      {
        res.status(201).json(DelibFrs);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeDelibFrs(req, res) {
    try {
      const {id} = req.params;
      const count = await delibFrsService.removeDelibFrs(id);
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

  async updateDelibFrs(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const DelibFrs = await delibFrsService.updateDelibFrs(id,changes);
      if(DelibFrs)
      {
        res.status(201).json(DelibFrs);
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

module.exports = new DelibFrsController();