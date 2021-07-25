const express = require('express')
const app = express();
const web3 = require('web3');
const port = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

var cryptoZombiesABI = require('./cryptoZombie_abi');

let cryptoZombies;
let account;

function startApp() {

web3js = new web3(web3.currentProvider);

  var cryptoZombiesAddress = "0x47315a6137f926C7c31FB1f20E4fB6D95b7061eF";
  cryptoZombies = new web3js.eth.Contract(cryptoZombiesABI, cryptoZombiesAddress);
  if (web3js.eth.accounts[0] !== account) {
    account = web3js.eth.create();
  }
}


function requestRide(pickup,drop) {
  return cryptoZombies.methods.requestRide(pickup,drop).send({from:account})
  .on("receipt", function(receipt) {
  console.log("Successfully inserted Passenger Details");
  })
  .on("error", function(error) {
    console.log(error);
  });
}

//function to insert Driver Details
function setDriverDetails(_licenseNo,_vehicleType,_experience) {

  return cryptoZombies.methods.setDriverDetails(_licenseNo,_vehicleType,_experience).send({from: account})
  .on("receipt", function(receipt) {
  console.log("Successfully inserted Driver Details");
  })
  .on("error", function(error) {
    console.log(error);
  });
}

function setUserData(object) {

  return cryptoZombies.methods.setDriverDetails(object).send({from:account})
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
  console.log(res.body);
  res.send(getAvailability());
});


//POST routes

app.post('/pickup', (req, res) => {
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  getPickup(latitude,longitude);
  console.log("Inserted Pickup Points in BlockChain");
});

app.post('/requestRide', (req, res) => {
  var pickup = 
  {latitude: req.body.lat1,
   longitude: req.body.long1
  };
  var drop = 
  {latitude: req.body.lat2,
   longitude: req.body.long2
  };
  requestRide(pickup,drop);
  console.log("Inserted Passenger Details in BlockChain");
});

app.post('/driverDetails', (req, res) => {
  res.json({requestBody: req.body})
  var licenseNo = req.body.licenseNo;
  var vehicleType = req.body.vehicleType;
  var experience = req.body.experience;
  console.log(licenseNo , vehicleType , experience);
  setDriverDetails(licenseNo, vehicleType, experience);
  // console.log("Inserted Driver Details in BlockChain");
  console.log(req.body , "Kyu??");

});


app.post('/login',(req,res)=>{
console.log(req.body);
  setUserData(req.body);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

