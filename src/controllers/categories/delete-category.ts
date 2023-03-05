import { deleteCategoryById, getCategoryById } from '@service/categories.service';
import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = +req.params.id

        const find = await getCategoryById(id)
        
        if (!find) {
            return res.status(403).json({
                message: "Category not found this id: " + id
            })
        }

        const category = await deleteCategoryById(id)

        return res.status(200).json({
            message: "Category updated",
            category: {
                id: category.id,
                name: category.name,
            }
        })
    }
    catch(err) {
        next(err)
    }
}