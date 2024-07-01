import express from 'express'
import { clientAccountsRouter } from './clientAccountsRouter'


const app = express()

app.use(clientAccountsRouter)

export { app }

// app.post(`/clientAccounts/engagement/register_new`, async (req, res) => {
//     const { ownerId, actionDescribe, additionalInfo } = req.body

//     try {
//         const new_registered_action = await prisma.customerEngagementHistory.create({
//             data: {
//                 ownerId: ownerId,
//                 actionDescribe: actionDescribe,
//                 additionalInfo: additionalInfo
//             }
//         })
//         res.json({
//             data: { new_registered_action },
//             success: true,
//         })
//     } catch (e) {
//         console.error(e)
//         res.status(500).json({
//             error: 'Server error!',
//         })
//     }
// })

// app.patch(`/clientAccounts/engagement/update`, async (req, res) => {
//     const { id, additionalInfo } = req.body

//     try {
//         const updated_engagement_action = await prisma.customerEngagementHistory.update({
//             where: { id: id },
//             data: { additionalInfo: additionalInfo }
//         })
//         res.json({
//             data: { updated_engagement_action },
//             success: true,
//         })
//     } catch (e) {
//         console.error(e)
//         res.status(500).json({
//             error: 'Server error!',
//         })
//     }
// })
