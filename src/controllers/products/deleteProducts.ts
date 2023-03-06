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

        const deleted = await deleteProductById(id)

        res.status(200).json({
            message: "Product deleted",
            product: {
                id:   deleted.id,
                title: deleted.title,
                description: deleted.description,
                price: deleted.price,
                stock: deleted.stock,
                brand: deleted.brand,
                category: deleted.category
            }
        })

    } catch (error) {
        next(error)
    }

}