import{Request, Response, NextFunction} from 'express'
import { createCategory } from '@service/categories.service'


export default async(req: Request, res: Response, next: NextFunction) => {
    try{

        const name = req.body
        
        const category  = await createCategory(name)
    
        return res.status(200).json({
            "message": "Category created",
            category: {
                id: category.id,
                name: category.name,
            }
        })

    }catch(error){
       next(error)
    }
}

