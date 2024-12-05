import { Router } from 'express'
import { createWebhookLog } from '@db/webhookLogs/webhookLogCreate'

// Define router
const router = Router()

// Log create

router.post(`/log`, async (req, res) => {
    const { description, external_id } = req.body

    try {
        const createdLog = await createWebhookLog(description, external_id)
        res.json({ data: { createdLog }, success: true })
    }
    catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Server error!' })
    }
})

export { router as webhookDefaultRouter }