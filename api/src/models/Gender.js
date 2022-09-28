const { DataTypes,Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("gender", {
        id:{
            type:DataTypes.UUID,
            primaryKey: true,
            allowNull:false,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type:DataTypes.STRING,
        }
    },{
        timestamps:false    
    })
}
