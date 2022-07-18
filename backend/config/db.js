const mongoose = require('mongoose');

// arror funct with try / catch block
const connectDB = async () => {
    try {
        // wait for conn to mongoose db
    const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected Succesfully: ${conn.connection.host}`.rainbow);
} catch (error) {
    console.log(error);
    // if no conn print to terminal the error message
        console.log(error);
        // if no conn stop/exit the connection
        process.exit(1);
    }
}

// export the module to use in other files
module.exports = connectDB;