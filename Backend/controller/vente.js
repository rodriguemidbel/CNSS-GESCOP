const venteService = require('../service/vente');

class VenteController {
  async createVente(req, res) {
    try {
      const id = await venteService.createVente(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  };
  async getAllVente(req, res) {
    try {
      const Ventes = await venteService.getAllVente();
      res.status(201).json(Ventes);
    } catch (err) {
      console.error(err);
    }
  };
  async getOneVente(req, res) {
    try {
      const {id} = req.params;
      const Ventes = await venteService.getOneVente(id);
      if(Ventes)
      {
        res.status(201).json(Ventes);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  async removeVente(req, res) {
    try {
      const {id} = req.params;
      const count = await venteService.removeVente(id);
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

  async updateVente(req, res) {
    try {
      const {id} = req.params;
      const changes = req.body;

      const Ventes = await venteService.updateVente(id,changes);
      if(Ventes)
      {
        res.status(201).json(Ventes);
      }
      else
      {
        res.status(404).json({message: 'Data not exists'});
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  async findVente(req, res) {
    try {
      const {lot_id} = req.params;
      const item = await venteService.findVente(lot_id);
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

  async findVenteByNum(req, res) {
    try {
      const {num_vente} = req.params;
      const item = await venteService.findVenteByNum(num_vente);
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

module.exports = new VenteController();