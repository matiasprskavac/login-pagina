const express = require("express");
const cors = require("cors");
const app = express();
const db = require('./db');
const authRoutes = require("./routes/auth");
const nodemailer = require('nodemailer');
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

const PORT = process.env.PORT || 3001;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.post('/api/contacto', async (req, res) => {
    const { name, phone, email } = req.body;

    try {
        await transporter.sendMail({
            from: '"Contacto Web" <matiasprskavac@gmail.com>', 
            to: 'matiasprskavac@gmail.com',
            subject: 'Contacto web',
            html: `
                <h2>Nuevo Mensaje de Contacto</h2>
                <p>Nombre: ${name}</p>
                <p>Teléfono: ${phone}</p>
                <p>Email: ${email}</p>
            `
        });
        res.json({ message: 'Correo enviado correctamente' });

    } catch (error) {
        console.error('Error al enviar correo:', error);
        res.status(500).json({ message: 'Error al enviar el correo' });
    }
});

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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});