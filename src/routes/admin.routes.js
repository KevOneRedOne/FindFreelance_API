const express = require('express');

const router = express.Router();
const adminController = require('../controllers/admin.controller');
const freelanceController = require('../controllers/freelance.controller');
const companyController = require('../controllers/company.controller');
const missionController = require('../controllers/mission.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyUsers').verifyAdmin;

//-------------------- ADMIN --------------------
router.get('/all', verifyToken, verifyAdmin, adminController.getAllAdmins);
router.get('/one/:id', verifyToken, verifyAdmin, adminController.getOneAdmin);
router.put('/update/one/:id', verifyToken, verifyAdmin, adminController.updateOneAdmin);
router.delete('/delete/one/:id', verifyToken, verifyAdmin, adminController.deleteAdmin);

// -------------------- FREELANCER -------------------- //
router.put('/freelancer/update/:id', verifyToken, verifyAdmin, freelanceController.updateFreelanceByAdmin);
router.delete('/freelancer/delete/:id', verifyToken, verifyAdmin, freelanceController.deleteFreelanceByAdmin);

// -------------------- COMPANY -------------------- //
router.put('/company/update/:id', verifyToken, verifyAdmin, companyController.updateOneCompanyAdmin);
router.delete('/company/delete/:id', verifyToken, verifyAdmin, companyController.deleteOneCompanyAdmin);

// -------------------- MISSION --------------------
router.get('/mission/all', verifyToken, verifyAdmin, missionController.getAllMissions);
router.get('/mission/:id', verifyToken, verifyAdmin, missionController.getOneMission);
router.put('/mission/update/:id', verifyToken, verifyAdmin, missionController.updateOneMission);
router.delete('/mission/delete/:id', verifyToken, verifyAdmin, missionController.deleteOneMission);

// -------------------- SKILL --------------------

module.exports = router;

// //-------------------- FREELANCER --------------------
// router.get('/admin/freelancers', verifyToken, verifyAdmin, adminController.getAllFreelancers);
// router.get('/admin/freelancer/:id', verifyToken, verifyAdmin, adminController.getOneFreelancer);
// router.put('/admin/freelancer/:id', verifyToken, verifyAdmin, adminController.updateOneFreelancer);
// router.delete('/admin/freelancer/:id', verifyToken, verifyAdmin, adminController.deleteOneFreelancer);

// //-------------------- COMPANY --------------------
// router.get('/admin/companies', verifyToken, verifyAdmin, adminController.getAllCompanies);
// router.get('/admin/company/:id', verifyToken, verifyAdmin, adminController.getOneCompany);
// router.put('/admin/company/:id', verifyToken, verifyAdmin, adminController.updateOneCompany);
// router.delete('/admin/company/:id', verifyToken, verifyAdmin, adminController.deleteOneCompany);

// //-------------------- USER_INCOMPANY --------------------
// router.get('/admin/users_inCompany', verifyToken, verifyAdmin, adminController.getAllUsers_inCompany);
// router.get('/admin/user_inCompany/:id', verifyToken, verifyAdmin, adminController.getOneUser_inCompany);
// router.put('/admin/user_inCompany/:id', verifyToken, verifyAdmin, adminController.updateOneUser_inCompany);
// router.delete('/admin/user_inCompany/:id', verifyToken, verifyAdmin, adminController.deleteOneUser_inCompany);



// //-------------------- MISSION --------------------
// router.get('/admin/mission/all', verifyToken, verifyAdmin, adminController.getAllMissions);
// router.get('/admin/mission/:id', verifyToken, verifyAdmin, adminController.getOneMission);

// //-------------------- PROPOSAL --------------------
// router.get('/admin/proposals', verifyToken, verifyAdmin, adminController.getAllProposals);
// router.get('/admin/proposal/:id', verifyToken, verifyAdmin, adminController.getOneProposal);

