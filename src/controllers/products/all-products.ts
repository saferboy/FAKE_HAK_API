import { Request, Response, NextFunction } from "express";
import { getAllProducts } from "@service/products.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const products = await getAllProducts()

        const mapped = products.map(product => {
            return {
                id:             product.id,
                title:          product.title,
                description:    product.description,
                price:          product.price,
                brand:          product.brand,
                category:       product.category
            }
        })
        res.json({
            message: "All Products",
            products: mapped
        })

    } catch (error) {
        next(error)
    }

}


