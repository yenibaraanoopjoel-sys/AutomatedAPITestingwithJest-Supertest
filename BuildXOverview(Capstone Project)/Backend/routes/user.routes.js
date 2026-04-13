const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const { getUserProfile, updateUserProfile, getSuggestedCollaborators } = require("../controllers/user.controller");

router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);
router.get("/suggested-collaborators", authMiddleware, getSuggestedCollaborators);

module.exports = router;
