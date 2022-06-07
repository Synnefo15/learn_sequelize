const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig',{
    title:{
        type:Sequelize.STRING
    },
    tech:{
        type:Sequelize.STRING
    },
    budget:{
        type:Sequelize.STRING
    },
    desc:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
})

module.exports = Gig