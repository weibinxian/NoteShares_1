const Sequelize = require('sequelize')
/*
NOT FINAL TABLE FOR comment

*/ 
module.exports = (sequelize, DataTypes) => {
    const Comment1 = sequelize.define('comment', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            },
        },
       text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
        
    },
    });

    Comment1.associate = (models) => {
        models.Comment.belongsTo(models.Note
        );
      }
    return Comment1;
};