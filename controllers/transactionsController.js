const express = require("express");

const transactions = express.Router();

const transactionsData = require("../models/transaction");


transactions.get("/", (req, res) => {
    
    console.log("Sending all transactions data...")
   
    res.json(transactionsData);
})


transactions.get("/:index", (req, res) => {
    const { index } = req.params;
    console.log(`SHOWING INDEX #${index}`)
    if (transactionsData[index]) {
        res.status(200).json(transactionsData[index])
    } else {
        res.redirect(302, `/9001`)
    }
})

transactions.post("/", (req, res) => {
    console.log("post route was hit!@#@!#!");
    console.transaction(req.body)
    transactionsData.push(req.body);
    res.status(200).json( {status: "OK", payload: transactionsData[transactionsData.length - 1]} )
})



transactions.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (transactionsData[arrayIndex]){
        const deletedtransaction = transactionsData.splice(arrayIndex, 1)
        res.status(200).json(deletedtransaction[0])
    }else{
        res.status(404).json({errror: "Could not locate transaction to be deleted!"})
    }  
})

transactions.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (transactionsData[arrayIndex]){
        transactionsData[arrayIndex] = req.body
        res.status(200).json((transactionsData[arrayIndex]))
    } else{
        res.status(404).json({error: "Could not locate bookmark to be updated"})
    }
})
module.exports = transactions;