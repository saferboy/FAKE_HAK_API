import { Router } from "express";


import products from "./products"
// import category from "./categories"

const router = Router()

.use('/', products)
// .use('/categories', category)


export default router