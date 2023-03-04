import { getProductsById } from "@service/products.service";
import { Request, Response, NextFunction } from "express";


export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const id = +req.params.id

        const find = await getProductsById(id)

        if (!find) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        return res.status(200).json({
            message: "Your Product",
            product: find
        })

    } catch (error) {
        next(error)
    }
}