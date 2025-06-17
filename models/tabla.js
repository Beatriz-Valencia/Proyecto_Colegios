
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Tabla", {


    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,       // Clave primaria
      autoIncrement: true,    // Se incrementa automáticamente
      allowNull: false,
    },
    Geo_Point:{ 
      type:DataTypes.STRING,
      allowNull: false
    },
    municipio_: {
      type:DataTypes.STRING,
      allowNull: false
    },
    dlibre: {
        type:DataTypes.STRING,
        allowNull: false
    },
    dgenerica_: {
        type:DataTypes.STRING,
        allowNull: false
    },
    regimen: {
        type:DataTypes.STRING,
        allowNull: false
    },
    direccion:{
        type:DataTypes.STRING,
        allowNull: false
    }



  });



  return Tabla;
};
