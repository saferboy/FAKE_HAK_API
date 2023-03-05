import { Request, Response, NextFunction } from "express"
import { getCategoryById } from "@service/categories.service"



export default async(req: Request, res: Response, next: NextFunction) => {

    try{

        const id = +req.params.id

        const category = await getCategoryById(id)

        if(!category){
            return res.status(500).json({
                message: "There's no category with this id"
            })
        }

        return res.status(200).json({
            message: "Category found",
            category: category
        })


    }catch(error){
        next(error)
    }
}