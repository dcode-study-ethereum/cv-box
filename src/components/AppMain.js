import React from 'react'

const AppMain = ({storageValue,address,description,title,author}) => (
    <main className="container">
        <div className="pure-g">
            <div className="pure-u-1-1">
                <h1>Good to Go!</h1>
                <p>Your Truffle Box is installed and ready.</p>
                <h2>Smart Contract Example</h2>
                <p>If your contracts compiled and migrated successfully, below will show a stored value of 5
                    (by default).</p>
                <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
                <p>The stored value is: {storageValue}</p>
                <p>address: {address}</p>
                <p>description: {description}</p>
                <p>title: {title}</p>
                <p>author: {author}</p>
            </div>
        </div>
    </main>
);

export default AppMain;
