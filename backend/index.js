const express = require("express");
const cors = require("cors");
const app = express();
const db = require('./db');
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.post('/api/promociones', async (req, res) => {
    const { titulo, descripcion, nivel_usuario, puntos_minimos, activa } = req.body;

    try {
        const sql = `
      INSERT INTO promociones (titulo, descripcion, nivel_usuario, puntos_minimos, activa)
      VALUES (?, ?, ?, ?, ?)
    `;

        await db.query(sql, [titulo, descripcion, nivel_usuario, puntos_minimos, activa]);

        res.json({ message: 'Promocion agregada con exito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar la promocion' });
    }
});

app.get('/api/promociones', async (req, res) => {
    try {
        const promociones = await db.query("SELECT * FROM promociones");
        res.json(promociones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener promociones' });
    }
});

app.put('/api/promociones/:id', async (req, res) => {
    const { id } = req.params;
    const { activa } = req.body;

    try {
        const sql = `
        UPDATE promociones
        SET activa = ?
        WHERE id = ?
      `;

        const result = await db.query(sql, [activa, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Promocion no encontrada' });
        }

        res.json({ message: `Promoción ${activa ? 'activada' : 'desactivada'} con exito` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el estado de la promocion' });
    }
});

app.delete('/api/promociones/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const sql = `DELETE FROM promociones WHERE id = ?`;
        await db.query(sql, [id]);

        res.json({ message: 'Promocion eliminada con exito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la promocion' });
    }
});

app.listen(3001, () => {
    console.log("Servidor corriendo en http://localhost:3001");
});