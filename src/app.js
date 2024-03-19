import express from 'express'
import { pool } from './db.js'
import { PORT } from './config.js'
var cors = require('cors')
const app = express()
<<<<<<< HEAD

app.use(express.json());
app.use(cors())
=======
app.use(express.json());
app.use(cors()); 
>>>>>>> 48bb2c9d5531699a18e10baa1de8248c26fc2d49
//mostrar datos de estado edificio
app.get('/estadoedificio', async (req, res) => {
  try {
    const [data] = await pool.query('SELECT * FROM estadoedificio');
    res.status(200).json({ message: 'Se encontraron datos', status: '200',data });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la disponibilidad', status: '500' });
  }
})

//mostrar datos de estado salas de estudio
app.get('/salasEstudio', async (req, res) => {
  try {
    const [data] = await pool.query('SELECT * FROM salas_estudio');
    res.status(200).json({ message: 'Se encontraron datos', status: '200',data });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la disponibilidad', status: '500' });
  }
})

//actualizar sala de estudio por id
app.put('/salasEstudio/:id', async (req, res) => {
  const id = req.params.id;
  const disponibilidad = req.body.disponibilidad;
  console.log(id, disponibilidad);

  try {
    await pool.query('UPDATE salas_estudio SET disponibilidad = ? WHERE id = ?', [disponibilidad, id]);
    res.status(200).json({ message: 'Disponibilidad actualizada correctamente', status: '200' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la disponibilidad', status: '500' });
  }
});

//actualizar estado de edificio por id
app.put('/estadoedificio/actualizar', async (req, res) => {
  const id = 1;
  const estado = req.body.estado;
  console.log(id, estado);
  try {
    await pool.query("UPDATE estadoedificio SET estado = ? WHERE id = ?", [estado, id]);
    res.status(200).json({ message: 'Disponibilidad actualizada correctamente', status: '200' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la disponibilidad', status: '500' });
  }
});

//mostrar datos de estado sala de estudio por id
app.get('/salasEstudio/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const [data] = await pool.query('SELECT * FROM salas_estudio WHERE id = ?', [id])
    res.status(200).json({ message: 'Se encontro datos', data, status: '200' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la disponibilidad', status: '500' });
  }
})
app.listen(PORT)
console.log('Server on port', PORT)
