import { Router } from 'express'
import { findAllClientAccounts, findClientAccountById } from './clientAccountsReport'
import { createClientAccount } from './clientAccountsCreate'
import { deleteClientAccount } from './clientAccountsDelete'
import { updateClientAccount } from './clientAccountsUpdate'


const router = Router()

router.get(`/clientAccounts/report`, async (req, res) => {  
    try {
        const allClientAccounts = await findAllClientAccounts()

        res.json({ data: { allClientAccounts }, success: true })
    }
    catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

router.get(`/clientAccounts/report/:id`, async (req, res) => {  
    const { id } = req.params
    
    try {
        const clientAccount = await findClientAccountById(id)

        res.json({ data: { clientAccount }, success: true })
    }
    catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

router.post(`/clientAccounts/create`, async (req, res) => {
    const { 
        name, description, integration_flag, integratedAt, salesforce_id, engagementHistory 
    } = req.body

    try {
        const createdClientAccount = await createClientAccount(
            name, description, integration_flag, integratedAt, salesforce_id, engagementHistory 
        )

        res.json({ data: { createdClientAccount }, success: true })
    }
    catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

router.put(`/clientAccounts/update/:id`, async (req, res) => {
    const { id } = req.params
    const { name, description, integration_flag, integratedAt, salesforce_id } = req.body

    try {
        const updatedClientAccount = await updateClientAccount(
            id, name, description, integration_flag, integratedAt, salesforce_id
        )

        res.json({ data: { updatedClientAccount }, success: true })
    }
    catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

router.delete(`/clientAccounts/delete/:id`, async (req, res) => {
    const { id } = req.params

    try {
        const deletedAccount = await deleteClientAccount(id)

        res.json({ data: { deletedAccount }, success: true })     
    }
    catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

export { router as clientAccountsRouter }