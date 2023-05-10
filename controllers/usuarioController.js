// Importar el modelo de usuario
import Usuario from '../models/Usuario.js'

// Función para crear un usuario
export const crearUsuario = async (req, res) => {
  try {
    console.log("Creando...");
    // Obtener los datos del usuario desde el cuerpo de la petición
    const { nombre, email, password } = req.body

    // Crear el usuario utilizando el modelo de usuario
    const usuario = await Usuario.create({ nombre, email, password })

    // Enviar una respuesta con el usuario creado
    res.status(201).json(usuario)
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al crear el usuario' })
  }
}
