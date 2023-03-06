import { Request, Response, NextFunction } from "express";
import { updateProductById, getProductsById } from "@service/products.service";
import { ProductDto } from "@model/products.dto";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.id

        const detail: ProductDto = req.body


        const oldProduct = await getProductsById(id)

        if (!oldProduct) {
            return res.status(500).json({
                message: "No product found for this id"
            })
        }

        
        const updated = await updateProductById(id, detail)
        
        // if(updated) {
        //     return res.status(500).json({
        //         message: "Product alredy updated"
        //     })
        // }
        
        return res.status(200).json({
            message: "product updated",
            category: {
                id: updated.id,
                title: updated.title,
                description: updated.description,
                price: updated.price,
                stock: updated.stock,
                brand: updated.brand,
                category: updated.category
            }
        })
        
        
        
    } catch (error) {
        next(error)
    }

}