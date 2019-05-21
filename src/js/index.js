function set() {
  console.log("Hi");
  const input = document.getElementById("ai-value").value;
  const taskList = [];
  const list = document.createElement("LI");
  list.className = "list-group-item";
  list.appendChild(document.createTextNode(input)); // Append the text to <li>
  document.getElementById("ai-list").appendChild(list);
  taskList.push(input);
  console.log(taskList);
  list.addEventListener(
    "click",
    function(e) {
      const doneList = e.target;
      doneList.classList.add("done"); //doneList.style.から変更
    },
    false
  );
}
/////////////////
var contract;
var userAccount;
let tasks = [];
async function startApp() {
  var contractAddress = "0x9d07E440f22b7F9A1D44EDB3dC33D7510726259A";
  contract = new web3.eth.Contract(contractABI, contractAddress);
  await web3.eth.getAccounts((error, accounts) => {
    if (accounts[0] !== userAccount) {
      userAccount = accounts[0];
    }
  });
  await getTask();
  showTask();
}

window.addEventListener("load", () => {
  if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log("metamask not found");
  }
  startApp();
});

function saveTask() {
  const input = document.getElementById("ai-value");
  const value = input.value;
  console.log(value);
  if (value == "") {
    window.alert("Aiを入力してください。");
  } else {
    contract.methods
      .saveTask(value)
      .send({ from: userAccount })
      .on("transactionHash", txhash => {
        alert("Txhash: " + txhash);
      })
      .on("receipt", async receipt => {
        console.log(receipt);
        await getTask();
        showTask();
      })
      .on("error", error => {
        console.log(error);
      });
  }
}

async function getTask() {
  tasks = [];
  console.log("Hi");
  await contract.methods
    .getTaskId(userAccount)
    .call()
    .then(async value => {
      for (let i = 0; i < value.length; i++) {
        await contract.methods
          .tasks(value[i])
          .call()
          .then(task => {
            tasks.push({
              id: value[i],
              name: task[0],
              completed: task[1]
            });
          }, false);
      }
    }, false);
}
function showTask() {
  const taskList = document.getElementById("ai-list");
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  for (let i = 0; i < tasks.length; i++) {
    let list = document.createElement("li");
    list.className = "list-group-item";
    list.textContent = tasks[i].name;
    if (tasks[i].completed) {
      list.classList.add("done");
    } else {
      list.addEventListener(
        "click",
        function(e) {
          let taskId = tasks[i].id;
          isComplete(taskId,e);
        },
        false
      );
    }
    taskList.appendChild(list);
  }
}
function isComplete(taskId,e) {
  contract.methods
    .completeTask(taskId)
    .send({ from: userAccount })
    .on("transactionHash", txhash => {
      alert("Txhash: " + txhash);
    })
    .on("receipt", receipt => {
      console.log(receipt);
      const doneList = e.target;
      doneList.classList.add("done"); //doneList.style.から変更
    })
    .on("error", error => {
      console.log(error);
    });
}
