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
const histodossController = require('../controller/histodossier');
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

const avenantController = require('../controller/avenant');
const demeureController = require('../controller/demeure');


const resiliationController = require('../controller/resiliation');
const decisionController = require('../controller/decision');
const penaliteController = require('../controller/penalite');
const reglementController = require('../controller/reglement');

const analitemController = require('../controller/analitem');


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
router.post('/createUsergroup',authenticateToken,usergroupController.createUsergroup);
router.get('/getAllUsergroup',authenticateToken,usergroupController.getAllUsergroup);
router.get('/getOneUsergroup/:id',authenticateToken,usergroupController.getOneUsergroup);
router.delete('/removeUsergroup/:id',authenticateToken,usergroupController.removeUsergroup);
router.patch('/updateUsergroup/:id',authenticateToken,usergroupController.updateUsergroup);
/*-------------------------USER---------------------------------*/
router.post('/createUser',authenticateToken, userController.createUser);
router.get('/getAllUser',authenticateToken, userController.getAllUser);
router.get('/getOneUser/:id',authenticateToken, userController.getOneUser);
router.delete('/removeUser/:id',authenticateToken, userController.removeUser);
router.patch('/updateUser/:id',authenticateToken, userController.updateUser);
router.get('/findUser/:username', userController.findUser);
router.post('/login', userController.login); // findUserByFonction
router.get('/findUserByFonction',authenticateToken, userController.findUserByFonction);
/*-------------------------FONCTIONALITE---------------------------------*/
router.post('/createFonctionalite',authenticateToken, fonctionaliteController.createFonctionalite);
router.get('/getAllFonctionalite',authenticateToken, fonctionaliteController.getAllFonctionalite);
router.get('/getOneFonctionalite/:id',authenticateToken, fonctionaliteController.getOneFonctionalite);
router.delete('/removeFonctionalite/:id',authenticateToken, fonctionaliteController.removeFonctionalite);
router.patch('/updateFonctionalite/:id',authenticateToken, fonctionaliteController.updateFonctionalite);
/*-------------------------PRIVILEGE---------------------------------*/
router.post('/createPrivilege',authenticateToken, privilegeController.createPrivilege);
router.get('/getAllPrivilege',authenticateToken, privilegeController.getAllPrivilege);

router.get('/recherche/:usergroup_id/:fonctionalite_id', privilegeController.recherche);

router.get('/getOnePrivilege/:id',authenticateToken, privilegeController.getOnePrivilege);
router.delete('/removePrivilege/:id',authenticateToken, privilegeController.removePrivilege);
router.patch('/updatePrivilege/:id',authenticateToken, privilegeController.updatePrivilege);

router.get('/getPrivileges/:usergroup_id', privilegeController.getPrivileges);
/*-------------------------PRIVILEGE---------------------------------*/
router.post('/createLog',authenticateToken, logController.createLog);
router.get('/getAllLog',authenticateToken, logController.getAllLog);

router.get('/findLog', logController.findLog);


router.get('/getOneLog/:id',authenticateToken, logController.getOneLog);
router.delete('/removeLog/:id',authenticateToken, logController.removeLog);
router.patch('/updateLog/:id',authenticateToken, logController.updateLog);

/*-------------------------MODE---------------------------------*/
router.post('/createMode',authenticateToken, modeController.createMode);
router.get('/getAllMode',authenticateToken, modeController.getAllMode);
router.get('/getOneMode/:id',authenticateToken, modeController.getOneMode);
router.delete('/removeMode/:id',authenticateToken, modeController.removeMode);
router.patch('/updateMode/:id',authenticateToken, modeController.updateMode);

/*-------------------------MODE PAIEMENT-------------------------*/
router.post('/createModepaie',authenticateToken, modepaiementController.createModepaie);
router.get('/getAllModepaie',authenticateToken, modepaiementController.getAllModepaie);
router.get('/getOneModepaie/:id',authenticateToken, modepaiementController.getOneModepaie);
router.delete('/removeModepaie/:id',authenticateToken, modepaiementController.removeModepaie);
router.patch('/updateModepaie/:id',authenticateToken, modepaiementController.updateModepaie);

/*-------------------------FOURNISSEUR-------------------------*/
router.post('/createFournisseur',authenticateToken, fournisseurController.createFournisseur);
router.get('/getAllFournisseur',authenticateToken,fournisseurController.getAllFournisseur);
router.get('/getOneFournisseur/:id',authenticateToken, fournisseurController.getOneFournisseur);
router.delete('/removeFournisseur/:id',authenticateToken, fournisseurController.removeFournisseur);
router.patch('/updateFournisseur/:id',authenticateToken, fournisseurController.updateFournisseur);

router.get('/findFrs/:ifu/:rccm',authenticateToken, fournisseurController.findFrs);

router.get('/getAllEntreprise', fournisseurController.getAllEntreprise);
router.get('/getAllGroupement',authenticateToken, fournisseurController.getAllGroupement);
/*-------------------------BUDGET---------------------------------*/
router.post('/createBudget',authenticateToken, budgetController.createBudget);
router.post('/createMultipleBudget',authenticateToken, budgetController.createMultipleBudget);
router.get('/getAllBudget',authenticateToken, budgetController.getAllBudget);
router.get('/getOneBudget/:id',authenticateToken, budgetController.getOneBudget);
router.delete('/removeBudget/:id',authenticateToken, budgetController.removeBudget);
router.patch('/updateBudget/:id',authenticateToken, budgetController.updateBudget);

/*-------------------------TYPE---------------------------------*/
router.post('/createType',authenticateToken, typeController.createType);
router.get('/getAllType',authenticateToken, typeController.getAllType);
router.get('/getOneType/:id',authenticateToken, typeController.getOneType);
router.delete('/removeType/:id',authenticateToken, typeController.removeType);
router.patch('/updateType/:id',authenticateToken, typeController.updateType);

/*-------------------------LOCALISATION---------------------------------*/
router.post('/createLocalisation',authenticateToken, localisationController.createLocalisation);
router.get('/getAllLocalisation',authenticateToken, localisationController.getAllLocalisation);
router.get('/getOneLocalisation/:id',authenticateToken, localisationController.getOneLocalisation);
router.delete('/removeLocalisation/:id',authenticateToken, localisationController.removeLocalisation);
router.patch('/updateLocalisation/:id',authenticateToken, localisationController.updateLocalisation);
/*-------------------------PLAN---------------------------------*/
router.post('/createPlan',authenticateToken, planController.createPlan);
router.get('/getAllPlan',authenticateToken, planController.getAllPlan);
router.get('/getOnePlan/:id',authenticateToken, planController.getOnePlan);
router.delete('/removePlan/:id',authenticateToken, planController.removePlan);
router.patch('/updatePlan/:id',authenticateToken, planController.updatePlan);
router.get('/findPlan/:annee',authenticateToken, planController.findPlan);  

router.get('/findPlanByStatut/:statut', planController.findPlanByStatut); 
/*-------------------------Histo PLAN---------------------------------*/
router.post('/createHistoplan',authenticateToken, histoplanController.createHistoplan);
router.get('/getAllHistoPlan',authenticateToken, histoplanController.getAllHistoPlan);
router.get('/getOneHistoPlan/:id',authenticateToken, histoplanController.getOneHistoPlan);
router.delete('/removeHistoPlan/:id',authenticateToken, histoplanController.removeHistoPlan);
router.patch('/updateHistoPlan/:id',authenticateToken, histoplanController.updateHistoPlan);
router.get('/findHistoPlan/:annee',authenticateToken, histoplanController.findHistoPlan);

/*-------------------------PLANITEM---------------------------------*/
router.post('/createPlanitem',authenticateToken, planitemController.createPlanitem);
router.get('/getAllPlanitem', planitemController.getAllPlanitem);
router.get('/getOnePlanitem/:id', planitemController.getOnePlanitem);
router.delete('/removePlanitem/:id',authenticateToken, planitemController.removePlanitem);
router.patch('/updatePlanitem/:id',authenticateToken, planitemController.updatePlanitem);
router.get('/findPlanitem/:annee', planitemController.findPlanitem);
router.get('/findLigneByPlanID/:plan_id', planitemController.findLigneByPlanID);  
router.get('/findPlanitemByLoc/:plan_id/:localisation_id', planitemController.findPlanitemByLoc);

router.get('/countPlanitem/:plan_id/:localisation_id/:type_id', planitemController.countPlanitem);
/*-------------------------DOSSIER---------------------------------*/

router.post('/createDossier',authenticateToken, dossierController.createDossier);
router.get('/getAllDossier',authenticateToken, dossierController.getAllDossier);
router.get('/getOneDossier/:id',authenticateToken, dossierController.getOneDossier);
router.delete('/removeDossier/:id',authenticateToken, dossierController.removeDossier);
router.patch('/updateDossier/:id',authenticateToken, dossierController.updateDossier);

router.get('/findDossier/:annee',authenticateToken, dossierController.findDossier);
router.get('/findDossierByType/:annee/:type_id',authenticateToken, dossierController.findDossierByType);

router.get('/findDossierByLoca/:annee/:localisation_id',authenticateToken, dossierController.findDossierByLoca);
router.get('/findDossierByLocaAndType/:annee/:type_id/:localisation_id',authenticateToken, dossierController.findDossierByLocaAndType);

router.get('/countDossier/:annee',authenticateToken, dossierController.countDossier);
//histodossController
/*-------------------------Histo Dossier---------------------------------*/
router.post('/createHistodoss',authenticateToken, histodossController.createHistodoss);
router.get('/getAllHistodoss',authenticateToken, histodossController.getAllHistodoss);
router.get('/getOneHistodoss/:id',authenticateToken, histodossController.getOneHistodoss);
router.delete('/removeHistodoss/:id',authenticateToken, histodossController.removeHistodoss);
router.patch('/updateHistodoss/:id',authenticateToken, histodossController.updateHistodoss);
router.get('/findHistodoss/:numero_doss',authenticateToken, histodossController.findHistodoss);
/*-------------------------LOT---------------------------------*/
router.post('/createLot',authenticateToken, lotController.createLot);
router.get('/getAllLot',authenticateToken, lotController.getAllLot);
router.get('/getOneLot/:id',authenticateToken, lotController.getOneLot);
router.delete('/removeLot/:id',authenticateToken, lotController.removeLot);
router.patch('/updateLot/:id',authenticateToken, lotController.updateLot);
router.get('/findLot/:dossier_id',authenticateToken, lotController.findLot);
router.get('/sumMontantLot/:dossier_id',authenticateToken, lotController.sumMontantLot);
router.get('/countLot/:num_lot',authenticateToken, lotController.countLot);
/*-------------------------VENTE---------------------------------*/
router.post('/createVente',authenticateToken, venteController.createVente);
router.get('/getAllVente',authenticateToken, venteController.getAllVente);
router.get('/getOneVente/:id',authenticateToken, venteController.getOneVente);
router.delete('/removeVente/:id',authenticateToken, venteController.removeVente);
router.patch('/updateVente/:id',authenticateToken, venteController.updateVente);
router.get('/findVente/:lot_id',authenticateToken, venteController.findVente);
router.get('/findVenteByNum/:num_vente',authenticateToken, venteController.findVenteByNum);

router.get('/findVenteByDossID/:vent_dossier_id',authenticateToken, venteController.findVenteByDossID);
router.get('/findVenteByStatut/:vent_statut',venteController.findVenteByStatut);

router.get('/sumMontantAllVente',venteController.sumMontantAllVente);
router.get('/sumMontantVenteByStatut/:vent_statut',venteController.sumMontantVenteByStatut);

router.get('/findVenteID/:lot_id/:fournisseur_id',authenticateToken, venteController.findVenteID);

router.get('/countSellLot/:vent_dossier_id',venteController.countSellLot);

router.get('/countVente',venteController.countVente);
/*-------------------------CAISSE---------------------------------*/
router.post('/createCaisse',authenticateToken, caisseController.createCaisse);
router.get('/getAllCaisse',authenticateToken, caisseController.getAllCaisse);
router.get('/getOneCaisse/:id',authenticateToken, caisseController.getOneCaisse);
router.delete('/removeCaisse/:id',authenticateToken, caisseController.removeCaisse);
router.patch('/updateCaisse/:id',authenticateToken, caisseController.updateCaisse);
router.get('/findCaisse/:vente_id',authenticateToken, caisseController.findCaisse);
router.get('/findCaisseByDoss/:vent_dossier_id',authenticateToken, caisseController.findCaisseByDoss);
router.get('/getCaisseByUser/:user_id',authenticateToken, caisseController.getCaisseByUser)

router.get('/countCaisse',caisseController.countCaisse);

/*-------------------------PAIEMENT---------------------------------*/
router.post('/createPaiement',authenticateToken, paiementController.createPaiement);
router.get('/getAllPaiement/:dossier_id',authenticateToken, paiementController.getAllPaiement);
router.get('/getOnePaiement/:id',authenticateToken, paiementController.getOnePaiement);
router.delete('/removePaiement/:id',authenticateToken, paiementController.removePaiement);
router.patch('/updatePaiement/:id',authenticateToken, paiementController.updatePaiement);
router.get('/findPaiement/:dossier_id',authenticateToken, paiementController.findPaiement);

/*-------------------------AVIS---------------------------------*/
router.post('/createAvi',aviController.createAvi);
router.get('/getAllAvi/:dossier_id',authenticateToken, aviController.getAllAvi);
router.get('/getOneAvi/:id',authenticateToken, aviController.getOneAvi);
router.delete('/removeAvi/:id',authenticateToken, aviController.removeAvi);
router.patch('/updateAvi/:id',authenticateToken, aviController.updateAvi);
router.get('/findAvi/:dossier_id',authenticateToken, aviController.findAvi);
/*-------------------------CAMINV---------------------------------*/
router.post('/createCaminv',authenticateToken, caminvController.createCaminv);
router.get('/getAllCaminv/:dossier_id',authenticateToken, caminvController.getAllCaminv);
router.get('/getOneCaminv/:id',authenticateToken, caminvController.getOneCaminv);
router.delete('/removeCaminv/:id',authenticateToken, caminvController.removeCaminv);
router.patch('/updateCaminv/:id',authenticateToken, caminvController.updateCaminv);
router.get('/findCaminv/:dossier_id',authenticateToken, caminvController.findCaminv);
/*-------------------------SCAMINV---------------------------------*/
router.post('/createScaminv',authenticateToken, scaminvController.createScaminv);
router.get('/getAllScaminv/:dossier_id',authenticateToken, scaminvController.getAllScaminv);
router.get('/getOneScaminv/:id',authenticateToken, scaminvController.getOneScaminv);
router.delete('/removeScaminv/:id',authenticateToken, scaminvController.removeScaminv);
router.patch('/updateScaminv/:id',authenticateToken, scaminvController.updateScaminv);
router.get('/findScaminv/:dossier_id',authenticateToken, scaminvController.findScaminv);
/*-------------------------OFFRE---------------------------------*/
router.post('/createOffre',offreController.createOffre);
router.get('/getAllOffre/:off_dossier_id', offreController.getAllOffre);
router.get('/getOneOffre/:id',authenticateToken, offreController.getOneOffre);
router.delete('/removeOffre/:id',authenticateToken, offreController.removeOffre);
router.patch('/updateOffre/:id',authenticateToken, offreController.updateOffre);
router.get('/findOffre/:off_dossier_id',authenticateToken, offreController.findOffre);
router.get('/getOffreById/:id',authenticateToken, offreController.getOffreById);

router.get('/getOffreByLotID/:lot_id', offreController.getOffreByLotID);
router.get('/getAttributaire/:lot_id/:fournisseur_id', offreController.getAttributaire)
/*-------------------------Ouverture---------------------------------*/
router.post('/createProceverb',proceverbController.createProceverb);
router.get('/getAllProceverb/:dossier_id',authenticateToken, proceverbController.getAllProceverb);
router.get('/getOneProceverb/:id',authenticateToken, proceverbController.getOneProceverb);
router.delete('/removeProceverb/:id',authenticateToken, proceverbController.removeProceverb);
router.patch('/updateProceverb/:id',authenticateToken, proceverbController.updateProceverb);
router.get('/findProceverb/:dossier_id',authenticateToken, proceverbController.findProceverb);

/*-------------------------Analyse---------------------------------*/
router.post('/createAnalyse',analyseController.createAnalyse);
router.get('/getAllAnalyse/:dossier_id',authenticateToken, analyseController.getAllAnalyse);
router.get('/getOneAnalyse/:id',authenticateToken, analyseController.getOneAnalyse);
router.delete('/removeAnalyse/:id',authenticateToken, analyseController.removeAnalyse);
router.patch('/updateAnalyse/:id',authenticateToken, analyseController.updateAnalyse);
router.get('/findAnalyse/:dossier_id',authenticateToken, analyseController.findAnalyse);
router.get('/findAnalyseByLot/:lot_id',authenticateToken, analyseController.findAnalyseByLot);

/*-------------------------Deliberation---------------------------------*/
router.post('/createDeliberation',deliberationController.createDeliberation);
router.get('/getAllDeliberation/:dossier_id',authenticateToken, deliberationController.getAllDeliberation);
router.get('/getOneDeliberation/:id',authenticateToken, deliberationController.getOneDeliberation);
router.delete('/removeDeliberation/:id',authenticateToken, deliberationController.removeDeliberation);
router.patch('/updateDeliberation/:id',authenticateToken, deliberationController.updateDeliberation);
router.get('/findDeliberation/:dossier_id',authenticateToken, deliberationController.findDeliberation);

router.get('/findDelibByLotID/:lot_id',authenticateToken, deliberationController.findDelibByLotID);

/*-------------------------RESULTAT---------------------------------*/
router.post('/createResultat',resultatController.createResultat);
router.get('/getAllResultat/:dossier_id',authenticateToken, resultatController.getAllResultat);
router.get('/getOneResultat/:id',authenticateToken, resultatController.getOneResultat);
router.delete('/removeResultat/:id',authenticateToken, resultatController.removeResultat);
router.patch('/updateResultat/:id',authenticateToken, resultatController.updateResultat);
router.get('/findResultat/:dossier_id',authenticateToken, resultatController.findResultat);

/*-------------------------RESULTAT---------------------------------*/
router.post('/createLitige',litigeController.createLitige);
router.get('/getAllLitige/:dossier_id',authenticateToken, litigeController.getAllLitige);
router.get('/getOneLitige/:id',authenticateToken, litigeController.getOneLitige);
router.delete('/removeLitige/:id',authenticateToken, litigeController.removeLitige);
router.patch('/updateLitige/:id',authenticateToken, litigeController.updateLitige);
router.get('/findLitige/:dossier_id',authenticateToken, litigeController.findLitige);
/*-------------------------CONTESTATION---------------------------------*/
router.post('/createContestation',contestationController.createContestation);
router.get('/getAllContestation/:dossier_id',authenticateToken, contestationController.getAllContestation);
router.get('/getOneContestation/:id',authenticateToken, contestationController.getOneContestation);
router.delete('/removeContestation/:id',authenticateToken, contestationController.removeContestation);
router.patch('/updateContestation/:id',authenticateToken, contestationController.updateContestation);
router.get('/findContestation/:dossier_id',authenticateToken, contestationController.findContestation);

//notificationController
/*-------------------------NOTIFICATION----------------------------------*/
router.post('/createNotification',notificationController.createNotification);
router.get('/getAllNotification/:not_dossier_id',authenticateToken, notificationController.getAllNotification);
router.get('/getOneNotification/:id',authenticateToken, notificationController.getOneNotification);
router.delete('/removeNotification/:id',authenticateToken, notificationController.removeNotification);
router.patch('/updateNotification/:id',authenticateToken, notificationController.updateNotification);
router.get('/findNotification/:not_dossier_id',authenticateToken, notificationController.findNotification);
router.get('/countNotification/:annee',authenticateToken, notificationController.countNotification);

/*-------------------------MARCHES----------------------------------*/
router.post('/createMarche',marcheController.createMarche);
router.get('/getAllMarche',authenticateToken, marcheController.getAllMarche);
router.get('/getOneMarche/:id',authenticateToken, marcheController.getOneMarche);
router.delete('/removeMarche/:id',authenticateToken, marcheController.removeMarche);
router.patch('/updateMarche/:id',authenticateToken, marcheController.updateMarche);
router.get('/findMarche/:dossier_id',authenticateToken, marcheController.findMarche);

router.get('/countMarche/:annee',authenticateToken, marcheController.countMarche);  
router.get('/getMarche/:dossier_id',authenticateToken, marcheController.getMarche);

router.get('/findMarcheByID/:id',authenticateToken, marcheController.findMarcheByID);
/*-------------------------CAUTIONS---------------------------------*/
router.post('/createCaution',authenticateToken, cautionController.createCaution);
router.get('/getAllCaution',authenticateToken, cautionController.getAllCaution);
router.get('/getOneCaution/:id',authenticateToken, cautionController.getOneCaution);
router.delete('/removeCaution/:id',authenticateToken, cautionController.removeCaution);
router.patch('/updateCaution/:id',authenticateToken, cautionController.updateCaution);
router.get('/findcautions/:dossier_id',authenticateToken, cautionController.findcautions);

/*-------------------------PUB AVIS BORDEREAU----------------------------*/
router.post('/createPubavis',pubavisController.createPubavis);
router.get('/getAllPubavis/:dossier_id',authenticateToken, pubavisController.getAllPubavis);
router.get('/getOnePubavis/:id',authenticateToken, pubavisController.getOnePubavis);
router.delete('/removePubavis/:id',authenticateToken, pubavisController.removePubavis);
router.patch('/updatePubavis/:id',authenticateToken, pubavisController.updatePubavis);
router.get('/findPubavis/:dossier_id',authenticateToken, pubavisController.findPubavis);
//counPubavis
router.get('/counPubavis/:annee',authenticateToken, pubavisController.counPubavis);
/*-------------------------PUB RESULTAT BORDEREAU----------------------------*/
router.post('/createPubresultat',pubresultatController.createPubresultat);
router.get('/getAllPubresultat/:dossier_id',authenticateToken, pubresultatController.getAllPubresultat);
router.get('/getOnePubresultat/:id',authenticateToken, pubresultatController.getOnePubresultat);
router.delete('/removePubresultat/:id',authenticateToken, pubresultatController.removePubresultat);
router.patch('/updatePubresultat/:id',authenticateToken, pubresultatController.updatePubresultat);
router.get('/findPubresultat/:dossier_id',authenticateToken, pubresultatController.findPubresultat);

/*-------------------------COURRIERS---------------------------------*/

router.post('/createCourrier',courrierController.createCourrier);
router.get('/getAllCourrier/:dossier_id',authenticateToken, courrierController.getAllCourrier);
router.get('/getOneCourrier/:id',authenticateToken, courrierController.getOneCourrier);
router.delete('/removeCourrier/:id',authenticateToken, courrierController.removeCourrier);
router.patch('/updateCourrier/:id',authenticateToken, courrierController.updateCourrier);
router.get('/findCourrier/:dossier_id',authenticateToken, courrierController.findCourrier);

/*-------------------------VENTE FRS----------------------------*/
router.post('/createVentefrs',ventefrsController.createVentefrs);
router.get('/getAllVentefrs/:vente_id',authenticateToken, ventefrsController.getAllVentefrs);
router.get('/getOneVentefrs/:id',authenticateToken, ventefrsController.getOneVentefrs);
router.delete('/removeVentefrs/:id',authenticateToken, ventefrsController.removeVentefrs);
router.patch('/updateVentefrs/:id',authenticateToken, ventefrsController.updateVentefrs);
/*-------------------------OFFRE FRS----------------------------*/
router.post('/createOffrefrs',offrefrsController.createOffrefrs);
router.get('/getAllOffrefrs/:offre_id',authenticateToken, offrefrsController.getAllOffrefrs);
router.get('/getOneOffrefrs/:id',authenticateToken, offrefrsController.getOneOffrefrs);
router.delete('/removeOffrefrs/:id',authenticateToken, offrefrsController.removeOffrefrs);
router.patch('/updateOffrefrs/:id',authenticateToken, offrefrsController.updateOffrefrs);

/*-------------------------ORDRE SERVICE----------------------------*/
router.post('/createOrdreserv',ordreservController.createOrdreserv);
router.get('/getAllOrdreserv',authenticateToken, ordreservController.getAllOrdreserv);
router.get('/getOneOrdreserv/:id',authenticateToken, ordreservController.getOneOrdreserv);
router.delete('/removeOrdreserv/:id',authenticateToken, ordreservController.removeOrdreserv);
router.patch('/updateOrdreserv/:id',authenticateToken, ordreservController.updateOrdreserv);
router.get('/findOrdreserv/:marche_id',authenticateToken, ordreservController.findOrdreserv);

router.get('/countOrdreserv/:marche_id',authenticateToken, ordreservController.countOrdreserv);

/*-------------------------ORDRE suspension----------------------------*/
router.post('/createOrdsuspen',ordsuspensionController.createOrdsuspen);
router.get('/getAllOrdsuspen',authenticateToken, ordsuspensionController.getAllOrdsuspen);
router.get('/getOneOrdsuspen/:id',authenticateToken, ordsuspensionController.getOneOrdsuspen);
router.delete('/removeOrdsuspen/:id',authenticateToken, ordsuspensionController.removeOrdsuspen);
router.patch('/updateOrdsuspen/:id',authenticateToken, ordsuspensionController.updateOrdsuspen);
router.get('/findOrdsuspen/:marche_id',authenticateToken, ordsuspensionController.findOrdsuspen);

router.get('/countOrdsuspen/:marche_id',authenticateToken, ordsuspensionController.countOrdsuspen);
//

/*-------------------------ORDRE reprise----------------------------*/
router.post('/createOrdreprise',ordrepriseController.createOrdreprise);
router.get('/getAllOrdreprise',authenticateToken, ordrepriseController.getAllOrdreprise);
router.get('/getOneOrdreprise/:id',authenticateToken, ordrepriseController.getOneOrdreprise);
router.delete('/removeOrdreprise/:id',authenticateToken, ordrepriseController.removeOrdreprise);
router.patch('/updateOrdreprise/:id',authenticateToken, ordrepriseController.updateOrdreprise);
router.get('/findOrdreprise/:marche_id',authenticateToken, ordrepriseController.findOrdreprise);

router.get('/countOrdreprise/:marche_id',authenticateToken, ordrepriseController.countOrdreprise);

/*-------------------------Site----------------------------------*/
router.post('/createSite',siteController.createSite);
router.get('/getAllSite',authenticateToken, siteController.getAllSite);
router.get('/getOneSite/:id',authenticateToken, siteController.getOneSite);
router.delete('/removeSite/:id',authenticateToken, siteController.removeSite);
router.patch('/updateSite/:id',authenticateToken, siteController.updateSite);
router.get('/findsite/:marche_id',authenticateToken, siteController.findsite);
/*-------------------------Demande----------------------------------*/
router.post('/createDemande',demandeController.createDemande);
router.get('/getAllDemande',authenticateToken, demandeController.getAllDemande);
router.get('/getOneDemande/:id',authenticateToken, demandeController.getOneDemande);
router.delete('/removeDemande/:id',authenticateToken, demandeController.removeDemande);
router.patch('/updateDemande/:id',authenticateToken, demandeController.updateDemande);
router.get('/findDemande/:marche_id',authenticateToken, demandeController.findDemande);

//
/*-------------------------Type Reception----------------------------------*/
router.post('/createTypreception',typreceptionController.createTypreception);
router.get('/getAllTypreception',authenticateToken, typreceptionController.getAllTypreception);
router.get('/getOneTypreception/:id',authenticateToken, typreceptionController.getOneTypreception);
router.delete('/removeTypreception/:id',authenticateToken, typreceptionController.removeTypreception);
router.patch('/updateTypreception/:id',authenticateToken, typreceptionController.updateTypreception);

/*-------------------------Reception----------------------------------*/
router.post('/createReception',receptionController.createReception);
router.get('/getAllReception',authenticateToken, receptionController.getAllReception);
router.get('/getOneReception/:id',authenticateToken, receptionController.getOneReception);
router.delete('/removeReception/:id',authenticateToken, receptionController.removeReception);
router.patch('/updateReception/:id',authenticateToken, receptionController.updateReception);
router.get('/findReception/:marche_id',authenticateToken, receptionController.findReception);

router.get('/countReception/:marche_id',authenticateToken, receptionController.countReception);  

/*-------------------------Signataire----------------------------------*/
router.post('/createSignataire',signataireController.createSignataire);
router.get('/getAllSignataire',authenticateToken, signataireController.getAllSignataire);
router.get('/getOneSignataire/:id',authenticateToken, signataireController.getOneSignataire);
router.delete('/removeSignataire/:id',authenticateToken, signataireController.removeSignataire);
router.patch('/updateSignataire/:id',authenticateToken, signataireController.updateSignataire);
router.get('/findSignataire/:localisation_id',authenticateToken, signataireController.findSignataire);
/*-------------------------Mode Seuil----------------------------------*/
router.post('/createSeuilmode',authenticateToken, seuilmodeController.createSeuilmode);
router.get('/getAllSeuilmode',authenticateToken, seuilmodeController.getAllSeuilmode);
router.get('/getOneSeuilmode/:id',authenticateToken, seuilmodeController.getOneSeuilmode);
router.delete('/removeSeuilmode/:id',authenticateToken, seuilmodeController.removeSeuilmode);
router.patch('/updateSeuilmode/:id',authenticateToken, seuilmodeController.updateSeuilmode);
router.get('/findSeuilmode/:type_id/:mode', seuilmodeController.findSeuilmode);

router.get('/findModeByType/:type_id', seuilmodeController.findModeByType);

// decisionController

/*-------------------------Avenant----------------------------------*/
router.post('/createAvenant',authenticateToken, avenantController.createAvenant);
router.get('/getAllAvenant',authenticateToken, avenantController.getAllAvenant);
router.get('/getOneAvenant/:id',authenticateToken, avenantController.getOneAvenant);
router.delete('/removeAvenant/:id',authenticateToken, avenantController.removeAvenant);
router.patch('/updateAvenant/:id',authenticateToken, avenantController.updateAvenant);

/*-------------------------Demeure----------------------------------*/
router.post('/createDemeure',demeureController.createDemeure);
router.get('/getAllDemeure',authenticateToken, demeureController.getAllDemeure);
router.get('/getOneDemeure/:id',authenticateToken, demeureController.getOneDemeure);
router.delete('/removeDemeure/:id',authenticateToken, demeureController.removeDemeure);
router.patch('/updateDemeure/:id',authenticateToken, demeureController.updateDemeure);


/*-------------------------Resiliation----------------------------------*/
router.post('/createResiliation',authenticateToken, resiliationController.createResiliation);
router.get('/getAllResiliation',authenticateToken, resiliationController.getAllResiliation);
router.get('/getOneResiliation/:id',authenticateToken, resiliationController.getOneResiliation);
router.delete('/removeResiliation/:id',authenticateToken, resiliationController.removeResiliation);
router.patch('/updateResiliation/:id',authenticateToken, resiliationController.updateResiliation);

router.get('/findResiliation/:marche_id',authenticateToken, resiliationController.findResiliation);

/*-------------------------Decision----------------------------------*/
router.post('/createDecision',authenticateToken, decisionController.createDecision);
router.get('/getAllDecision',authenticateToken, decisionController.getAllDecision);
router.get('/getOneResiliation/:id',authenticateToken, decisionController.getOneDecision);
router.delete('/removeDecision/:id',authenticateToken, decisionController.removeDecision);
router.patch('/updateDecision/:id',authenticateToken, decisionController.updateDecision);

router.get('/findDecision/:marche_id',authenticateToken, decisionController.findDecision);

/*-------------------------Penalite----------------------------------*/
router.post('/createPenalite',authenticateToken, penaliteController.createPenalite);
router.get('/getAllPenalite',authenticateToken, penaliteController.getAllPenalite);
router.get('/getOnePenalite/:id',authenticateToken, penaliteController.getOnePenalite);
router.delete('/removePenalite/:id',authenticateToken, penaliteController.removePenalite);
router.patch('/updatePenalite/:id',authenticateToken, penaliteController.updatePenalite);

router.get('/findPenalite/:marche_id',authenticateToken, penaliteController.findPenalite);

/*-------------------------Reglement----------------------------------*/
router.post('/createReglement',authenticateToken, reglementController.createReglement);
router.get('/getAllReglement',authenticateToken, reglementController.getAllReglement);
router.get('/getOneReglement/:id',authenticateToken, reglementController.getOneReglement);
router.delete('/removeReglement/:id',authenticateToken, reglementController.removeReglement);
router.patch('/updateReglement/:id',authenticateToken, reglementController.updateReglement);

router.get('/findReglement/:marche_id',authenticateToken, reglementController.findReglement);

/*-------------------------Analyse Item----------------------------------*/
router.post('/createAnalitem',analitemController.createAnalitem);
router.get('/getAllAnalitem/:analyse_id',authenticateToken, analitemController.getAllAnalitem);
router.get('/getOneAnalitem/:id',authenticateToken, analitemController.getOneAnalitem);
router.delete('/removeAnalitem/:id',authenticateToken, analitemController.removeAnalitem);
router.patch('/updateAnalitem/:id',authenticateToken, analitemController.updateAnalitem);

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
