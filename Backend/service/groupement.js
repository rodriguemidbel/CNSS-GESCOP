const groupementDAO = require('../dao/groupement');

class GroupementService {
    createGroupement(GroupementDto) {
    const { libelle } = GroupementDto;
    return groupementDAO.createGroupement(libelle);
  };

  getAllGroupement() {
    return groupementDAO.getAllGroupement();
  };
  getOneGroupement(id) {
    return groupementDAO.getOneGroupement(id);
  };
  removeGroupement(id) {
    return groupementDAO.removeGroupement(id);
  };
  updateGroupement(id,changes) {
    return groupementDAO.updateGroupement(id,changes);
  };
  
}

module.exports = new GroupementService();