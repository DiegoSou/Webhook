import prisma from "@db/prisma";

export async function deleteClientAccount(id: string)
{
    const clientAccount = await prisma.clientAccount.delete({
        where: { id: Number(id) },
    })

    return clientAccount
}