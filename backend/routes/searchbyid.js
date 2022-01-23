const express = require("express");
const router = express.Router();
const ROUTES = require("./allroutes");
const { getUserById } = require("../controllers/searchbyid");
const verifyRole = require("../middlewares/verifyrole");
const verifyToken = require("../middlewares/verifytoken");

// router level middlewares
router.use(verifyToken);
router.use(verifyRole(["user", "company"]));

// get user based on id
router.get(ROUTES.GET_USER_BY_ID, getUserById);

// get company based on id
router.get(ROUTES.GET_USER_BY_ID, getUserById);

module.exports = router;
