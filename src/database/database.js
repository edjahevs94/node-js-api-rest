import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'ddqhccq2983ves', 
    'bsnqiroctpjwnq', 
    '7ad28655fd489969f6ab8b7d2bdee5b3d4c281db1b71b53ad03c9c60055c86b0', 
    {
        host: 'ec2-34-236-94-53.compute-1.amazonaws.com',
        port: '5432',
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          },
      }
    }
  );