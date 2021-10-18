const mongoose = require('mongoose');

const dbConnection = async() => {
    
    try{
        // await mongoose.connect('mongodb://localhost:27017/hospital',{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        await mongoose.connect(process.env.DB_CONN);
        console.log('DB onLine');
    
    }catch(error){
        console.log('error');
        throw new Error('Error al niciar la base de datos');
    }
    
    
}

module.exports = {
    dbConnection
}