import { PrismaClient } from '.prisma/client'
import {  ctgDto } from '@model/category.dto'


const prisma = new PrismaClient({
    log: [
        { emit: 'stdout', level: 'query' }
    ]
})


//  get "/categories"   =>  get all categories
export const getAllCategories = async () => {
    return prisma.categories.findMany()
};



//  get "/categories/:id"   =>  get one categories by id
export const getCategoryById = async (id: number) => {
    return prisma.categories.findUnique({
        where: {
            id:     id
        }
    })
};


//  post "/categories"  =>  create category
export const createCategory = async (category: ctgDto) => {
    return prisma.categories.create({
        data: {
            name: category.name
        }
    })
};



//  put "/categories/:id"   => update category by id
export const updateCategoryById = async (categoryId: number, category: ctgDto) => {
    return prisma.categories.update({
        data: {
            name:   category.name
        },
        where: {
            id:     categoryId
        }
    })
};



//  delete "/categories/:id"    => delete category by id
export const deleteCategoryById = async (categoryId: number) => {
    return prisma.categories.delete({
        where: {
            id:     categoryId
        }
    })
}