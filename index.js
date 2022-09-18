const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3001;
const dbconn = require("./db/conn");


dbconn.connectToserver(function (err) {
    console.log(':: Db Connection successful! ::');
    app.use("/", require('./router/user'));
});

app.use(express.static(path.join(__dirname,'client/build')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})



app.listen(port, () => {
    console.log(`port is listen ${port}`);
})
