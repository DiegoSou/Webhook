import prisma from "@db/prisma"

export async function createClientAccount(
    name: string,
    description: string
)
{
    const createdClientAccount = await prisma.clientAccount.create({
        data: {
            name: name,
            description: description
        }
    })

    return createdClientAccount
}
