module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      login: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "normal",
      },
      regDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      lastLogin: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    });
      return Users
};