import { Request, Response, NextFunction } from "express";
import { deleteProductById, getProductsById } from "@service/products.service";

export default async (req: Request, res: Response, next: NextFunction) => {
      
    try {
        
        const id = +req.params.id   

        const oldProduct = await getProductsById(id)


        if (!oldProduct) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        await deleteProductById(id)

        res.status(200).json({
            message: "Product deleted"
        })

    } catch (error) {
        
    }

}