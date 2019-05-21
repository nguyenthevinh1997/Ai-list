var contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_taskId",
				"type": "uint256"
			}
		],
		"name": "completeTask",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "saveTask",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			}
		],
		"name": "newTask",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getTaskId",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tasks",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "completed",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]