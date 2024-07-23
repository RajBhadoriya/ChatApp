<<<<<<< HEAD
import express from "express";
// import { getMessages,sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)
// router.post("/send/:id",protectRoute,sendMessage)

=======
import express from "express";
// import { getMessages,sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)
// router.post("/send/:id",protectRoute,sendMessage)

>>>>>>> origin/main
export default router;