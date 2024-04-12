import express from "express"
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id",protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage);  // protectRoute insure authentication of /send/:id then move to sendMessage so that no unneccesary user can acces chat app

export default router;