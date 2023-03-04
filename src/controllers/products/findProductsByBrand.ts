import { Request, Response, NextFunction } from "express";
import { getProductsByBrand} from "@service/products.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const brand = req.body

        const products = await getProductsByBrand(brand)

        if(!products) {
            return res.status(404).json({
                message: "Brand not found"
            })
        }

        res.json({
            message: "All Brands",
            products: products
        })

    } catch (error) {
        next(error)
    }

}


