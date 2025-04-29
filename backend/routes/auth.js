const express = require("express");
const router = express.Router();
const db = require("../db");
const md5 = require("md5");

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Faltan datos" });
    }

    try {
        const result = await db.query(
            "SELECT * FROM admins WHERE username = ? AND password = ?",
            [username, md5(password)]
        );

        if (result.length > 0) {
            res.json({ message: "Login exitoso", success: true });
        } else {
            res.status(401).json({ message: "Credenciales incorrectas", success: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error del servidor" });
    }
});

module.exports = router;