import joi from "joi";


const idParams = joi.object({
    id: joi.number().min(1).required()
})

const brandParams = joi.object({
    brand: joi.string().min(1).required()
})

const categoryParams = joi.object({
    category: joi.string().min(1).required()
})

const categoryBody = joi.object({
    name: joi.string().min(3).max(20).required()
})

const productBody = joi.object({
    title: joi.string().min(3).required(),
    description: joi.string().min(3).required(),
    price: joi.number().min(0).required(),
    stock: joi.number().min(0).integer().required(),
    brand: joi.string().min(2).required(),
    category: joi.string().min(2).required()
})

module.exports = {
    idParams,
    brandParams,
    categoryParams,
    categoryBody,
    productBody
}