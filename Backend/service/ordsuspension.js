const ordsuspenDAO = require('../dao/ordsuspension');

class OrdsuspenService {
  createOrdsuspen(OrdsuspenDto) {
    const { marche_id,ref,date_notif,date_suspension,charge_notif,charge_notif_dist,ordre } = OrdsuspenDto;
    return ordsuspenDAO.createOrdsuspen(marche_id,ref,date_notif,date_suspension,charge_notif,charge_notif_dist,ordre);
  };
  getAllOrdsuspen() {
    return ordsuspenDAO.getAllOrdsuspen();
  };
  getOneOrdsuspen(id) {
    return ordsuspenDAO.getOneOrdsuspen(id);
  };
  removeOrdsuspen(id) {
    return ordsuspenDAO.removeOrdsuspen(id);
  };
  updateOrdsuspen(id,changes) {
    return ordsuspenDAO.updateOrdsuspen(id,changes);
  };

  findOrdsuspen(marche_id){
      return ordsuspenDAO.findOrdsuspen(marche_id)
  }

  countOrdsuspen(marche_id){
    return ordsuspenDAO.countOrdsuspen(marche_id)
}

  
}

module.exports = new OrdsuspenService();