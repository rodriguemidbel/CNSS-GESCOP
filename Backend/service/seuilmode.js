const seuilmodeDAO = require('../dao/seuilmode');

class seuilmodeService {
  createSeuilmode(SeuilmodeDto) {
    const { type_id,mode,min,max } = SeuilmodeDto;
    return seuilmodeDAO.createSeuilmode(type_id,mode,min,max);
  };
  getAllSeuilmode() {
    return seuilmodeDAO.getAllSeuilmode();
  };
  getOneSeuilmode(id) {
    return seuilmodeDAO.getOneSeuilmode(id);
  };
  removeSeuilmode(id) {
    return seuilmodeDAO.removeSeuilmode(id);
  };
  updateSeuilmode(id,changes) {
    return seuilmodeDAO.updateSeuilmode(id,changes);
  };

  findSeuilmode(type_id,mode){
      return seuilmodeDAO.findSeuilmode(type_id,mode)
  }
  
}

module.exports = new seuilmodeService();