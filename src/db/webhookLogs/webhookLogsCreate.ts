import prisma from "@db/prisma";

export async function createWebhookLog(requestUrl: string, requestMethod: string, requestParams: string, requestBody: string) {
    const createdWebhookLog = await prisma.webhookLog.create({
        data: { requestUrl, requestMethod, requestParams, requestBody }
    })

    return createdWebhookLog;
}