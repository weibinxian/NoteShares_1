const bcrypt = require('bcrypt-nodejs');

/*
NOT FINAL TABLE FOR Note

*/ 
module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define('note', {
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
        /*
        image:{

        }
        */
       text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    });


    Note.associate = (models) => {
        models.Note.belongsTo(models.User);
      }
    // Note.associate = (models) => {
    //     Note.belongsTo(models.User, { foreignKey: 'userId' });
    //   };
    return Note;
};