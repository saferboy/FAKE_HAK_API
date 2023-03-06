import { Request, Response, NextFunction } from "express";
import { getProductsByCategory} from "@service/products.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const categoryName = req.params.category

        const find = await getProductsByCategory(categoryName)

        if(!find) {
            return res.status(404).json({
                message: "Product not found this category"
            })
        }

        return res.status(200).json({
            message: "Category found",
            category: find
        })
       

    } catch (error) {
        next(error)
    }

}



