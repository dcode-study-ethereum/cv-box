import React, {Component} from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import CVContract from '../build/contracts/CVContract.json'

import getWeb3 from './utils/getWeb3'

import './App.css'
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storageValue: 0,
            web3: null,
            address: null,
            description: null,
            title: null,
            author: null
        }
    }

    componentWillMount() {
        // Get network provider and web3 instance.
        // See utils/getWeb3 for more info.

        getWeb3
            .then(results => {
                this.setState({
                    web3: results.web3
                })

                // Instantiate contract once web3 provided.
                this.instantiateContract();
                this.instantiateCVContract();
            })
            .catch(() => {
                console.log('Error finding web3.')
            })
    }

    instantiateContract() {
        /*
         * SMART CONTRACT EXAMPLE
         *
         * Normally these functions would be called in the context of a
         * state management library, but for convenience I've placed them here.
         */

        const contract = require('truffle-contract')
        const simpleStorage = contract(SimpleStorageContract)
        simpleStorage.setProvider(this.state.web3.currentProvider)

        // Declaring this for later so we can chain functions on SimpleStorage.
        var simpleStorageInstance

        // Get accounts.
        this.state.web3.eth.getAccounts((error, accounts) => {
            simpleStorage.deployed().then((instance) => {
                simpleStorageInstance = instance

                // Stores a given value, 5 by default.
                return simpleStorageInstance.set(1, {from: accounts[0]})
            }).then((result) => {
                // Get the value from the contract to prove it worked.
                return simpleStorageInstance.get.call(accounts[0])
            }).then((result) => {
                // Update state with the result.
                return this.setState({storageValue: result.c[0]})
            })
        })
    }

    instantiateCVContract() {
        /*
         * SMART CONTRACT EXAMPLE
         *
         * Normally these functions would be called in the context of a
         * state management library, but for convenience I've placed them here.
         */

        const contract = require('truffle-contract');
        const cvContract = contract(CVContract);
        cvContract.setProvider(this.state.web3.currentProvider);

        // Declaring this for later so we can chain functions on SimpleStorage.

        // Get accounts.
        this.state.web3.eth.getAccounts((error, accounts) => {
            console.log(`error: ${error}\naccounts: ${accounts}`);
            cvContract.deployed().then((instance) => {
                console.log(`deployed: ${instance}`);
                // Get the value from the contract to prove it worked.
                return Promise.all([
                    instance.getAddress.call(),
                    instance.getDescription.call(),
                    instance.getTitle.call(),
                    instance.getAuthor.call()
                    ]
                )
            }).then((result) => {
                // Update state with the result.
                return this.setState({
                    address: result[0],
                    description: result[1],
                    title: result[2],
                    author: result[3]
                })
            })
        })
    }



    render() {
        let state = this.state;
        return (
            <div className="App">
                <AppHeader/>

                <AppMain storageValue={state.storageValue}
                address={state.address}
                description={state.description}
                title={state.title}
                author={state.author}/>
            </div>

        );
    }
}

export default App
