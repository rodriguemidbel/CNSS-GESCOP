const AnalitemDAO = require('../dao/analitem');

class AnalitemService {
  createAnalitem(AnalitemDto) {
    const { analyse_id,lot_id,soumissionnaire_id,soumissionnaire,off_mnt,off_mnt_min,off_mnt_max,conformite,
      motif,observation,statut } = AnalitemDto;
    return AnalitemDAO.createAnalitem(
      analyse_id,
      lot_id,
      soumissionnaire_id,
      soumissionnaire,
      off_mnt,
      off_mnt_min,
      off_mnt_max,
      conformite,
      motif,
      observation,
      statut
      );
  };
  getAllAnalitem(analyse_id) {
    return AnalitemDAO.getAllAnalitem(analyse_id);
  };
  getOneAnalitem(id) {
    return AnalitemDAO.getOneAnalitem(id);
  };
  removeAnalitem(id) {
    return AnalitemDAO.removeAnalitem(id);
  };
  updateAnalitem(id,changes) {
    return AnalitemDAO.updateAnalitem(id,changes);
  };

}

module.exports = new AnalitemService();