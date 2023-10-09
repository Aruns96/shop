const Sequelize = require("sequelize");

const sequelize = require("../utils/database");


const Item = sequelize.define("item",{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:Sequelize.STRING
  },
  desc:{
    type:Sequelize.STRING,
    allowNull:false,
    
  },
  price:{
    type:Sequelize.STRING,
    allowNull:false,
    
  },
  qty:{
    type:Sequelize.INTEGER,
    allowNull:false
  }
  
})

module.exports = Item;