module.exports =[
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "int256",
								"name": "latitude",
								"type": "int256"
							},
							{
								"internalType": "int256",
								"name": "longitude",
								"type": "int256"
							}
						],
						"internalType": "struct User.position",
						"name": "pickup",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "int256",
								"name": "latitude",
								"type": "int256"
							},
							{
								"internalType": "int256",
								"name": "longitude",
								"type": "int256"
							}
						],
						"internalType": "struct User.position",
						"name": "drop",
						"type": "tuple"
					},
					{
						"internalType": "bool",
						"name": "isInRequestState",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct User.ride",
				"name": "r",
				"type": "tuple"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bioData",
								"type": "string"
							},
							{
								"internalType": "bool",
								"name": "userType",
								"type": "bool"
							}
						],
						"internalType": "struct User.userData",
						"name": "driver",
						"type": "tuple"
					},
					{
						"internalType": "int256",
						"name": "rating",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "numRatings",
						"type": "int256"
					},
					{
						"internalType": "bool",
						"name": "isAvailable",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "licenseNo",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "vehicleType",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "vehicleModel",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "experience",
						"type": "int256"
					}
				],
				"indexed": false,
				"internalType": "struct Driver.details",
				"name": "info",
				"type": "tuple"
			}
		],
		"name": "AcceptedRide",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bioData",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "userType",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct User.userData",
				"name": "u",
				"type": "tuple"
			}
		],
		"name": "DisplayUserData",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "int256",
								"name": "latitude",
								"type": "int256"
							},
							{
								"internalType": "int256",
								"name": "longitude",
								"type": "int256"
							}
						],
						"internalType": "struct User.position",
						"name": "pickup",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "int256",
								"name": "latitude",
								"type": "int256"
							},
							{
								"internalType": "int256",
								"name": "longitude",
								"type": "int256"
							}
						],
						"internalType": "struct User.position",
						"name": "drop",
						"type": "tuple"
					},
					{
						"internalType": "bool",
						"name": "isInRequestState",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct User.ride",
				"name": "r",
				"type": "tuple"
			}
		],
		"name": "RequestedRide",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			}
		],
		"name": "ShowAvailability",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "int256",
								"name": "latitude",
								"type": "int256"
							},
							{
								"internalType": "int256",
								"name": "longitude",
								"type": "int256"
							}
						],
						"internalType": "struct User.position",
						"name": "pickup",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "int256",
								"name": "latitude",
								"type": "int256"
							},
							{
								"internalType": "int256",
								"name": "longitude",
								"type": "int256"
							}
						],
						"internalType": "struct User.position",
						"name": "drop",
						"type": "tuple"
					},
					{
						"internalType": "bool",
						"name": "isInRequestState",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct User.ride[]",
				"name": "r",
				"type": "tuple[]"
			}
		],
		"name": "ShowCurrentRides",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "int256",
								"name": "latitude",
								"type": "int256"
							},
							{
								"internalType": "int256",
								"name": "longitude",
								"type": "int256"
							}
						],
						"internalType": "struct User.position",
						"name": "pickup",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "int256",
								"name": "latitude",
								"type": "int256"
							},
							{
								"internalType": "int256",
								"name": "longitude",
								"type": "int256"
							}
						],
						"internalType": "struct User.position",
						"name": "drop",
						"type": "tuple"
					},
					{
						"internalType": "bool",
						"name": "isInRequestState",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct User.ride",
				"name": "r",
				"type": "tuple"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "driver",
				"type": "address"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bioData",
								"type": "string"
							},
							{
								"internalType": "bool",
								"name": "userType",
								"type": "bool"
							}
						],
						"internalType": "struct User.userData",
						"name": "driver",
						"type": "tuple"
					},
					{
						"internalType": "int256",
						"name": "rating",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "numRatings",
						"type": "int256"
					},
					{
						"internalType": "bool",
						"name": "isAvailable",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "licenseNo",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "vehicleType",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "vehicleModel",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "experience",
						"type": "int256"
					}
				],
				"indexed": false,
				"internalType": "struct Driver.details",
				"name": "driverInfo",
				"type": "tuple"
			}
		],
		"name": "ViewAccrptedRide",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getAvailability",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurrentRides",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "int256",
								"name": "latitude",
								"type": "int256"
							},
							{
								"internalType": "int256",
								"name": "longitude",
								"type": "int256"
							}
						],
						"internalType": "struct User.position",
						"name": "pickup",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "int256",
								"name": "latitude",
								"type": "int256"
							},
							{
								"internalType": "int256",
								"name": "longitude",
								"type": "int256"
							}
						],
						"internalType": "struct User.position",
						"name": "drop",
						"type": "tuple"
					},
					{
						"internalType": "bool",
						"name": "isInRequestState",
						"type": "bool"
					}
				],
				"internalType": "struct User.ride",
				"name": "_r",
				"type": "tuple"
			},
			{
				"internalType": "bool",
				"name": "_accept",
				"type": "bool"
			}
		],
		"name": "getRide",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "makeAvailable",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "int256",
						"name": "latitude",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "longitude",
						"type": "int256"
					}
				],
				"internalType": "struct User.position",
				"name": "_pickup",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "latitude",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "longitude",
						"type": "int256"
					}
				],
				"internalType": "struct User.position",
				"name": "_drop",
				"type": "tuple"
			}
		],
		"name": "requestRide",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_licenseNo",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_vehicleType",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_experience",
				"type": "int256"
			}
		],
		"name": "setDriverDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bioData",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "userType",
						"type": "bool"
					}
				],
				"internalType": "struct User.userData",
				"name": "_u",
				"type": "tuple"
			}
		],
		"name": "setUserData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "acceptedCustomerIndex",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_driver",
				"type": "address"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bioData",
								"type": "string"
							},
							{
								"internalType": "bool",
								"name": "userType",
								"type": "bool"
							}
						],
						"internalType": "struct User.userData",
						"name": "driver",
						"type": "tuple"
					},
					{
						"internalType": "int256",
						"name": "rating",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "numRatings",
						"type": "int256"
					},
					{
						"internalType": "bool",
						"name": "isAvailable",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "licenseNo",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "vehicleType",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "vehicleModel",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "experience",
						"type": "int256"
					}
				],
				"internalType": "struct Driver.details",
				"name": "_driverInfo",
				"type": "tuple"
			}
		],
		"name": "viewCompletedRideRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "customerHistory",
		"outputs": [
			{
				"components": [
					{
						"internalType": "int256",
						"name": "latitude",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "longitude",
						"type": "int256"
					}
				],
				"internalType": "struct User.position",
				"name": "pickup",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "latitude",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "longitude",
						"type": "int256"
					}
				],
				"internalType": "struct User.position",
				"name": "drop",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "driverDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bioData",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "userType",
						"type": "bool"
					}
				],
				"internalType": "struct User.userData",
				"name": "driver",
				"type": "tuple"
			},
			{
				"internalType": "int256",
				"name": "rating",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "numRatings",
				"type": "int256"
			},
			{
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "licenseNo",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "vehicleType",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "vehicleModel",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "experience",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
