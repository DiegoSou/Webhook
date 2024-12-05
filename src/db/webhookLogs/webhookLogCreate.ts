import prisma from "src/prisma";

export async function createWebhookLog(
    description: string,
    external_id: string
) {
    const createdWebhookLog = await prisma.webhookLog.create({
        data: {
            description: description,
            external_id: external_id
        }
    })

    return createdWebhookLog;
}