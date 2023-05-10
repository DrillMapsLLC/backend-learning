import { DataTypes } from "sequelize";
import db from "../config/db";
// import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize'
// class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
//     id: CreationOptional<number>;
//     name: string;
//     age: number;
//     department?: "frontend" | "backend" | "marketing"| "graphics" | "intern";
//     status?: string;
//     createdAt: string;
//     updatedAt: string;
//     createdBy: number;
//     updatedBy: number
// }

export const UserModel = db.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING

        // allowNull defaults to true
    },
    age: {
        type: DataTypes.INTEGER
        // allowNull defaults to true
    },
    department: {
        type: DataTypes.ENUM,
        values: ["frontend", "backend", "marketing", "graphics", "intern"],
        defaultValue : "intern",
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM,
        values: ['active', 'inactive', 'retired'],
        // allowNull defaults to true,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    createdBy: {
        type: DataTypes.FLOAT
    },
    updatedBy: {
        type: DataTypes.FLOAT
    }


}, {
    timestamps: true
})

