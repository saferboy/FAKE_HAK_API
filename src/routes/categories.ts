import { Router } from "express";
import { idParams, categoryParams, categoryBody } from "../joi.schema"
import {createValidator} from "express-joi-validation"

const validator = createValidator()

import createCategory from "../controllers/categories/create-category";
import allCategories from "../controllers/categories/all-categories";
import findCategory from "../controllers/categories/findCategory";
import updateCategory from "../controllers/categories/update-category";
import deleteCategory from "../controllers/categories/delete-category";


const router = Router()

.post('/categories', validator.body(categoryBody), createCategory)
.get('/categories',  allCategories)
.get('/categories/:id', validator.params(idParams), findCategory)
.put('/categories/:id', validator.params(idParams), updateCategory)
.delete('/categories/:id', validator.params(idParams), deleteCategory)


export default router
