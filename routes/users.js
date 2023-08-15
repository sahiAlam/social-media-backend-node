const express = require("express");
const router = express.Router();
const {
  handleUpdateUser,
  handleDeleteUser,
  handleGetSingleUser,
  handleFollowUser,
  handleUnFollowUser,
} = require("../controllers/users");

router
  .route("/:id")
  .put(handleUpdateUser)
  .get(handleGetSingleUser)
  .delete(handleDeleteUser);
router.put("/:id/follow", handleFollowUser);
router.put("/:id/unfollow", handleUnFollowUser);

module.exports = router;
