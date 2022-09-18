const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/hrmData";
var _db;
module.exports = {
    connectToserver: (callback) => {
        MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},(err, client) => {
            if (err) throw err;
            _db = client.db("hrmData");
            console.log("DB Conn Success");
            return callback(err);
        });
    },
    getDb:() =>{
        return _db; 
    }
};

