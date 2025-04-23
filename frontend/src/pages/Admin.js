import AdminHeader from "../components/layout/AdminHeader";
import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nivelUsuario, setNivelUsuario] = useState("");
  const [puntosMinimos, setPuntosMinimos] = useState("");
  const [activa, setActiva] = useState(true);
  const [error, setError] = useState("");

  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/promociones");
        const data = await res.json();
        setPromos(data); 
      } catch (err) {
        console.error("Error cargando promociones:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPromos();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    const promocion = {
      titulo,
      descripcion,
      nivel_usuario: nivelUsuario,
      puntos_minimos: puntosMinimos,
      activa
    };

    try {
      const res = await fetch("http://localhost:3001/api/promociones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(promocion)
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      alert(result.message);

      setTitulo("");
      setDescripcion("");
      setNivelUsuario("");
      setPuntosMinimos("");
      setActiva(true);
      setError("");

      const updated = await fetch("http://localhost:3001/api/promociones");
      setPromos(await updated.json());
    } catch (err) {
      setError("Error al agregar promoción: " + err.message);
    }
  };

  const toggleActive = async (id, activa) => {
    try {
      const updatedPromo = { activa: !activa };
      const res = await fetch(`http://localhost:3001/api/promociones/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPromo)
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      const updatedPromos = promos.map(p => (p.id === id ? { ...p, activa: !activa } : p));
      setPromos(updatedPromos);
    } catch (err) {
      setError("Error al cambiar estado de la promoción: " + err.message);
    }
  };

  const deletePromotion = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/api/promociones/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      const updatedPromos = promos.filter(p => p.id !== id);
      setPromos(updatedPromos);

      alert("Promoción eliminada con éxito.");
    } catch (err) {
      setError("Error al eliminar la promoción: " + err.message);
    }
  };

  return (
    <div className="container">
      <AdminHeader />
      <div className="main-admin">
        <h1>Add Promotion</h1>
        <form className="form-admin" onSubmit={handleSubmit} style={{ marginBottom: 40 }}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={descripcion}
              onChange={e => setDescripcion(e.target.value)}
              required
            />
          </div>
          <div>
            <label>User level</label>
            <input
              type="text"
              value={nivelUsuario}
              onChange={e => setNivelUsuario(e.target.value)}
            />
          </div>
          <div>
            <label>Min. Points</label>
            <input
              type="number"
              value={puntosMinimos}
              onChange={e => setPuntosMinimos(e.target.value)}
            />
          </div>
          <div>
            <label>Active</label>
            <input
              type="checkbox"
              checked={activa}
              onChange={() => setActiva(!activa)}
            />
          </div>
          <button type="submit">Add Promotion</button>
        </form>

        {error && <p>{error}</p>}

        <h1>Promotions</h1>

        {loading ? (
          <p>Cargando promociones...</p>
        ) : promos.length === 0 ? (
          <p>No hay promociones.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Level</th>
                <th>Min. Points</th>
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {promos.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.titulo}</td>
                  <td>{p.descripcion}</td>
                  <td>{p.nivel_usuario || "—"}</td>
                  <td>{p.puntos_minimos}</td>
                  <td>{p.activa ? "Yes" : "No"}</td>
                  <td>
                    <button className="activate" onClick={() => toggleActive(p.id, p.activa)}>
                      {p.activa ? "Deactivate" : "Activate"}
                    </button>
                    <button className="delete" onClick={() => deletePromotion(p.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;