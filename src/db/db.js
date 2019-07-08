const mongoose = require('mongoose');

// To connect to database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to database.');
}).catch((e) => {
    console.log('Database connection failed.');
})
// 1 - connection url consist of mongodb url + db name
// 2 - Options and useNewUrlParser is must to include 