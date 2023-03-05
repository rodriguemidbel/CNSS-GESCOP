const seuilmodeService = require('../service/seuilmode');

class SeuilmodeController {
  async createSeuilmode(req, res) {
    try {
      const id = await seuilmodeService.createSeuilmode(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllSeuilmode(req, res) {
    try {
      const {} = req.params;
      const Seuilmodes = await seuilmodeService.getAllSeuilmode();
      res.status(201).json(Seuilmodes);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneSeuilmode(req, res) {
    try {
      const {id} = req.params;
      const Seuilmodes = await seuilmodeService.getOneSeuilmode(id);
      if(Seuilmodes)
      {
        res.status(201).json(Seuilmodes);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeSeuilmode(req, res) {
    try {
      const {id} = req.params;
      const count = await seuilmodeService.removeSeuilmode(id);
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

  async updateSeuilmode(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Seuilmodes = await seuilmodeService.updateSeuilmode(id,changes);
      if(Seuilmodes)
      {
        res.status(201).json(Seuilmodes);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findSeuilmode(req, res) {
    try {
      const {type_id,mode} = req.params;
      const item = await seuilmodeService.findSeuilmode(type_id,mode);
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

  async findModeByType(req, res) {
    try {
      const {type_id} = req.params;
      const item = await seuilmodeService.findModeByType(type_id);
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

module.exports = new SeuilmodeController();