const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {   // MONGO_URI = mongodb://localhost:27017/DB_NAME
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connection successfull!');
}).catch((e) => {
    console.log('Connection failed!');
})