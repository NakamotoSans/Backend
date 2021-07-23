const express = require('express')
const app = express();
const Web3 = require('web3');
const port = 8000;
//functions
var cryptoZombies;

function startApp() {
  var cryptoZombiesAddress = "YOUR_CONTRACT_ADDRESS";
  cryptoZombies = new web3js.eth.Contract(cryptoZombiesABI, cryptoZombiesAddress);
}

// function to insert pickup point
function getPickup(latitude,longitude) {
  $("#txStatus").text("Pushing Pickup location in Blockchain");
  return cryptoZombies.methods.getPickup(latitude,longitude).send({from: web3.eth.accounts[0]})// .send({ from: userAccount })
  .on("receipt", function(receipt) {
  console.log("Successfully inserted Pickup");
  })
  .on("error", function(error) {
    console.log(error);
  });
}

// function to insert drop point
function getDrop(latitude,longitude) {
  $("#txStatus").text("Pushing Drop location in Blockchain");
  return cryptoZombies.methods.getDrop(latitude,longitude).send({from: web3.eth.accounts[0]})
  .on("receipt", function(receipt) {
  console.log("Successfully inserted Drop");
  })
  .on("error", function(error) {
    console.log(error);
  });
}
//function to insert Driver Details
function setDriverDetails(_licenseNo,_vehicleType,_experience) {
  $("#txStatus").text("Pushing Driver Details in Blockchain");
  return cryptoZombies.methods.setDriverDetails(_licenseNo,_vehicleType,_experience).send({from: web3.eth.accounts[0]})
  .on("receipt", function(receipt) {
  console.log("Successfully inserted Driver Details");
  })
  .on("error", function(error) {
    console.log(error);
  });
}

function setUserData(object) {
  $("#txStatus").text("Pushing User Details in Blockchain");
  return cryptoZombies.methods.setDriverDetails(object).send({from: web3.eth.accounts[0]})
  .on("receipt", function(receipt) {
  console.log("Successfully inserted Driver Details");
  })
  .on("error", function(error) {
    console.log(error);
  });
}

// get driver's Availabilty
function getAvailability() {
return cryptoZombies.methods.getAvailability().call();
}

startApp();

//routes 
//GET routes
app.get('/drivers', (req, res) => {
  res.send('Hello World!')
});

app.get('/driversAvailabilty', (req, res) => {
  res.send(getAvailability());
});


//POST routes
app.post('/pickup', (req, res) => {
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  getPickup(latitude,longitude);
  console.log("Inserted Pickup Points in BlockChain");
});

app.post('/drop', (req, res) => {
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  getDrop(latitude,longitude);
  console.log("Inserted Drop Points in BlockChain");
});

app.post('/driverDetails', (req, res) => {
  var licenseNo = req.body.licenseNo;
  var vehicleType = req.body.vehicleType;
  var experience = req.body.experience;
  setDriverDetails(licenseNo,vehicleType,experience);
  console.log("Inserted Driver Details in BlockChain");
});


app.post('/login',(req,res)=>{

  let type=req.body.type;
  setUserData(req.body);
  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});