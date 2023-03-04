import{ PrismaClient }  from "@prisma/client"


export const client = new PrismaClient({
    // connectionString: process.env.
    log: process.env.DATABASE_URL
})


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

