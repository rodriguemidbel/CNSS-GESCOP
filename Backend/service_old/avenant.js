const avenantDAO = require('../dao/avanant');

class AvenantService {
  createAvenant(AvenantDto) {
    const { marche_id,objet,montant,delai } = AvenantDto;
    return avenantDAO.createAvenant(marche_id,objet,montant,delai);
  };

 
  getAllAvenant() {
    return avenantDAO.getAllAvenant();
  };
  getOneAvenant(id) {
    return avenantDAO.getOneAvenant(id);
  };
  removeAvenant(id) {
    return avenantDAO.removeAvenant(id);
  };
  updateAvenant(id,changes) {
    return avenantDAO.updateAvenant(id,changes);
  };
  
}

module.exports = new AvenantService();