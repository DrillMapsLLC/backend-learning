import { DataTypes } from "sequelize";
import db from "../config/db";

export const ProjectModel = db.define("project", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING

        // allowNull defaults to true
    },
    description : {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    clientName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    projectValue: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true,
        allowNull: true
    },
    year: {
        type: DataTypes.INTEGER
    }

}, {
    timestamps: true
})

