import express from 'express'
import { crearUsuario } from '../controllers/usuarioController.js'

const router = express.Router()

router.post('/usuarios', crearUsuario)


export default router