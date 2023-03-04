import { Request, Response, NextFunction } from "express";
import { updateProductById } from "@service/products.service";
import { ProductDto } from "@model/products.dto";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id

        const detail: ProductDto = req.body


        const oldProduct = await updateProductById(id, detail)

        if(!oldProduct) {
            return res.status(500).json({
                message: "No product found for this id"
            })
        }


        if (oldProduct == null) {
            return res.status(500).json({
                message: "Please complete all inputs"
            })
        }

        const updated = await updateProductById(id, detail)

      

    } catch (error) {
        next(error)
    }

}