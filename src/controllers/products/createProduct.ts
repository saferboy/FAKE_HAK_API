import { Request, Response, NextFunction } from "express";
import { createProduct } from "@service/products.service";
import { ProductDto } from "@model/products.dto";


export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data: ProductDto = req.body 

        const product = await createProduct(data)


        return res.status(200).json({
            message: "Product created",
            product: product
            
        })

    } catch (error) {
        next(error)
    }
}