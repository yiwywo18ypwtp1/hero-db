import { Router } from "express";
import * as heroController from "../controllers/heroes.controller.js"
import { upload } from "../middlewares/upload.midlware.js";

const router = Router();

router.get("/", heroController.getHeroList);
router.get("/:id", heroController.getHero);
router.post("/", upload.array("images", 5), heroController.createHero);
router.put("/:id", heroController.updateHero);
router.delete("/:id", heroController.deleteHero);

export default router;