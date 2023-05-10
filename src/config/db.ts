import { Sequelize } from "sequelize";

const db = new Sequelize('database', 'root', '', {
    host: "localhost",
    dialect: 'mysql',
    port: 3306,
    logging: false
}
);
// db.authenticate().then(function () {
//     console.log("success");
// }).catch(function (error) {
//     console.log("error: " + error);
// });

export default db