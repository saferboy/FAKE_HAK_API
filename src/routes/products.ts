import { Router } from "express";
import { idParams, brandParams, categoryParams, productBody } from "../joi.schema"
import {createValidator} from "express-joi-validation"

const validator = createValidator()

import getAllProducts from "../controllers/products/all-products";
import findProductsById from "../controllers/products/findProductsById";
import findProductsByBrand from "../controllers/products/findProductsByBrand";
import findProductsByCategory from "../controllers/products/findProductsByCategory";
import createProduct from "../controllers/products/createProduct";
import updateProducts from "../controllers/products/updateProducts";
import deleteProducts from "../controllers/products/deleteProducts";



const router = Router()

.post('/products', validator.body(productBody), createProduct)
.get('/products',   getAllProducts)
.get('/products/:id',   validator.params(idParams), findProductsById)
.get('/products/brand/:brand',  validator.params(brandParams),  findProductsByBrand)
.get('/products/category/:category', validator.params(categoryParams),  findProductsByCategory)
.put('/products/:id', validator.body(productBody), updateProducts)
.delete('/products/:id', validator.params(idParams), deleteProducts)


export default router