import prisma from "@db/prisma"

export async function findAllWebhookLogs() 
{
    return await prisma.webhookLog.findMany()
}
