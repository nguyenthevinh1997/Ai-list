pragma solidity ^0.5.0;

contract AIList {
    struct Task{
        string name;
        bool completed;
    }
    event newTask(uint id, string name, bool completed);
    Task[] public tasks;
    function saveTask(string memory _name, bool _completed) public {
        uint id = tasks.push(Task(_name, _completed))-1;
        // ...taskToOwnerへの処理。
        // ...ownerTaskCounterへの処理。
        emit newTask(id, _name, _completed);
    }
    mapping (uint => address) taskToOwner;
    mapping (address => uint) ownerTaskCounter;
    function getTaskId(address _owner) public view returns(uint[] memory){
        uint[] memory result = ;
　　　　 return result;
    }
    function completeTask(uint _taskId) public {
        require(msg.sender == taskToOwner[_taskId]);
    }

}