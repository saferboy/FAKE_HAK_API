import{ PrismaClient }  from "@prisma/client"


export const client = new PrismaClient()


async function connect() {
    try{
        await client.$connect()
        console.log("Connected database")
    }
    catch(err) {
        console.error("Cannot connect to Database", err)
    }
}

connect()

