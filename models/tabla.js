module.exports = (sequelize, DataTypes) => {
  const Tabla = sequelize.define("Tabla", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false
    },
    Geo_Point: {
      type: DataTypes.TEXT
    },
    municipio_: {
      type: DataTypes.TEXT
    },
    dlibre: {
      type: DataTypes.TEXT
    },
    dgenerica_: {
      type: DataTypes.TEXT
    },
    regimen: {
      type: DataTypes.TEXT
    },
    direccion: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: "mitabla",    // Muy importante el nombre real de la tabla sino no conecta y se vuelve loco
    timestamps: false        
  });

  return Tabla;
};
