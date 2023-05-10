import express from 'express';
import db from './config/db.js';
import Usuario from './models/Usuario.js';

//Crear la app
const app = express()
app.use(express.json());
// Definir la ruta POST para /usuarios
app.post('/usuarios', async (req, res) => {
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
});

//Hablilitar lectura
app.use(express.urlencoded({ extenden: true }))

try {
    await db.authenticate();
    console.log('Conexión a la base de datos establecida');
    await Usuario.sync();
    console.log('Tabla de usuarios creada en la base de datos');
  } catch (error) {
    console.error('Error creando la tabla:', error);
  }

//Definir el puerto
const port = 3000

app.listen(port, () => {
    console.log("Servidor Funcionando en el puerto", port);
})