
module.exports = (sequelize, DataTypes) => {
  const Tabla = sequelize.define("Tabla", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return Tabla;
};
