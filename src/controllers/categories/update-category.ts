import { Request, Response, NextFunction } from "express"
import { updateCategoryById, getCategoryById } from "@service/categories.service"
import { ctgDto } from "@model/category.dto"

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.id

        const find = await getCategoryById(id)

        if (!find) {
            return res.status(403).json({
                message: "Category not found this id: " + id
            })
        }

        const data: ctgDto = req.body

        const category = await updateCategoryById(id, data)

        return res.status(200).json({
            message: "Category updated",
            category: {
                id: category.id,
                name: category.name
            }
        })


    } catch (error) {
        next(error)
    }

}