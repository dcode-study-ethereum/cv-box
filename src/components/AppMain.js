import React from 'react'

const AppMain = ({storageValue,address,description,title,author,owner}) => (
    <main className="container">
        <div className="pure-g">
            <div className="pure-u-1-1">
                <h1> Simple Storage </h1>
                <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
                <p>The stored value is: {storageValue}</p>
                <hr/>
                <h1> CVContract </h1>
                <p>address: {address}</p>
                <p>description: {description}</p>
                <p>title: {title}</p>
                <p>author: {author}</p>
                <p>owner: {`${owner}`}</p>
            </div>
        </div>
    </main>
);

export default AppMain;
