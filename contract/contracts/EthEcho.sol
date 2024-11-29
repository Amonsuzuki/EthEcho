// SPDX-License-Identifier: MIT

pragma solidity ^0.8.27;

import "hardhat/console.sol";

contract EthEcho {

    uint256 private _totalEchoes;
    event NewEcho(address indexed from, uint256 timestamp, string message);

    struct Echo {
        address echoer;
        string message;
        uint256 timestamp;
    }

    Echo private _latestEcho;

    constructor() {
        console.log("Here is my first smart contract!");
    }

    function writeEcho(string memory _message) public {
        _totalEchoes += 1;
        console.log("%s echoed w/ message %s", msg.sender, _message);
        _latestEcho = Echo(msg.sender, _message, block.timestamp);
        emit NewEcho(msg.sender, block.timestamp, _message);
    }

    function getLatestEcho() public view returns (Echo memory) {
        return _latestEcho;
    }

    function getTotalEchoes() public view returns (uint256) {
        console.log("We have %d total echoes!", _totalEchoes);
        return _totalEchoes;
    }
}