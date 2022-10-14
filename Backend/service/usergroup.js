const usergroupDAO = require('../dao/usergroup');

class UsergroupService {
  createUsergroup(usergroupDto) {
    const {name,description,created_by,modified_by} = usergroupDto;
    return usergroupDAO.createUsergroup(name,description,created_by,modified_by);
  };
  getAllUsergroup() {
    return usergroupDAO.getAllUsergroup();
  };
  getOneUsergroup(id) {
    return usergroupDAO.getOneUsergroup(id);
  };
  removeUsergroup(id) {
    return usergroupDAO.removeUsergroup(id);
  };
  updateUsergroup(id,changes) {
    return usergroupDAO.updateUsergroup(id,changes);
  };
  
}

module.exports = new UsergroupService();