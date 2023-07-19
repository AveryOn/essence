import { Sequelize } from 'sequelize';

const sequelize: Sequelize = new Sequelize('essence', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    timezone: '+03:00',
  })

export default sequelize;