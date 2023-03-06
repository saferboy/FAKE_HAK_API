import { Request, Response, NextFunction } from "express";
import { getProductsByBrand} from "@service/products.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const brand = req.params.brand

        const brands = await getProductsByBrand(brand)

        if(!brands) {
            return res.status(404).json({
                message: "Brand not found"
            })
        }

        res.json({
            message: "This Brand",
            brand: brands
        })

    } catch (error) {
        next(error)
    }

}


