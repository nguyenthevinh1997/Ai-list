pragma solidity ^0.5.0;

contract AIList {
    struct Task{
        string name;
        bool completed;
    }
    event newTask(uint id, string name);
    Task[] public tasks;
    mapping (uint => address) taskToOwner;
    mapping (address => uint) ownerTaskCounter;
    function saveTask(string memory _name) public {
        uint id = tasks.push(Task(_name, false))-1;
        // ...taskToOwnerへの処理。
        // ...ownerTaskCounterへの処理。
        taskToOwner[id] = msg.sender;
        ownerTaskCounter[msg.sender]++;
        emit newTask(id, _name);
    }
    function getTaskId(address _owner) public view returns(uint[] memory){
        uint[] memory result = new uint[](ownerTaskCounter[_owner]);
        uint counter = 0;
        for (uint i = 0; i < tasks.length; i++) {
            if (taskToOwner[i] == _owner) {
            result[counter] = i;
            counter++;
            }
        }
        return result;
    }
    function completeTask(uint _taskId) public {
        require(msg.sender == taskToOwner[_taskId],"Check ID");
        tasks[_taskId].completed = true;
    }

}