import prisma from "@db/prisma"

export async function createClientAccount(
    name: string,
    description: string,
    integration_flag: boolean, 
    integratedAt: Date,
    salesforce_id: string
)
{
    const createdClientAccount = await prisma.clientAccount.create({
        data: {
            integratedAt: integratedAt,
            name: name,
            description: description,
            integration_flag: integration_flag,
            salesforce_id: salesforce_id
        }
    })

    return createdClientAccount
}
