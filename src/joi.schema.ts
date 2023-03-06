import joi from "joi";


export const idParams = joi.object({
    id: joi.number().min(1).required()
})

export const brandParams = joi.object({
    brand: joi.string().min(1).required()
})

export const categoryParams = joi.object({
    category: joi.string().min(1).required()
})

export const categoryBody = joi.object({
    name: joi.string().min(3).max(20).required()
})

export const productBody = joi.object({
    title: joi.string().min(3).required(),
    description: joi.string().min(3).required(),
    price: joi.string().min(0).required(),
    stock: joi.string().min(0).required(),
    brand: joi.string().min(2).required(),
    category: joi.string().min(2).required()
})
