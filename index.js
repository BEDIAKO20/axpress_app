const express = require("express")

const app = express();

const route = require("./routes/routes")

app.use ('/', route)  


app.listen(5001,() =>{
    console.log('server is running on port 3002')
});
