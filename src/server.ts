import { PrismaClient } from '@prisma/client'
import express from 'express'

export const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get(`/clientAccounts/report`, async (req, res) => {  
    try {
        const allClientAccounts = await prisma.clientAccount.findMany({
            include: {
                engagementHistory: true,
            }
        })
        res.json({ data: { allClientAccounts }, success: true })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

app.post(`/clientAccounts/create`, async (req, res) => {
    const { name, description, salesforce_id, engagementHistory } = req.body

    try {
        const createdClientAccount = await prisma.clientAccount.create({
            data: {
                integratedAt: new Date(),
                name: name,
                description: description,
                salesforce_id: salesforce_id,
                engagementHistory: {
                    create: engagementHistory ? engagementHistory : []
                }
            },
            include: {
                engagementHistory: true,
            },
        })
        res.json({ data: { createdClientAccount }, success: true })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

app.post(`/clientAccounts/engagement/register_new`, async (req, res) => {
    const { ownerId, actionDescribe, additionalInfo } = req.body

    try {
        const new_registered_action = await prisma.customerEngagementHistory.create({
            data: {
                ownerId: ownerId,
                actionDescribe: actionDescribe,
                additionalInfo: additionalInfo
            }
        })
        res.json({
            data: { new_registered_action },
            success: true,
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

app.patch(`/clientAccounts/engagement/update`, async (req, res) => {
    const { id, additionalInfo } = req.body

    try {
        const updated_engagement_action = await prisma.customerEngagementHistory.update({
            where: { id: id },
            data: { additionalInfo: additionalInfo }
        })
        res.json({
            data: { updated_engagement_action },
            success: true,
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

export { app }