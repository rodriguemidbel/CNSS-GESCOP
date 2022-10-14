const modeDAO = require('../dao/mode');

class ModeService {
  createMode(ModeDto) {
    const { libelle,description } = ModeDto;
    return modeDAO.createMode(libelle,description);
  };
  getAllMode() {
    return modeDAO.getAllMode();
  };
  getOneMode(id) {
    return modeDAO.getOneMode(id);
  };
  removeMode(id) {
    return modeDAO.removeMode(id);
  };
  updateMode(id,changes) {
    return modeDAO.updateMode(id,changes);
  };
  
}

module.exports = new ModeService();