import { PrismaClient } from ".prisma/client"
import { ProductDto } from '@model/products.dto'

// { emit: 'stdout', level: 'query' },
//      *  { emit: 'stdout', level: 'info' },
//      *  { emit: 'stdout', level: 'warn' }
//      *  { emit: 'stdout', level: 'error' }

const prisma = new PrismaClient({
    log: [
        { emit: 'stdout', level: 'query' }
    ]
})

//  get '/' => all products
export const getAllProducts = async () => {
    return prisma.products.findMany()
};



//  get '/products/:id' => get one products by id 
export const getProductsById = async (productId: number) => {
    return prisma.products.findUnique({
        where: {
            id: productId
        }
    })
};


// get '/products/brand/brand/:brand' => get products by brand
export const getProductsByBrand = async (brand: string) => {
    return prisma.products.findMany({
        where: {
            brand
        }
    })
};


// get '/products/category/:category' => get products by category
export const getProductsByCategory = async (category: string) => {
    return prisma.products.findMany({
        where: {
            category
        }
    })
};


//  post '/products' => create products
export const createProduct = async (product: ProductDto) => {
    return prisma.products.create({
        data: {
            title:          product.title,
            description:    product.description,
            price:          product.price,
            stock:          product.stock,
            brand:          product.brand,
            category:       product.category
        }
    })
};


//  put '/products/:id' => update products by id
export const updateProductById = async (id: number, product: ProductDto) => {
    return prisma.products.update({
        data: {
            title:          product.title,
            description:    product.description,
            price:          product.price,
            stock:          product.stock,
            brand:          product.brand,
            category:       product.category
        },
        where: {
            id:     id
        }
    })
};



//  delete '/products:id' => delete products by id
export const deleteProductById = async (id: number) => {
    return prisma.products.delete({
        where: {
            id:     id
        }
    })
}


