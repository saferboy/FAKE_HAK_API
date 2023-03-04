import { Router } from "express";
const router = Router()

// versions
import api from "./api"

// routes
router.use('/', api)

export default router