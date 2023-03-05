const proceverbDAO = require('../dao/proceverb');

class proceverbService {
  createProceverb(proceverbDto) {
    const { dossier_id,date_convocation,pv } = proceverbDto;
    return proceverbDAO.createProceverb(dossier_id,date_convocation,pv);
  };
  getAllProceverb() {
    return proceverbDAO.getAllProceverb();
  };
  getOneProceverb(id) {
    return proceverbDAO.getOneProceverb(id);
  };
  removeProceverb(id) {
    return proceverbDAO.removeProceverb(id);
  };
  updateProceverb(id,changes) {
    return proceverbDAO.updateProceverb(id,changes);
  };

  findProceverb(dossier_id){
      return proceverbDAO.findProceverb(dossier_id)
  }
  
}

module.exports = new proceverbService();