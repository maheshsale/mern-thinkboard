import express from 'express'
import { createNote, deleteNote, getAllNotes, updateNote } from '../controllers/notesController.js'

const notesRoutes = express.Router()

notesRoutes.get('/', getAllNotes)

notesRoutes.post('/', createNote)

notesRoutes.put('/:id', updateNote)

notesRoutes.delete('/:id', deleteNote)


export default notesRoutes