import prisma from "src/prisma"

export async function updateClientAccount(
    id: string,
    name: string,
    description: string,
    integration_flag: boolean, 
    integratedAt: Date,
    salesforce_id: string,
)
{
    const updatedClientAccount = await prisma.clientAccount.update({
        where: { id: Number(id) },
        data: {
            integratedAt: integratedAt,
            name: name,
            description: description,
            integration_flag: integration_flag,
            salesforce_id: salesforce_id
        }
    })

    return updatedClientAccount
}
