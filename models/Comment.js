const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {

}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5],
            }
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [18],
            },
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: `user`,
                key: `id`,
            },
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: `post`,
                key: `id`,
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;