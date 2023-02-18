const express = require('express');

const jwt = require('jsonwebtoken');
require('dotenv').config();

//const nodemailer = require('nodemailer');


const usergroupController = require('../controller/usergroup');
const userController = require('../controller/user');
const modeController = require('../controller/mode');
const modepaiementController = require('../controller/modepaiement');
const fournisseurController = require('../controller/fournisseur');
const budgetController = require('../controller/budget');
const typeController = require('../controller/type');
const localisationController = require('../controller/localisation');
const planController = require('../controller/plan');
const histoplanController = require('../controller/histoplan');
const planitemController = require('../controller/planitem');
const dossierController = require('../controller/dossier');
const lotController = require('../controller/lot');
const venteController = require('../controller/vente');
const caisseController = require('../controller/caisse');
const paiementController = require('../controller/paiement');
const aviController = require('../controller/avi');
const caminvController = require('../controller/caminv');
const scaminvController = require('../controller/scaminv');
const offreController = require('../controller/offre');

const proceverbController = require('../controller/proceverb');
const analyseController = require('../controller/analyse');
const deliberationController = require('../controller/deliberation');
const resultatController = require('../controller/resultat');

const cautionController = require('../controller/caution');
const notificationController = require('../controller/notification');
const marcheController = require('../controller/marche');
const contestationController = require('../controller/contestation');

const courrierController = require('../controller/courrier');


const ordreservController = require('../controller/ordreserv');
const ordsuspensionController = require('../controller/ordsuspension');
const ordrepriseController = require('../controller/ordreprise');

const pubavisController = require('../controller/pubavis');
const pubresultatController = require('../controller/pubresultat');
const ventefrsController = require('../controller/ventefrs');
const offrefrsController = require('../controller/offrefrs');

const siteController = require('../controller/site');
const demandeController = require('../controller/demande');
const receptionController = require('../controller/reception');
const typreceptionController = require('../controller/typreception');

const fonctionaliteController = require('../controller/fonctionalite');
const privilegeController = require('../controller/privilege');
const logController = require('../controller/log');

const litigeController = require('../controller/litige');

const signataireController = require('../controller/signataire');
const seuilmodeController = require('../controller/seuilmode');

const delibfrsController = require('../controller/delibfrs');

const decisionController = require('../controller/decision');

const avenantController = require('../controller/avenant');
const demeureController = require('../controller/demeure');
const resiliationController = require('../controller/resiliation');


const router = express.Router();

/*=========================================*/
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(401);
      }
      req.user = user;
      next();
    });
  }
  /*=========================================*/

/*-------------------------USERGROUP---------------------------------*/
router.post('/createUsergroup',usergroupController.createUsergroup);
router.get('/getAllUsergroup', usergroupController.getAllUsergroup);
router.get('/getOneUsergroup/:id', usergroupController.getOneUsergroup);
router.delete('/removeUsergroup/:id', usergroupController.removeUsergroup);
router.patch('/updateUsergroup/:id', usergroupController.updateUsergroup);
/*-------------------------USER---------------------------------*/
router.post('/createUser', userController.createUser);
router.get('/getAllUser', userController.getAllUser);
router.get('/getOneUser/:id', userController.getOneUser);
router.delete('/removeUser/:id', userController.removeUser);
router.patch('/updateUser/:id', userController.updateUser);
router.get('/findUser/:username', userController.findUser);
router.post('/login', userController.login); // findUserByFonction
router.get('/findUserByFonction', userController.findUserByFonction);
/*-------------------------FONCTIONALITE---------------------------------*/
router.post('/createFonctionalite', fonctionaliteController.createFonctionalite);
router.get('/getAllFonctionalite', fonctionaliteController.getAllFonctionalite);
router.get('/getOneFonctionalite/:id', fonctionaliteController.getOneFonctionalite);
router.delete('/removeFonctionalite/:id', fonctionaliteController.removeFonctionalite);
router.patch('/updateFonctionalite/:id', fonctionaliteController.updateFonctionalite);
/*-------------------------PRIVILEGE---------------------------------*/
router.post('/createPrivilege', privilegeController.createPrivilege);
router.get('/getAllPrivilege', privilegeController.getAllPrivilege);

router.get('/recherche/:usergroup_id/:fonctionalite_id', privilegeController.recherche);

router.get('/getOnePrivilege/:id', privilegeController.getOnePrivilege);
router.delete('/removePrivilege/:id', privilegeController.removePrivilege);
router.patch('/updatePrivilege/:id', privilegeController.updatePrivilege);
/*-------------------------PRIVILEGE---------------------------------*/
router.post('/createLog', logController.createLog);
router.get('/getAllLog', logController.getAllLog);

router.get('/findLog', logController.findLog);


router.get('/getOneLog/:id', logController.getOneLog);
router.delete('/removeLog/:id', logController.removeLog);
router.patch('/updateLog/:id', logController.updateLog);

/*-------------------------MODE---------------------------------*/
router.post('/createMode', modeController.createMode);
router.get('/getAllMode', modeController.getAllMode);
router.get('/getOneMode/:id', modeController.getOneMode);
router.delete('/removeMode/:id', modeController.removeMode);
router.patch('/updateMode/:id', modeController.updateMode);

/*-------------------------MODE PAIEMENT-------------------------*/
router.post('/createModepaie', modepaiementController.createModepaie);
router.get('/getAllModepaie', modepaiementController.getAllModepaie);
router.get('/getOneModepaie/:id', modepaiementController.getOneModepaie);
router.delete('/removeModepaie/:id', modepaiementController.removeModepaie);
router.patch('/updateModepaie/:id', modepaiementController.updateModepaie);

/*-------------------------FOURNISSEUR-------------------------*/
router.post('/createFournisseur',authenticateToken, fournisseurController.createFournisseur);
router.get('/getAllFournisseur',authenticateToken,fournisseurController.getAllFournisseur);
router.get('/getOneFournisseur/:id',authenticateToken, fournisseurController.getOneFournisseur);
router.delete('/removeFournisseur/:id',authenticateToken, fournisseurController.removeFournisseur);
router.patch('/updateFournisseur/:id',authenticateToken, fournisseurController.updateFournisseur);

router.get('/findFrs/:ifu/:rccm',authenticateToken, fournisseurController.findFrs);

router.get('/getAllEntreprise',authenticateToken, fournisseurController.getAllEntreprise);
router.get('/getAllGroupement',authenticateToken, fournisseurController.getAllGroupement);
/*-------------------------BUDGET---------------------------------*/
router.post('/createBudget', budgetController.createBudget);
router.post('/createMultipleBudget', budgetController.createMultipleBudget);
router.get('/getAllBudget', budgetController.getAllBudget);
router.get('/getOneBudget/:id', budgetController.getOneBudget);
router.delete('/removeBudget/:id', budgetController.removeBudget);
router.patch('/updateBudget/:id', budgetController.updateBudget);

/*-------------------------TYPE---------------------------------*/
router.post('/createType', typeController.createType);
router.get('/getAllType', typeController.getAllType);
router.get('/getOneType/:id', typeController.getOneType);
router.delete('/removeType/:id', typeController.removeType);
router.patch('/updateType/:id', typeController.updateType);

/*-------------------------LOCALISATION---------------------------------*/
router.post('/createLocalisation', localisationController.createLocalisation);
router.get('/getAllLocalisation', localisationController.getAllLocalisation);
router.get('/getOneLocalisation/:id', localisationController.getOneLocalisation);
router.delete('/removeLocalisation/:id', localisationController.removeLocalisation);
router.patch('/updateLocalisation/:id', localisationController.updateLocalisation);
/*-------------------------PLAN---------------------------------*/
router.post('/createPlan', planController.createPlan);
router.get('/getAllPlan', planController.getAllPlan);
router.get('/getOnePlan/:id', planController.getOnePlan);
router.delete('/removePlan/:id', planController.removePlan);
router.patch('/updatePlan/:id', planController.updatePlan);
router.get('/findPlan/:annee', planController.findPlan);  


/*-------------------------Histo PLAN---------------------------------*/
router.post('/createHistoplan', histoplanController.createHistoplan);
router.get('/getAllHistoPlan', histoplanController.getAllHistoPlan);
router.get('/getOneHistoPlan/:id', histoplanController.getOneHistoPlan);
router.delete('/removeHistoPlan/:id', histoplanController.removeHistoPlan);
router.patch('/updateHistoPlan/:id', histoplanController.updateHistoPlan);
router.get('/findHistoPlan/:annee', histoplanController.findHistoPlan);

/*-------------------------PLANITEM---------------------------------*/
router.post('/createPlanitem', planitemController.createPlanitem);
router.get('/getAllPlanitem', planitemController.getAllPlanitem);
router.get('/getOnePlanitem/:id', planitemController.getOnePlanitem);
router.delete('/removePlanitem/:id', planitemController.removePlanitem);
router.patch('/updatePlanitem/:id', planitemController.updatePlanitem);
router.get('/findPlanitem/:annee', planitemController.findPlanitem);
router.get('/findLigneByPlanID/:plan_id', planitemController.findLigneByPlanID);  
router.get('/findPlanitemByLoc/:plan_id/:localisation_id', planitemController.findPlanitemByLoc);

router.get('/countPlanitem/:plan_id/:localisation_id/:type_id', planitemController.countPlanitem);
/*-------------------------DOSSIER---------------------------------*/

router.post('/createDossier', dossierController.createDossier);
router.get('/getAllDossier', dossierController.getAllDossier);
router.get('/getOneDossier/:id', dossierController.getOneDossier);
router.delete('/removeDossier/:id', dossierController.removeDossier);
router.patch('/updateDossier/:id', dossierController.updateDossier);

router.get('/findDossier/:annee', dossierController.findDossier);
router.get('/findDossierByType/:annee/:type_id', dossierController.findDossierByType);

router.get('/findDossierByLoca/:annee/:localisation_id', dossierController.findDossierByLoca);
router.get('/findDossierByLocaAndType/:annee/:type_id/:localisation_id', dossierController.findDossierByLocaAndType);

router.get('/countDossier/:annee', dossierController.countDossier);

/*-------------------------LOT---------------------------------*/
router.post('/createLot', lotController.createLot);
router.get('/getAllLot', lotController.getAllLot);
router.get('/getOneLot/:id', lotController.getOneLot);
router.delete('/removeLot/:id', lotController.removeLot);
router.patch('/updateLot/:id', lotController.updateLot);
router.get('/findLot/:dossier_id', lotController.findLot);
router.get('/sumMontantLot/:dossier_id', lotController.sumMontantLot);
router.get('/countLot/:num_lot', lotController.countLot);
/*-------------------------VENTE---------------------------------*/
router.post('/createVente', venteController.createVente);
router.get('/getAllVente', venteController.getAllVente);
router.get('/getOneVente/:id', venteController.getOneVente);
router.delete('/removeVente/:id', venteController.removeVente);
router.patch('/updateVente/:id', venteController.updateVente);
router.get('/findVente/:lot_id', venteController.findVente);
router.get('/findVenteByNum/:num_vente', venteController.findVenteByNum);

router.get('/findVenteByDossID/:vent_dossier_id', venteController.findVenteByDossID);
router.get('/findVenteByStatut/:vent_statut',venteController.findVenteByStatut);

router.get('/sumMontantAllVente',venteController.sumMontantAllVente);
router.get('/sumMontantVenteByStatut/:vent_statut',venteController.sumMontantVenteByStatut);

router.get('/findVenteID/:lot_id/:fournisseur_id', venteController.findVenteID);

router.get('/countSellLot/:vent_dossier_id',venteController.countSellLot);
/*-------------------------CAISSE---------------------------------*/
router.post('/createCaisse', caisseController.createCaisse);
router.get('/getAllCaisse', caisseController.getAllCaisse);
router.get('/getOneCaisse/:id', caisseController.getOneCaisse);
router.delete('/removeCaisse/:id', caisseController.removeCaisse);
router.patch('/updateCaisse/:id', caisseController.updateCaisse);
router.get('/findCaisse/:vente_id', caisseController.findCaisse);

/*-------------------------PAIEMENT---------------------------------*/
router.post('/createPaiement', paiementController.createPaiement);
router.get('/getAllPaiement/:dossier_id', paiementController.getAllPaiement);
router.get('/getOnePaiement/:id', paiementController.getOnePaiement);
router.delete('/removePaiement/:id', paiementController.removePaiement);
router.patch('/updatePaiement/:id', paiementController.updatePaiement);
router.get('/findPaiement/:dossier_id', paiementController.findPaiement);

/*-------------------------AVIS---------------------------------*/
router.post('/createAvi',aviController.createAvi);
router.get('/getAllAvi/:dossier_id', aviController.getAllAvi);
router.get('/getOneAvi/:id', aviController.getOneAvi);
router.delete('/removeAvi/:id', aviController.removeAvi);
router.patch('/updateAvi/:id', aviController.updateAvi);
router.get('/findAvi/:dossier_id', aviController.findAvi);
/*-------------------------CAMINV---------------------------------*/
router.post('/createCaminv', caminvController.createCaminv);
router.get('/getAllCaminv/:dossier_id', caminvController.getAllCaminv);
router.get('/getOneCaminv/:id', caminvController.getOneCaminv);
router.delete('/removeCaminv/:id', caminvController.removeCaminv);
router.patch('/updateCaminv/:id', caminvController.updateCaminv);
router.get('/findCaminv/:dossier_id', caminvController.findCaminv);
/*-------------------------SCAMINV---------------------------------*/
router.post('/createScaminv', scaminvController.createScaminv);
router.get('/getAllScaminv/:dossier_id', scaminvController.getAllScaminv);
router.get('/getOneScaminv/:id', scaminvController.getOneScaminv);
router.delete('/removeScaminv/:id', scaminvController.removeScaminv);
router.patch('/updateScaminv/:id', scaminvController.updateScaminv);
router.get('/findScaminv/:dossier_id', scaminvController.findScaminv);
/*-------------------------OFFRE---------------------------------*/
router.post('/createOffre',offreController.createOffre);
router.get('/getAllOffre/:off_dossier_id', offreController.getAllOffre);
router.get('/getOneOffre/:id', offreController.getOneOffre);
router.delete('/removeOffre/:id', offreController.removeOffre);
router.patch('/updateOffre/:id', offreController.updateOffre);
router.get('/findOffre/:off_dossier_id', offreController.findOffre);
router.get('/getOffreById/:id', offreController.getOffreById);
/*-------------------------Ouverture---------------------------------*/
router.post('/createProceverb',proceverbController.createProceverb);
router.get('/getAllProceverb/:dossier_id', proceverbController.getAllProceverb);
router.get('/getOneProceverb/:id', proceverbController.getOneProceverb);
router.delete('/removeProceverb/:id', proceverbController.removeProceverb);
router.patch('/updateProceverb/:id', proceverbController.updateProceverb);
router.get('/findProceverb/:dossier_id', proceverbController.findProceverb);

/*-------------------------Analyse---------------------------------*/
router.post('/createAnalyse',analyseController.createAnalyse);
router.get('/getAllAnalyse/:dossier_id', analyseController.getAllAnalyse);
router.get('/getOneAnalyse/:id', analyseController.getOneAnalyse);
router.delete('/removeAnalyse/:id', analyseController.removeAnalyse);
router.patch('/updateAnalyse/:id', analyseController.updateAnalyse);
router.get('/findAnalyse/:dossier_id', analyseController.findAnalyse);
router.get('/findAnalyseByLot/:lot_id', analyseController.findAnalyseByLot);

/*-------------------------Deliberation---------------------------------*/
router.post('/createDeliberation',deliberationController.createDeliberation);
router.get('/getAllDeliberation/:dossier_id', deliberationController.getAllDeliberation);
router.get('/getOneDeliberation/:id', deliberationController.getOneDeliberation);
router.delete('/removeDeliberation/:id', deliberationController.removeDeliberation);
router.patch('/updateDeliberation/:id', deliberationController.updateDeliberation);
router.get('/findDeliberation/:dossier_id', deliberationController.findDeliberation);

router.get('/findDelibByLotID/:lot_id', deliberationController.findDelibByLotID);

/*-------------------------RESULTAT---------------------------------*/
router.post('/createResultat',resultatController.createResultat);
router.get('/getAllResultat/:dossier_id', resultatController.getAllResultat);
router.get('/getOneResultat/:id', resultatController.getOneResultat);
router.delete('/removeResultat/:id', resultatController.removeResultat);
router.patch('/updateResultat/:id', resultatController.updateResultat);
router.get('/findResultat/:dossier_id', resultatController.findResultat);

/*-------------------------RESULTAT---------------------------------*/
router.post('/createLitige',litigeController.createLitige);
router.get('/getAllLitige/:dossier_id', litigeController.getAllLitige);
router.get('/getOneLitige/:id', litigeController.getOneLitige);
router.delete('/removeLitige/:id', litigeController.removeLitige);
router.patch('/updateLitige/:id', litigeController.updateLitige);
router.get('/findLitige/:dossier_id', litigeController.findLitige);
/*-------------------------CONTESTATION---------------------------------*/
router.post('/createContestation',contestationController.createContestation);
router.get('/getAllContestation/:dossier_id', contestationController.getAllContestation);
router.get('/getOneContestation/:id', contestationController.getOneContestation);
router.delete('/removeContestation/:id', contestationController.removeContestation);
router.patch('/updateContestation/:id', contestationController.updateContestation);
router.get('/findContestation/:dossier_id', contestationController.findContestation);

//notificationController
/*-------------------------NOTIFICATION----------------------------------*/
router.post('/createNotification',notificationController.createNotification);
router.get('/getAllNotification/:not_dossier_id', notificationController.getAllNotification);
router.get('/getOneNotification/:id', notificationController.getOneNotification);
router.delete('/removeNotification/:id', notificationController.removeNotification);
router.patch('/updateNotification/:id', notificationController.updateNotification);
router.get('/findNotification/:not_dossier_id', notificationController.findNotification);
router.get('/countNotification/:annee', notificationController.countNotification);

/*-------------------------MARCHES----------------------------------*/
router.post('/createMarche',marcheController.createMarche);
router.get('/getAllMarche', marcheController.getAllMarche);
router.get('/getOneMarche/:id', marcheController.getOneMarche);
router.delete('/removeMarche/:id', marcheController.removeMarche);
router.patch('/updateMarche/:id', marcheController.updateMarche);
router.get('/findMarche/:dossier_id', marcheController.findMarche);

router.get('/countMarche/:annee', marcheController.countMarche);  
router.get('/getMarche/:dossier_id', marcheController.getMarche);
/*-------------------------CAUTIONS---------------------------------*/
router.post('/createCaution',cautionController.createCaution);
router.get('/getAllCaution', cautionController.getAllCaution);
router.get('/getOneCaution/:id', cautionController.getOneCaution);
router.delete('/removeCaution/:id', cautionController.removeCaution);
router.patch('/updateCaution/:id', cautionController.updateCaution);
router.get('/findcautions/:dossier_id', cautionController.findcautions);

/*-------------------------PUB AVIS BORDEREAU----------------------------*/
router.post('/createPubavis',pubavisController.createPubavis);
router.get('/getAllPubavis/:dossier_id', pubavisController.getAllPubavis);
router.get('/getOnePubavis/:id', pubavisController.getOnePubavis);
router.delete('/removePubavis/:id', pubavisController.removePubavis);
router.patch('/updatePubavis/:id', pubavisController.updatePubavis);
router.get('/findPubavis/:dossier_id', pubavisController.findPubavis);
//counPubavis
router.get('/counPubavis/:annee', pubavisController.counPubavis);
/*-------------------------PUB RESULTAT BORDEREAU----------------------------*/
router.post('/createPubresultat',pubresultatController.createPubresultat);
router.get('/getAllPubresultat/:dossier_id', pubresultatController.getAllPubresultat);
router.get('/getOnePubresultat/:id', pubresultatController.getOnePubresultat);
router.delete('/removePubresultat/:id', pubresultatController.removePubresultat);
router.patch('/updatePubresultat/:id', pubresultatController.updatePubresultat);
router.get('/findPubresultat/:dossier_id', pubresultatController.findPubresultat);

/*-------------------------COURRIERS---------------------------------*/

router.post('/createCourrier',courrierController.createCourrier);
router.get('/getAllCourrier/:dossier_id', courrierController.getAllCourrier);
router.get('/getOneCourrier/:id', courrierController.getOneCourrier);
router.delete('/removeCourrier/:id', courrierController.removeCourrier);
router.patch('/updateCourrier/:id', courrierController.updateCourrier);
router.get('/findCourrier/:dossier_id', courrierController.findCourrier);

/*-------------------------VENTE FRS----------------------------*/
router.post('/createVentefrs',ventefrsController.createVentefrs);
router.get('/getAllVentefrs/:vente_id', ventefrsController.getAllVentefrs);
router.get('/getOneVentefrs/:id', ventefrsController.getOneVentefrs);
router.delete('/removeVentefrs/:id', ventefrsController.removeVentefrs);
router.patch('/updateVentefrs/:id', ventefrsController.updateVentefrs);
/*-------------------------OFFRE FRS----------------------------*/
router.post('/createOffrefrs',offrefrsController.createOffrefrs);
router.get('/getAllOffrefrs/:offre_id', offrefrsController.getAllOffrefrs);
router.get('/getOneOffrefrs/:id', offrefrsController.getOneOffrefrs);
router.delete('/removeOffrefrs/:id', offrefrsController.removeOffrefrs);
router.patch('/updateOffrefrs/:id', offrefrsController.updateOffrefrs);

/*-------------------------ORDRE SERVICE----------------------------*/
router.post('/createOrdreserv',ordreservController.createOrdreserv);
router.get('/getAllOrdreserv', ordreservController.getAllOrdreserv);
router.get('/getOneOrdreserv/:id', ordreservController.getOneOrdreserv);
router.delete('/removeOrdreserv/:id', ordreservController.removeOrdreserv);
router.patch('/updateOrdreserv/:id', ordreservController.updateOrdreserv);
router.get('/findOrdreserv/:marche_id', ordreservController.findOrdreserv);

router.get('/countOrdreserv/:marche_id', ordreservController.countOrdreserv);

/*-------------------------ORDRE suspension----------------------------*/
router.post('/createOrdsuspen',ordsuspensionController.createOrdsuspen);
router.get('/getAllOrdsuspen', ordsuspensionController.getAllOrdsuspen);
router.get('/getOneOrdsuspen/:id', ordsuspensionController.getOneOrdsuspen);
router.delete('/removeOrdsuspen/:id', ordsuspensionController.removeOrdsuspen);
router.patch('/updateOrdsuspen/:id', ordsuspensionController.updateOrdsuspen);
router.get('/findOrdsuspen/:marche_id', ordsuspensionController.findOrdsuspen);

router.get('/countOrdsuspen/:marche_id', ordsuspensionController.countOrdsuspen);
//

/*-------------------------ORDRE reprise----------------------------*/
router.post('/createOrdreprise',ordrepriseController.createOrdreprise);
router.get('/getAllOrdreprise', ordrepriseController.getAllOrdreprise);
router.get('/getOneOrdreprise/:id', ordrepriseController.getOneOrdreprise);
router.delete('/removeOrdreprise/:id', ordrepriseController.removeOrdreprise);
router.patch('/updateOrdreprise/:id', ordrepriseController.updateOrdreprise);
router.get('/findOrdreprise/:marche_id', ordrepriseController.findOrdreprise);

router.get('/countOrdreprise/:marche_id', ordrepriseController.countOrdreprise);

/*-------------------------Site----------------------------------*/
router.post('/createSite',siteController.createSite);
router.get('/getAllSite', siteController.getAllSite);
router.get('/getOneSite/:id', siteController.getOneSite);
router.delete('/removeSite/:id', siteController.removeSite);
router.patch('/updateSite/:id', siteController.updateSite);
router.get('/findsite/:marche_id', siteController.findsite);
/*-------------------------Demande----------------------------------*/
router.post('/createDemande',demandeController.createDemande);
router.get('/getAllDemande', demandeController.getAllDemande);
router.get('/getOneDemande/:id', demandeController.getOneDemande);
router.delete('/removeDemande/:id', demandeController.removeDemande);
router.patch('/updateDemande/:id', demandeController.updateDemande);
router.get('/findDemande/:marche_id', demandeController.findDemande);

//
/*-------------------------Type Reception----------------------------------*/
router.post('/createTypreception',typreceptionController.createTypreception);
router.get('/getAllTypreception', typreceptionController.getAllTypreception);
router.get('/getOneTypreception/:id', typreceptionController.getOneTypreception);
router.delete('/removeTypreception/:id', typreceptionController.removeTypreception);
router.patch('/updateTypreception/:id', typreceptionController.updateTypreception);

/*-------------------------Reception----------------------------------*/
router.post('/createReception',receptionController.createReception);
router.get('/getAllReception', receptionController.getAllReception);
router.get('/getOneReception/:id', receptionController.getOneReception);
router.delete('/removeReception/:id', receptionController.removeReception);
router.patch('/updateReception/:id', receptionController.updateReception);
router.get('/findReception/:marche_id', receptionController.findReception);

router.get('/countReception/:marche_id', receptionController.countReception);  

/*-------------------------Signataire----------------------------------*/
router.post('/createSignataire',signataireController.createSignataire);
router.get('/getAllSignataire', signataireController.getAllSignataire);
router.get('/getOneSignataire/:id', signataireController.getOneSignataire);
router.delete('/removeSignataire/:id', signataireController.removeSignataire);
router.patch('/updateSignataire/:id', signataireController.updateSignataire);
router.get('/findSignataire/:localisation_id', signataireController.findSignataire);
/*-------------------------Mode Seuil----------------------------------*/
router.post('/createSeuilmode',seuilmodeController.createSeuilmode);
router.get('/getAllSeuilmode', seuilmodeController.getAllSeuilmode);
router.get('/getOneSeuilmode/:id', seuilmodeController.getOneSeuilmode);
router.delete('/removeSeuilmode/:id', seuilmodeController.removeSeuilmode);
router.patch('/updateSeuilmode/:id', seuilmodeController.updateSeuilmode);
router.get('/findSeuilmode/:type_id/:mode',authenticateToken, seuilmodeController.findSeuilmode);

// decisionController
/*-------------------------Decision----------------------------------*/
router.post('/createDecision',decisionController.createDecision);
router.get('/getAllDecision', decisionController.getAllDecision);
router.get('/getOneDecision/:id', decisionController.getOneDecision);
router.delete('/removeDecision/:id', decisionController.removeDecision);
router.patch('/updateDecision/:id', decisionController.updateDecision);

/*-------------------------Avenant----------------------------------*/
router.post('/createAvenant',avenantController.createAvenant);
router.get('/getAllAvenant', avenantController.getAllAvenant);
router.get('/getOneAvenant/:id', avenantController.getOneAvenant);
router.delete('/removeAvenant/:id', avenantController.removeAvenant);
router.patch('/updateAvenant/:id', avenantController.updateAvenant);

/*-------------------------Demeure----------------------------------*/
router.post('/createDemeure',demeureController.createDemeure);
router.get('/getAllDemeure', demeureController.getAllDemeure);
router.get('/getOneDemeure/:id', demeureController.getOneDemeure);
router.delete('/removeDemeure/:id', demeureController.removeDemeure);
router.patch('/updateDemeure/:id', demeureController.updateDemeure);

/*-------------------------Resiliation----------------------------------*/
router.post('/createResiliation',resiliationController.createResiliation);
router.get('/getAllResiliation', resiliationController.getAllResiliation);
router.get('/getOneResiliation/:id', resiliationController.getOneResiliation);
router.delete('/removeResiliation/:id', resiliationController.removeResiliation);
router.patch('/updateResiliation/:id', resiliationController.updateResiliation);

//authenticateToken,
/*========Envoie de mail ========================*/
/*
let mailTransport = nodemailer.createTransport({
      service: "smtp.gmail.com",
      auth:{
          user:"rodrigue.midbel@gmail.com",
          pass:"dream787liner"
      }
});

let details = {
  from : "rodrigue.midbel@gmail.com",
  to: "rodrigue.midbel@gmail.com",
  subject: "Angular Mail Test 1",
  text: "My first mail to test nodemailer with Node js"
}

mailTransport.sendMail(details,(err)=>{
    if(err){
       console.log("It has anerror : ", err);
    }
    else{
      console.log("Email has sent !!!!");
    }
  }
)*/


module.exports = router;
