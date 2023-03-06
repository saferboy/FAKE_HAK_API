import { Router } from "express";


import products from "./products"
import category from "./categories"

const router = Router()

.use('/', products)
.use('/', category)


export default router