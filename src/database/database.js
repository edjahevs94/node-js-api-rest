import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'db-name', 
    'db-user', 
    'user-password', 
    {
      host: 'localhost',
      port: '5432',
      dialect: 'postgres',
     
    }
  );