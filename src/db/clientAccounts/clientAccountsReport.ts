import prisma from "src/prisma"

export async function findAllClientAccounts() 
{
    return await prisma.clientAccount.findMany()
}

export async function findClientAccountById(accId: String)
{
    return await prisma.clientAccount.findUnique({
        where: { id: Number(accId) }
    })
}
