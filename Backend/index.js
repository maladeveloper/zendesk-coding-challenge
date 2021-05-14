const express = require("express")
var cors = require('cors');
var apiAccess = require("./apiAccess");
var port = require("./sharedVariables").port;


const app = express()
app.use(cors())

app.get("/tickets", async function (req, res) {
  
  var afterUrl = (req.query.afterUrl ? req.query.afterUrl : false)
  var ticketNums = req.query.ticketNums

  var data = await apiAccess.requestTickets(ticketNums, afterUrl)
  res.json(data);

})

// start the server listening for requests
var server = app.listen(process.env.PORT || port, 
	() => console.log(`Server is running...http://localhost:${port}`));

  module.exports = server; 