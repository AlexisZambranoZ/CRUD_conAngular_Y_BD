/* // Importar el modelo de usuario
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

export const obtenerUsuarios = async (req, res) => {
  try {
    // Obtener todos los usuarios utilizando el modelo de usuario
    const usuarios = await Usuario.find()

    // Enviar una respuesta con todos los usuarios
    res.status(200).json(usuarios)
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al obtener los usuarios' })
  }
}

export const actualizarUsuario = async (req, res) => {
  try {
    // Obtener el ID del usuario desde los parámetros de la URL
    const { id } = req.params

    // Buscar el usuario utilizando el modelo de usuario y el ID proporcionado
    let usuario = await Usuario.findById(id)

    // Si el usuario no existe, enviar una respuesta 404
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }

    // Actualizar el usuario utilizando los datos del cuerpo de la petición
    usuario.nombre = req.body.nombre || usuario.nombre
    usuario.email = req.body.email || usuario.email
    usuario.password = req.body.password || usuario.password

    // Guardar los cambios en la base de datos
    usuario = await usuario.save()

    // Enviar una respuesta con el usuario actualizado
    res.status(200).json(usuario)
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al actualizar el usuario' })
  }

}

export const eliminarUsuario = async (req, res) => {
  try {
    // Obtener el ID del usuario desde los parámetros de la URL
    const { id } = req.params

    // Buscar el usuario utilizando el modelo de usuario y el ID proporcionado
    const usuario = await Usuario.findById(id)

    // Si el usuario no existe, enviar una respuesta 404
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }

    // Eliminar el usuario de la base de datos
    await usuario.remove()

    // Enviar una respuesta con un mensaje de éxito
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al eliminar el usuario' })
  }
}


 */