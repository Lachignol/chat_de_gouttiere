const {Router} = require("express");
const router = Router();
const { AddUser, GetOneUser, UpdateUser, DeleteUser, test, GetAllUser} = require('../controller/utilisateur');
const {getAllcourses, getOneCourse, UpdateCourse, AddCourse ,DeleteCourse} = require('../controller/course');
const { addCheckpoint ,getCheckpointsInfoBycourseId, DeleteCheckpoint, getCheckpointsBycourseId} = require('../controller/checkpoint');
const { login, authenticateAdmin,authenticateUser} = require("../middleware/authentification");
const { addChronoUser, getChronoUsers, DeleteChrono} = require("../controller/chrono_user");
const {getClassement}=require("../controller/classement");
const multer  = require('multer');
const {imageUpload}=require("../middleware/upload")
const bcrypt=require("bcrypt");




//router.route("/utilisateurs").get(getTousUtilisateur);
router.post("/api/create-user/",AddUser);
router.get("/api/get-all-users/",authenticateAdmin,GetAllUser)
router.get("/api/get-one-user/:id",authenticateAdmin,GetOneUser);
router.post("/api/update-user/:id",UpdateUser);
router.delete("/api/remove-user/:id",DeleteUser);
//login page//
// router.route("/loginpage").post(postloginpage),
router.post("/api/login/",login)
router.post("/api/subscription",AddUser),

// //chemin pour les pages
// router.route("/").get(redirectPagePrincipale),
// router.route("/index").get(protectedPage,getIndexpage)
// router.route("/last_race").get(protectedPage,getLastRacepage),

// router.route("/modifyUserProfil").get(protectedPage,getModifyUserProfilpage),
// // router.route("/next_alley").get(protectedPage,getNext_Alleypage),
// router.route("/pict_catalog").get(getPict_catalogpage),


//route recuperation de donnée api

//protection de route:
router.get("/api/get-all-courses/",getAllcourses)


router.get("/api/get-one-course/:id",getOneCourse)

//AdminPage//

router.post("/api/add-course/",imageUpload.single('flyer'),authenticateAdmin,AddCourse)
router.delete("/api/delete-course/:id",authenticateAdmin,DeleteCourse)
router.post("/api/update-course/:id",imageUpload.single('flyer'),authenticateAdmin,UpdateCourse)



router.post("/api/add-chrono-user/:id",authenticateAdmin,addChronoUser)
router.get("/api/get-chrono-users/:id",getChronoUsers)
router.delete("/api/delete-chrono-user/:courseId/:nameOfUser",authenticateAdmin,DeleteChrono)

router.get("/api/get-classement/:id",getClassement)

router.post("/api/add-checkpoint/:id",authenticateAdmin,addCheckpoint)
router.delete("/api/delete-checkpoint/:courseId/:nameOfCheckpoint",authenticateAdmin,DeleteCheckpoint)
router.get("/api/get-checkpoint/:id",getCheckpointsBycourseId)
router.get("/api/get-checkpoint-info/:id",getCheckpointsInfoBycourseId)



module.exports = router ;