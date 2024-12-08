import prisma from "@db/prisma"

export async function updateClientAccount(
    id: string,
    name: string,
    description: string
)
{
    const updatedClientAccount = await prisma.clientAccount.update({
        where: { id: Number(id) },
        data: {
            name: name,
            description: description
        }
    })

    return updatedClientAccount
}
