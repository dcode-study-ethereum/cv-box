pragma solidity ^0.4.18;

import "./CVExtender.sol";
import "./lib/Ownable.sol";

contract CVContract is CVExtender, Ownable {

    /**
     * Your functions go here
     *
     * */

    function MyFunction1() {}
    function MyFunction2() {}

    function isOwner() public onlyOwner returns(bool) {
        return true;
    }


    /**
     * Below is for our CV!
     * */
    function getAddress() public view returns(string) {
        return "http://www.example.org";
    }

    function getDescription() public view returns(string) {
        return "This is an example";
    }
    function getTitle() public view returns(string) {
        return "SimpleExample";
    }
    function getAuthor() public view returns(string, string) {
        return ("Thomas", "thomas@example.org");
    }
}
