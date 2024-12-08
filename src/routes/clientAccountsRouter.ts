import { Router } from 'express'
import { findAllClientAccounts, findClientAccountById } from '@db/clientAccounts/clientAccountsReport'
import { createClientAccount } from '@db/clientAccounts/clientAccountsCreate'
import { deleteClientAccount } from '@db/clientAccounts/clientAccountsDelete'
import { updateClientAccount } from '@db/clientAccounts/clientAccountsUpdate'


// Define router
const router = Router()

// Client find all
router.get(`/clientAccounts/report`, async (req, res) => {  
    try {
        const allClientAccounts = await findAllClientAccounts()
        res.json({ data: { allClientAccounts }, success: true })
    }
    catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Server error!' })
    }
})

// Client find by id
router.get(`/clientAccounts/report/:id`, async (req, res) => {  
    const { id } = req.params
    
    try {
        const clientAccount = await findClientAccountById(id)
        res.json({ data: { clientAccount }, success: true })
    }
    catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Server error!' })
    }
})

// Client create
router.post(`/clientAccounts/create`, async (req, res) => {
    const { name, description } = req.body

    try {
        const createdClientAccount = await createClientAccount(name, description)
        res.json({ data: { createdClientAccount }, success: true })
    }
    catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Server error!' })
    }
})

// Client update by id
router.put(`/clientAccounts/update/:id`, async (req, res) => {
    const { id } = req.params
    const { name, description } = req.body

    try {
        const updatedClientAccount = await updateClientAccount(id, name, description)
        res.json({ data: { updatedClientAccount }, success: true })
    }
    catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Server error!' })
    }
})

// Client delete
router.delete(`/clientAccounts/delete/:id`, async (req, res) => {
    const { id } = req.params

    try {
        const deletedAccount = await deleteClientAccount(id)
        res.json({ data: { deletedAccount }, success: true })     
    }
    catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Server error!' })
    }
})

export { router as clientAccountsRouter }