import { Request, Response, NextFunction } from "express";
import { getAllCategories } from "@service/categories.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const details = await getAllCategories()

        const mapped = details.map(detail => {
            return {
                id:     detail.id,
                name:   detail.name
            }
        })

        res.status(200).json({
            message: "All Categories",
            category: mapped
        })
        
    } catch (error) {
        next(error)
    }

}
