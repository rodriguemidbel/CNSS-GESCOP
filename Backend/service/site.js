const siteDAO = require('../dao/site');

class siteService {
  createSite(SiteDto) {
    const { marche_id,date_rem_site,fichier } = SiteDto;
    return siteDAO.createSite(marche_id,date_rem_site,fichier);
  };
  getAllSite() {
    return siteDAO.getAllSite();
  };
  getOneSite(id) {
    return siteDAO.getOneSite(id);
  };
  removeSite(id) {
    return siteDAO.removeSite(id);
  };
  updateSite(id,changes) {
    return siteDAO.updateSite(id,changes);
  };

  findsite(marche_id){
      return siteDAO.findsite(marche_id)
  }
  
}

module.exports = new siteService();