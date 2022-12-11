const MongoClient= require('mongodb').MongoClient;
const assert=require('assert');

// Connection URL
const url='mongodb://localhost:3000';
//database Name
const dbName='drinkDB';
//Create a new MongoClient
const client= new MongoClient(url);
//Use connect method to connect to the server
client.connect(function(err){
    assert.equal(null,err);
    console.log("Connected successfully to server");

    const db=client.db(dbName);

    //Get the drinks collection
    const collection=db.collection('drinks');
    
    //Find all documnets in the collection
    collection.find({}).toArray(function(err,docs){
        assert.equal(err,null);
        console.log("Found the following records");
        console.log(docs)
        client.close();
    });
})



//To interact with a frontend, use the Express web framework for Node.sj to create routes
//That the frontend can make requests to.
const express=require('express');
const app=express();

//Get the list of drinks
app.get('/drinks',function(req,res){
    const collection=db.collection('drinks');

    //Find all documments in the collection
    collection.find({}).toArray(function(err,docs){
        assert.equal(err,null);
        res.json(docs);
    });
});

// Start the server
app.listen(3000,function(){
    console.log('Server listening on port 3000');
});


// With this route, the frontend can make a GET request to 
// 'http://localhost:3000/drinks' to get the list of drinks

// use a frontend frmaework like React to create a user interface

import React from 'react';
import axios from 'axios';
import { response } from 'express';

class DrinkList extends React.Component{
    state={
        drinks:[],
    }

    componentDidMount(){
        //Make a Get request to get the list of drinks
        axios.get('http://localhost:3000/drinks')
        .then(response=>{
            this.state({

                drinks:response.data,
            });
        })
        .catch(error=>{
            //Handle any errors
            console.log(error);
        })
    }

    render(){
        const {drinks}=this.state;

        return(
            <div>
                {drinks.map(drink=>(
                    <div key={drink._id}>
                        <h3>{drink.name}</h3>
                        <p>{drink.description}</p>
                        <p>{drink.price}</p>
                    </div>
                ))}
            </div>
        )
    }
}

/**
 * backend: client.
 * 
 * route:   http://localhost:3000/drinks
 * 
 * 
 * frontend: react: axios
 * render
 * 
 * 
 * 
 * 
 * 
*/
