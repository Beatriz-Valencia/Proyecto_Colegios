const { Tabla } = require("../models");

const TablaController = {
  // GET /tablas
  async getAll(req, res) {
    try {
      const registros = await Tabla.findAll();
      res.json(registros);
    } catch (error) {
      console.error("Error al obtener todos los registros:", error);
      res.status(500).json({ error: "Error al obtener los registros" });
    }
  },

  // GET /tablas/id/:id
  async getById(req, res) {
    const { id } = req.params;
    try {
      const registro = await Tabla.findByPk(id);
      if (!registro) {
        return res.status(404).json({ message: "Registro no encontrado" });
      }
      res.json(registro);
    } catch (error) {
      console.error("Error al buscar por ID:", error);
      res.status(500).json({ error: "Error al obtener el registro por ID" });
    }
  },

  // GET /tablas/byname?nombre=loquesea
  async getByName(req, res) {
    const { nombre } = req.query;
    try {
      const resultados = await Tabla.findAll({
        where: {
          dlibre: nombre 
        }
      });

      if (resultados.length === 0) {
        return res.status(404).json({ message: "No se encontraron coincidencias" });
      }

      res.json(resultados);
    } catch (error) {
      console.error("Error al buscar por nombre:", error);
      res.status(500).json({ error: "Error al buscar por nombre" });
    }
  }
};

module.exports = TablaController;
