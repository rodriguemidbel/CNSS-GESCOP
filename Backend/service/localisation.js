const localisationDAO = require('../dao/localisation');

class LocalisationService {
  createLocalisation(LocalisationDto) {
    const { dr_no,sigle,libelle } = LocalisationDto;
    return localisationDAO.createLocalisation(dr_no,sigle,libelle);
  };
  getAllLocalisation() {
    return localisationDAO.getAllLocalisation();
  };
  getOneLocalisation(id) {
    return localisationDAO.getOneLocalisation(id);
  };
  removeLocalisation(id) {
    return localisationDAO.removeLocalisation(id);
  };
  updateLocalisation(id,changes) {
    return localisationDAO.updateLocalisation(id,changes);
  };
  
}

module.exports = new LocalisationService();