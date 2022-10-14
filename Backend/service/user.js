const userDAO = require('../dao/user');

class UserService {
  createUser(userDto) {
    const { usergroup_id, matricule,name, username,password,fonction,localisation_id,service,telephone,email,adresse,statut,created_by,modified_by } = userDto;
    return userDAO.createUser(usergroup_id, matricule,name, username,password,fonction,localisation_id,service,telephone,email,adresse,statut,created_by,modified_by);
  };
  getAllUser() {
    return userDAO.getAllUser();
  };
  getOneUser(id) {
    return userDAO.getOneUser(id);
  };
  removeUser(id) {
    return userDAO.removeUser(id);
  };
  updateUser(id,changes) {
    return userDAO.updateUser(id,changes);
  };

  passwordInit(username,changes) {
    return userDAO.updateUser(username,changes);
  };

  findUser(username) {
    return userDAO.findUser(username);
  };
  login(username,password) {
    return userDAO.login(username,password);
  };
}

module.exports = new UserService();