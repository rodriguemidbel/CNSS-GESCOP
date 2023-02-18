const DelibfrsDAO = require('../dao/delibfrs');

class DelibFrsService {
  createDelibFrs(DelibFrsDto) {
    const { delib_id,fournisseur_id,statut } = DelibFrsDto;
    return DelibfrsDAO.createDelibFrs( delib_id,fournisseur_id,statut);
  };
  getAllDelibFrs(delib_id) {
    return DelibfrsDAO.getAllDelibFrs(delib_id);
  };
  getOneDelibFrs(id) {
    return DelibfrsDAO.getOneDelibFrs(id);
  };
  removeDelibFrs(id) {
    return DelibfrsDAO.removeDelibFrs(id);
  };
  updateDelibFrs(id,changes) {
    return DelibfrsDAO.updateDelibFrs(id,changes);
  };

}

module.exports = new DelibFrsService();