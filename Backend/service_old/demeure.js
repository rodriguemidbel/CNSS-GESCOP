const demeureDAO = require('../dao/demeure');

class DemeureService {
  createDemeure(DemeureDto) {
    const { marche_id,date_demeure,ref_correspande,delai } = DemeureDto;
    return demeureDAO.createDemeure(marche_id,date_demeure,ref_correspande,delai);
  };

  getAllDemeure() {
    return demeureDAO.getAllDemeure();
  };
  getOneDemeure(id) {
    return demeureDAO.getOneDemeure(id);
  };
  removeDemeure(id) {
    return demeureDAO.removeDemeure(id);
  };
  updateDemeure(id,changes) {
    return demeureDAO.updateDemeure(id,changes);
  };
  
}

module.exports = new DemeureService();