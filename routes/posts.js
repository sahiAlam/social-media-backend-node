const express = require("express");
const router = express.Router();
const {
  handleCreatePost,
  handleUpdatePost,
  handleDeletePost,
  handleLikeAndDislikePost,
  handleGetSinglePost,
  handleGetAllTimelinePost,
} = require("../controllers/posts");

router.post("/", handleCreatePost);
router
  .route("/:id")
  .put(handleUpdatePost)
  .get(handleGetSinglePost)
  .delete(handleDeletePost);
router.put("/:id/like", handleLikeAndDislikePost);
router.get("/timeline/all", handleGetAllTimelinePost);

module.exports = router;
