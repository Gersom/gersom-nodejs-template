const { DataTypes } = require("sequelize");
const { sequelize } = require("@config/dbConnect/postgresql");
const addMethods = require("./utils/addStaticMethods");

const name = "users";
const config = {
  timestamps: true, // createAt, updateAt
  freezeTableName: true,
};
const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

const UserModel = sequelize.define(name, schema, config);

// Add relationship
// ProvinceModel.hasMany(UserModel);
// UserModel.belongsTo(ProvinceModel);

// add static methods (functions) to model
addMethods(UserModel);

module.exports = UserModel;
