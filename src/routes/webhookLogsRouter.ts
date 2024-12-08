import { Router } from 'express'
import { createWebhookLog } from '@db/webhookLogs/webhookLogsCreate'
import { findAllWebhookLogs } from '@db/webhookLogs/webhookLogsReport'


// Define router
const router = Router()

// Log create
router.use(async (req, res, next) => {
    try {
        if (req.originalUrl != '/logs/report')
            await createWebhookLog(req.originalUrl, req.method, JSON.stringify(req.params), JSON.stringify(req.body))
        next()
    }
    catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Server error!' })
    }
})

// Logs report
router.get(`/logs/report`, async (req, res) => {  
    try {
        const allWebhookLogs = await findAllWebhookLogs()
        res.json({ data: { allWebhookLogs }, success: true })
    }
    catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Server error!' })
    }
})

export { router as webhookLogsRouter }