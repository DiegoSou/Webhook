import prisma from "./prisma"

export async function findAllClientAccounts() 
{
    const allClientAccounts = await prisma.clientAccount.findMany({
        include: {
            engagementHistory: true,
        }
    })

    return allClientAccounts
}

export async function findClientAccountById(accId: String)
{
    const clientAccount = await prisma.clientAccount.findUnique({
        where: { id: Number(accId) },
        include: {
            engagementHistory: true,
        }
    })

    return clientAccount
}
